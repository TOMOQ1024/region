import { Surface } from "gl-react-dom"; // for React DOM
import { useState } from "react";
import GraphComponent from "./GraphComponent";
import { Size } from "../Utils";

export default function GLWrapper(
  { statements }: {
    statements: string[]
  }
){
  const [res, setRes] = useState<Size>({w:800, h:800});

  return (
    <div id='gl-wrapper'>
      <Surface width={res.w} height={res.h}>
        <GraphComponent exp={statements.join('\n')} res={res} />
      </Surface>
    </div>
  );
}
