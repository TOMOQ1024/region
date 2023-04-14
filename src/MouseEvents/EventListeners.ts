import HandleMouseMove from "./HandleMouseMove";
import HandleMouseDown from "./HandleMouseDown";
import HandleMouseUp from "./HandleMouseUp";

export function addEventListeners(){
  document.addEventListener('mousemove', HandleMouseMove, {passive: false});
  document.addEventListener('mousedown', HandleMouseDown, {passive: false});
  document.addEventListener('mouseup', HandleMouseUp, {passive: false});
}

export function removeEventListeners(){
  document.removeEventListener('mousemove', HandleMouseMove);
  document.removeEventListener('mousedown', HandleMouseDown);
  document.removeEventListener('mouseup', HandleMouseUp);
}