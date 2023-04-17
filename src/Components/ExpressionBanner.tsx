import { Key } from "react";
import { Expr } from "../Utils"

export default function ExpressionBanner(
  {expression}: {
    expression: Expr;
  }
){
  return <div className='expression-banner'>
    <div className='expression-icon'>{expression.type==='defi' ? '=' : '>'}</div>
    <span
      className="textarea"
      role="textbox"
      contentEditable
      suppressContentEditableWarning
    >
      {expression.expression}
    </span>
    <div className='expression-del-icon' onClick={e=>(e.target as HTMLElement).parentElement?.parentElement?.removeChild((e.target as HTMLElement).parentElement!)}>x</div>
  </div>
}