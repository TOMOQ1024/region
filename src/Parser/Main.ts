import { ParseResult } from "../Utils";
import Parser from "./Parser";

export function Parse(input: string): ParseResult {
  let parser = new Parser();

  let n = performance.now();
  console.log(`input: "${input}"`);
  parser.parse(input);
  console.log(`parse end in ${performance.now()-n}ms`);
  
  return ({
    status: false,
    result: ''
  });
}