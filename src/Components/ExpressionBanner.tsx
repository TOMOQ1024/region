import { Parse } from "../Parser/Main";
import { Expr } from "../Utils"

export default function ExpressionBanner(
  {expression, removeExpression}: {
    expression: Expr;
    removeExpression: (i: number) => void;
  }
){
  function HandleInput(e: InputEvent){
    const textarea = e.target as HTMLSpanElement;
    // console.log('--- parse test ---');
    Parse(textarea.innerText);
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