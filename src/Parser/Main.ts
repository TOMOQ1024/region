import { ParseResult } from "../Utils";
import { CStack } from "./CStack";
import { BNode } from "./Node";
import Parser from "./Parser";

export function Parse(input: string): ParseResult {
  if(!input.match(/[<>=]/)){
    return ({
      status: false,
      result: ''
    });
  }

  let parser = new Parser();

  console.log(`input: "${input}"`);
  console.clear();
  let n: number;
  let result: BNode;
  let cst: (CStack|undefined);
  try {
    n = performance.now();
    result = parser.parse(input);
    console.log(result);
    console.log(result.toString());
    console.log(`parse end in ${performance.now()-n}ms`);
    cst = new CStack(result);
    console.log(cst.togl(cst.root));
  } catch (e) {
    console.error(e);
    return ({ status: false, result: '' });
  } finally {
    if(cst === undefined){
      return ({status: false, result: ''});
    }
    return ({
      status: true,
      result: cst.togl(cst.root)
    });
  }
  
}