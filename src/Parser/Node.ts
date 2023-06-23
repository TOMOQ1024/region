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
}
