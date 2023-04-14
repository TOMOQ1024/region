import { MouseEventMode } from "../Utils";

export default function HandleMouseUp(e: MouseEvent){
  const app = document.getElementById('App') as HTMLElement;
  switch(app.className){
    case 'me-scw':
      app.classList.remove('me-scw');
      break;
    default:
      break;
  }
}