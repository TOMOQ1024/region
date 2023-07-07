import { MouseEventMode } from "../Utils";

export default function HandleMouseMove(e: MouseEvent){
  const MEMode = document.getElementById('App')?.className!;
  switch(MEMode){
    // case 'me-scw':
    //   //e.preventDefault();
    //   if(e.buttons & 0b01){
    //     // 左ボタンドラッグ時
    //     const cwr = document.getElementById('controls-wrapper') as HTMLElement;
    //     if(!cwr)return;
    //     let w0 = cwr.style.width.match(/\d+/);
    //     cwr.style.width = `${parseInt(w0 ? w0[0] : '0') + e.movementX}px`;
    //   }
    //   break;
    default:
      break;
  }
}