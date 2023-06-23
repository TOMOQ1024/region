export class CStack {
  data: number[] = [];
  constructor () {}

  push(x:number){
    this.data.push(x);
  }

  pop(){
    return this.data.pop();
  }
}