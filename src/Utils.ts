export interface Size {
  w: number;
  h: number;
}

export interface ParseResult {
  // 正しい構文かどうか
  status: boolean;
  // glslで実行可能なコードに変換したもの
  result: string;
}

export type MouseEventMode = ['set-controls-width'][number]