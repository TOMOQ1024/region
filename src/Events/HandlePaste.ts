export default function HandlePaste(e: ClipboardEvent) {
  // cancel paste
  e.preventDefault();

  // get text representation of clipboard
  var text = e.clipboardData?.getData('text/plain');

  // insert text manually
  document.execCommand("insertText", false, text);
}