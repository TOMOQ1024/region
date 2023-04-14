import { Surface } from "gl-react-dom"; // for React DOM
import { useState } from "react";
import GraphComponent from "./GraphComponent";
import { Size } from "./Utils";

export default function GLWrapper(){
  const [res, setRes] = useState<Size>({w:800, h:800});

  return (
    <div id='gl-wrapper'>
      <Surface width={res.w} height={res.h}>
        <GraphComponent exp={"abs(abs(abs(x)-30.0)-30.0)+abs(y)<20.0"} res={res} />
      </Surface>
    </div>
  );
}
