import { FuncName } from "./Func";

export enum TokenType {
  VAR = 'var',
  EQL = 'equal',
  GEQ = 'greater than or equal to',
  LEQ = 'less than or equal to',
  ADD = '+',
  SUB = '-',
  MUL = '*',
  DIV = '/',
  POW = '^',
  NUM = 'number',
  LPT = 'left parenthesis',
  RPT = 'right parenthesis',
  CMA = 'comma',
  FNC = 'function',
  UNK = 'unknown',
  EOL = 'EOL',
}

export class Token {
  constructor(
    public type: TokenType = TokenType.UNK,
    public value: (number | FuncName) = 0,
    public raw: string = ''
  ){}

  static eol = new Token(TokenType.EOL);
}

export { FuncName };

