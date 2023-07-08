import { Surface } from "gl-react-dom"; // for React DOM
import { useEffect, useState } from "react";
import GraphComponent from "./GraphComponent";
import { Point, Size } from "../Utils";
import GraphMgr from "../GraphManager/GraphMgr";

export default function GLWrapper(
  { gmgr }: {
    gmgr: GraphMgr
  }
){
  const [res, setRes] = useState<Size>({w:800, h:800});
  const [defis, setDefis] = useState(['']);
  const [ineqs, setIneqs] = useState(['']);
  const [mouseDown, setMouseDown] = useState(false);
  const [origin, setOrigin] = useState<Point>({x:0,y:0});
  const [scale, setScale] = useState(10 / 800);

  useEffect(()=>{
    setDefis(gmgr.expressions.filter(ex=>ex.type==='defi').map(e=>e.statement));
    setIneqs(gmgr.expressions.filter(ex=>ex.type==='ineq').map(e=>e.statement));
    setRes(r=>({
      w: window.innerWidth - gmgr.controlsWidth,
      h: window.innerHeight
    }));
  }, [gmgr]);

  function HandleMouseDown(){
    setMouseDown(true);
  }

  function HandleMouseMove(e: MouseEvent){
    if(mouseDown){
      setOrigin(o=>({
        x: o.x - e.movementX * scale,
        y: o.y - e.movementY * scale
      }));
    }
  }

  function HandleMouseUp(){
    setMouseDown(false);
  }

  function HandleWheel(e: WheelEvent){
    let glwr = document.querySelector('#gl-wrapper') as HTMLDivElement;
    if(!glwr)return;
    let ds = Math.exp(e.deltaY/500);
    let rect = glwr.getBoundingClientRect();
    let p: Point = {
      x: (e.clientX - rect.left - rect.width / 2) * scale,
      y: (e.clientY - rect.top - rect.height / 2) * scale,
    };

    setOrigin(o=>({
      x: o.x - p.x * (1-1/ds),
      y: o.y - p.y * (1-1/ds)
    }));

    setScale(s=>s*ds);
  }

  return (
    <div id='gl-wrapper'
    onMouseDown={HandleMouseDown}
    onMouseMove={(e)=>HandleMouseMove(e as unknown as MouseEvent)}
    onMouseUp={HandleMouseUp}
    onWheel={(e)=>HandleWheel(e as unknown as WheelEvent)}
    >
      <Surface width={res.w} height={res.h}>
        <GraphComponent
        defis={defis}
        ineqs={ineqs}
        res={res}
        origin={origin}
        scale={scale}
        />
      </Surface>
    </div>
  );
}
