import { ParseResult } from "../Utils";
import { CStack } from "./CStack";
import Parser from "./Parser";

export function Parse(input: string): ParseResult {
  let parser = new Parser();

  console.log(`input: "${input}"`);
  console.clear();
  try {
    let n = performance.now();
    let result = parser.parse(input);
    console.log(result);
    console.log(result.toString());
    console.log(`parse end in ${performance.now()-n}ms`);
    let cst = new CStack(result);
    console.log(cst.togl(cst.root));
    return ({
      status: true,
      result: cst.togl(cst.root)
    });
  } catch (e) {
    console.error(e);
    return ({
      status: false,
      result: ''
    });
  }
  
}