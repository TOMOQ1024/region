import { ParseResult } from "../Utils";
import Tokenize from "./Tokenize";

export function Parse(input: string): ParseResult {
  let tokens = Tokenize(input);
  let i = 0;
  
  return ({
    status: false,
    result: ''
  })
}