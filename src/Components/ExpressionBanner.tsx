import { useEffect, useRef, useState } from "react";
import GraphMgr from "../GraphManager/GraphMgr";
import { Parse } from "../Parser/Main";
import "../scss/ExpressionBanner.scss"

export default function ExpressionBanner(
  {gmgr, updateGmgr, exprno}: {
    gmgr: GraphMgr;
    updateGmgr: () => void;
    exprno: number;
  }
){
  const ref = useRef<HTMLElement>(null);

  useEffect(()=>{
    // ref.current?.focus();
  });

  function HandleInput(e: InputEvent){
    let textarea = e.target as HTMLSpanElement;

    // 現在のカーソルによる選択場所を記録
    let range0 = window.getSelection()?.getRangeAt(0);
    let so = range0?.startOffset as number;
    let eo = range0?.endOffset as number;
    let range = document.createRange();
    
    // テキストの解析
    let result = Parse(textarea.innerText);

    if(result.status){
      gmgr.setExpressionAt(exprno, result.type, textarea.innerText);
      gmgr.setStatementAt(exprno, result.result);
      updateGmgr();

      // 再描画が行われるため，カーソルの選択場所を復元する
      setTimeout(()=>{
        range.setStart(textarea.firstChild!, so);
        range.setEnd(textarea.firstChild!, eo);
        window.getSelection()?.removeAllRanges();
        window.getSelection()?.addRange(range);
      }, 10);
    }
  }

  return <div className='expression-banner'>
    <div className='expression-icon'>{gmgr.expressions[exprno].type==='defi' ? '=' : '>'}</div>
    <span
      className="textarea"
      role="textbox"
      ref={ref}
      contentEditable
      suppressContentEditableWarning
      onInput={e=>HandleInput(e as unknown as InputEvent)}
    >
      {gmgr.expressions[exprno].expression}
    </span>
    <div className='expression-del-icon' onClick={e=>{
      gmgr.removeExpressionAt(exprno);
      updateGmgr();
    }}>x</div>
    {/* <div className='expression-del-icon' onClick={e=>(e.target as HTMLElement).parentElement?.parentElement?.removeChild((e.target as HTMLElement).parentElement!)}>x</div> */}
  </div>
}