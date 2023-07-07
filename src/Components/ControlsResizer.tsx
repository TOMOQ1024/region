import { useState } from "react";
import GraphMgr from "../GraphManager/GraphMgr";

export default function ControlsResizer(
  {gmgr, updateGmgr} : {
    gmgr: GraphMgr;
    updateGmgr: () => void
}){
  const [resizing, setResizing] = useState(false);

  function HandleMouseDown(e: MouseEvent){
    setResizing(true);
    console.log('resi');
  }

  function HandleMouseMove(e: MouseEvent){
    if(e.buttons & 0b01){
      // 左ボタンドラッグ時
      gmgr.setControlsWidth(cw=>e.clientX-15);
      updateGmgr();
    }
  }

  function HandleMouseUp(e: MouseEvent){
    setResizing(false);
  }

  return (
    <div
    id='controls-resizer'
    onMouseDown={(e)=>HandleMouseDown(e as unknown as MouseEvent)}
    onMouseMove={(e)=>HandleMouseMove(e as unknown as MouseEvent)}
    onMouseUp={(e)=>HandleMouseUp(e as unknown as MouseEvent)}
    ></div>
  )
}