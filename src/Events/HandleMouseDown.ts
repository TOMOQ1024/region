import { MouseEventMode } from "../Utils";

export default function HandleMouseDown(e: MouseEvent){
  const app = document.getElementById('App') as HTMLElement;
  switch((e.target as HTMLElement).id){
    case 'controls-resizer':
      console.log('resizer!!!');
      app.classList.add('me-scw');
      break;
    default:
      break;
  }
}