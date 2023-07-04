import { Parse } from "../Parser/Main";
import { Expr } from "../Utils"

export default function ExpressionBanner(
  {expression, setExpression, setStatementAt, removeExpression}: {
    expression: Expr;
    setExpression: (s: string) => void;
    setStatementAt: (i: number, s:string) => void;
    removeExpression: (i: number) => void;
  }
){
  function HandleInput(e: InputEvent){
    const textarea = e.target as HTMLSpanElement;
    // console.log('--- parse test ---');
    let result = Parse(textarea.innerText);
    if(result.status){
      setExpression(textarea.innerText);
      setStatementAt(0, result.result);
      setTimeout(()=>{
        textarea.focus();
      }, 100);
    }
    // console.log(textarea.innerText);
  }

  return <div className='expression-banner'>
    <div className='expression-icon'>{expression.type==='defi' ? '=' : '>'}</div>
    <span
      className="textarea"
      role="textbox"
      contentEditable
      suppressContentEditableWarning
      onInput={e=>HandleInput(e as unknown as InputEvent)}
    >
      {expression.expression}
    </span>
    <div className='expression-del-icon' onClick={e=>removeExpression(1)}>x</div>
    {/* <div className='expression-del-icon' onClick={e=>(e.target as HTMLElement).parentElement?.parentElement?.removeChild((e.target as HTMLElement).parentElement!)}>x</div> */}
  </div>
}