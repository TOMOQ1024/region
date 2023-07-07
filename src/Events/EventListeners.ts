import HandleMouseMove from "./HandleMouseMove";
import HandleMouseDown from "./HandleMouseDown";
import HandleMouseUp from "./HandleMouseUp";
import HandlePaste from "./HandlePaste";
import HandleWheel from "./HandleWheel";

export function addEventListeners(){
  document.addEventListener('mousemove', HandleMouseMove, {passive: false});
  document.addEventListener('mousedown', HandleMouseDown, {passive: false});
  document.addEventListener('mouseup', HandleMouseUp, {passive: false});
  document.addEventListener('wheel', HandleWheel, {passive: false});
  document.addEventListener("paste", HandlePaste, {passive: false});
}

export function removeEventListeners(){
  document.removeEventListener('mousemove', HandleMouseMove);
  document.removeEventListener('mousedown', HandleMouseDown);
  document.removeEventListener('mouseup', HandleMouseUp);
  document.removeEventListener('wheel', HandleWheel);
  document.removeEventListener("paste", HandlePaste);
}