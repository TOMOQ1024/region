import { useState } from "react"
import { Expr } from "../Utils";
import ExpressionBanner from "./ExpressionBanner";

export default function Controls(){
  const [expressions, setExpressions] = useState<Expr[]>([{type:'ineq',expression:'1>x^2+y^2'}]);
  return (
    <div id='Controls'>
      <div id='controls-wrapper' style={{'width':'300px'}}>
        <div id='controls-header'></div>
        {expressions.map(e=>{
          return <ExpressionBanner key={Math.random()} expression={e}/>
        })}
        <div className='expression-banner' onClick={()=>setExpressions(e=>[...e,{type:'ineq',expression:''}])}>
          <div className='expression-icon'>+</div>
          <span
            className="textarea"
            role="textbox"
            // contentEditable
            suppressContentEditableWarning
          >{'Click here to add banner'}</span>
        </div>
      </div>
      <div id='controls-resizer'></div>
    </div>
  )
}