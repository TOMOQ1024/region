import { Surface } from "gl-react-dom"; // for React DOM
import { useEffect, useState } from "react";
import GraphComponent from "./GraphComponent";
import { Size } from "../Utils";
import GraphMgr from "../GraphManager/GraphMgr";

export default function GLWrapper(
  { gmgr }: {
    gmgr: GraphMgr
  }
){
  const [res, setRes] = useState<Size>({w:800, h:800});
  const [exp, setExp] = useState(gmgr.expressions[0].statement);
  useEffect(()=>{
    setExp(e=>{
      let ne = gmgr.expressions.map(e=>e.statement).join('\n');
      if(ne === '') return 'false';
      return ne;
    });
  }, [gmgr]);

  return (
    <div id='gl-wrapper'>
      <Surface width={res.w} height={res.h}>
        <GraphComponent exp={exp} res={res} />
      </Surface>
    </div>
  );
}
