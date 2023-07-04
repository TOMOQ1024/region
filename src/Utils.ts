export interface Size {
  w: number;
  h: number;
}

export interface Point {
  x: number;
  y: number;
}

export interface Graph {
  origin: Point;

}

export type ExprType = ['null', 'defi', 'ineq'][number];

export class Expr {
  type: ExprType = 'ineq';
  since: number;
  expression: string;
  statement: string;

  constructor(e='', s=''){
    this.since = performance.now();
    this.expression = e;
    this.statement = s;
  }
}

export interface ParseResult {
  // 正しい構文かどうか
  status: boolean;
  // glslで実行可能なコードに変換したもの
  result: string;
}

export type MouseEventMode = ['set-controls-width'][number]