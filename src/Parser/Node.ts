import { FuncName } from "./Func";

export enum BNodeKind {
  VAR = 'var',
  ADD = 'add',
  SUB = 'sub',
  MUL = 'mul',
  DIV = 'div',
  POW = 'pow',
  NUM = 'num',
  FNC = 'fnc',
  UNK = 'unk'
}

export class BNode {
  constructor(
    public kind: BNodeKind = BNodeKind.UNK,
    public lhs: (BNode|null) = null,
    public rhs: (BNode|null) = null,
    public val: (number|FuncName) = 0
  ){}

  static zero = new BNode(BNodeKind.NUM, null, null, 0);

  toString(i:number=0){
    let str = '';
    str += `${''.padStart(i,'| ')}${this.kind} : ${this.val}\n`;
    if(this.lhs !== null) str += `${this.lhs.toString(i+2)}`;
    if(this.rhs !== null) str += `${this.rhs.toString(i+2)}`;
    return str;
  }
}
