import { useState } from "react"
import { Expr } from "../Utils";
import ExpressionBanner from "./Expression/ExpressionBanner";

export default function Controls(){
  const [expressions, setExpressions] = useState<Expr[]>([{type:'ineq',expression:'1>x^2+y^2'}]);
  return (
    <div id='Controls'>
      <div id='controls-wrapper' style={{'width':'300px'}}>
        <div id='controls-header'></div>
        {expressions.map(e=>{
          return <ExpressionBanner key={performance.now()} expression={e}/>
        })}
      </div>
      <div id='controls-resizer'></div>
    </div>
  )
}