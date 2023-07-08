import { Expr, ExprType } from "../Utils";

export default class GraphMgr {
  expressions: Expr[] = [];
  controlsWidth: number = 400;
  definedVariableNames: string[] = [];

  constructor(){
    this.expressions.push(new Expr());
  }

  setExpressionAt(i: number, t: ExprType, e=''){
    if(this.expressions.length <= i){
      console.error(`Index Out of Range: ${this.expressions.length} <= ${i}`);
      process.exit();
    }
    this.expressions[i].type = t;
    this.expressions[i].expression = e;
  }

  setStatementAt(i: number, s=''){
    if(this.expressions.length <= i){
      console.error(`Index Out of Range: ${this.expressions.length} <= ${i}`);
      process.exit();
    }
    this.expressions[i].statement = s;
  }

  pushNewExpression(){
    this.expressions.push(new Expr());
  }

  removeExpressionAt(i: number){
    if(this.expressions[i].type === 'defi'){
      this.definedVariableNames = this.definedVariableNames.filter(
        n=>n!==this.expressions[i].statement.split('=')[0]
      );
    }
    return this.expressions.splice(i, 1);
  }

  updateDVN(){
    this.definedVariableNames = [];
    for(let j=0; j<this.expressions.length; j++){
      if(this.expressions[j].type === 'defi'){
        this.definedVariableNames.push(this.expressions[j].statement.split('=')[0]);
      }
    }
  }

  setControlsWidth(fn: (cw:number)=>number){
    this.controlsWidth = fn(this.controlsWidth);
  }
}