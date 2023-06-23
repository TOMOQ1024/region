import { CStack } from './CStack';
import { BNodeKind, BNode } from './Node';
import { FuncName } from "./Func";
import { Token, TokenType } from './Token'

export default class Parser {
  vars: number[] = [];
  currentLine: string = '';
  currentPointer: number = 0;
  cstack = new CStack();
  token = new Token();

  constructor(){}

  parse(input: string) {
    this.currentLine = input;
    this.currentPointer = 0;

    try {
      console.log(this.expr());
    } catch (e) {
      console.error(e);
      process.exit(1);
    }
  }

  expr(): BNode {
    let node: BNode;
    this.nextToken();
    if(this.consumeToken(TokenType.SUB)){
      node = new BNode(BNodeKind.SUB, this.mult(), BNode.zero);
    }
    else {
      this.consumeToken(TokenType.ADD);
      node = this.mult();
    }
    for(;;){
      if(this.consumeToken(TokenType.ADD)){
        node = new BNode(BNodeKind.ADD, this.mult(), node);
      }
      else if(this.consumeToken(TokenType.SUB)){
        node = new BNode(BNodeKind.SUB, this.mult(), node);
      }
      else {
        return node;
      }
    }
  }

  mult(): BNode {
    let node = this.powr();

    for(;;){
      if(this.consumeToken(TokenType.MUL)){
        node = new BNode(BNodeKind.MUL, this.powr(), node);
      } else if(this.consumeToken(TokenType.DIV)){
        node = new BNode(BNodeKind.DIV, this.powr(), node);
      } else if(!this.checkTokens(TokenType.ADD, TokenType.SUB, TokenType.CMA, TokenType.RPT) && !this.checkToken(TokenType.EOL)){
        console.log(this.token);
        node = new BNode(BNodeKind.UNK, this.powr(), node);
      } else {
        return node;
      }
    }
  }

  powr(): BNode {
    let node = this.prim();

    if(this.consumeToken(TokenType.POW)){
      return new BNode(BNodeKind.POW, node, this.powr());
    }

    return node;
  }

  prim(): BNode {
    let node: BNode;
    let fn: FuncName;
    if(this.consumeToken(TokenType.LPT)){
      node = this.expr();
      this.expectToken(TokenType.RPT);
      return node;
    }
    else if(fn = this.consumeFunc()){
      return this.func(fn);
    }
    // else if(fn = this.consumeVar()){
    //   return this.vari(fn);
    // }
    return this.nmbr(this.expectNumber());
  }

  func(fn: FuncName): BNode {
    return new BNode(BNodeKind.FNC, null, null, fn);
  }

  vari(): BNode {
    return new BNode();
  }

  nmbr(x: number): BNode {
    return new BNode(BNodeKind.NUM, null, null, x);
  }

  character(): string {
    let character = this.currentLine[this.currentPointer];
    if (/\s/.test(character)) {
      return this.nextCharacter();
    }
    return character;
  }

  nextCharacter(): string {
    let character = this.currentLine[++this.currentPointer];
    if (/\s/.test(character)) {
      return this.nextCharacter();
    }
    return character;
  }

  nextToken() {
    let character = this.character();
    this.token = new Token(TokenType.UNK, 0, character);

    if (character === undefined) {
      this.token = Token.eol;
      return;
    }

    if (this.isNumber(character)) {
      let numberText = '';
      while (this.isNumber(character)) {
        numberText += character;
        character = this.nextCharacter();
      }
      this.token.type = TokenType.NUM;
      this.token.value = parseInt(numberText, 10);
      return;
    }

    if (this.isVariable(character)) {
      this.token.type = TokenType.VAR;
      this.token.value = character.charCodeAt(0) - 'a'.charCodeAt(0);
      this.nextCharacter();
      return;
    }

    switch (character) {
      case '+':
        this.token.type = TokenType.ADD;
        break;
      case '-':
        this.token.type = TokenType.SUB;
        break;
      case '*':
        this.token.type = TokenType.MUL;
        break;
      case '/':
        this.token.type = TokenType.DIV;
        break;
      case '=':
        this.token.type = TokenType.EQL;
        break;
      case '(':
        this.token.type = TokenType.LPT;
        break;
      case ')':
        this.token.type = TokenType.RPT;
        break;
      default:
        this.token.type = TokenType.UNK;
    }

    this.nextCharacter();
    return;
  }
/*
void expect(char* op)
{
	if (token->kind != TK_RESERVED || strncmp(token->str, op, strlen(op)) != 0)
		error("'%s'ではありません", op);
	token = token->next;
}
*/
  expectToken(type: TokenType) {
    if(this.token.type != type){
      console.error(`Unexpected token error. Expected TokenType: ${type}, but caught following token`, this.token);
    }
    this.nextToken();
  }

  consumeToken(type: TokenType) {
    if(this.token && this.token.type != type){
      return false;
    }
    this.nextToken();
    return true;
  }

  checkToken(type: TokenType) {
    if(this.token && this.token.type != type){
      return false;
    }
    return true;
  }

  checkTokens(...types: TokenType[]) {
    if(this.token && 0 > types.indexOf(this.token.type)){
      return false;
    }
    return true;
  }

  consumeFunc(): FuncName {
    if(this.token.type != TokenType.FNC)return FuncName.NIL;
    let str = this.currentLine.slice(this.currentPointer);
    for(let fName in FuncName) {
      if((new RegExp(`^${fName}`)).test(str)){
        return fName as FuncName;
      }
    }
    return FuncName.NIL;
  }

  expectNumber(): number {
    if(this.token.type != TokenType.NUM){
      console.error(`Unexpected token error. Expected TokenType: NUM, but caught following token`, this.token);
    }
    let val = this.token.value;
    this.nextToken();
    return val as number;
  }

  isNumber(text: string): boolean {
    return /\d+/.test(text);
  }

  isVariable(text: string): boolean {
    return /[a-z]+/.test(text);
  }

  setVar(index: number, value: number) {
    this.vars[index] = value;
  }
}