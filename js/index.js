var pasteBox = document.getElementById("paste-no-event");
pasteBox.onpaste = function (e) {
  e.preventDefault();
  return false;
};

// Alternative syntax:

// pasteBox.addEventListener('paste', e => {
//   e.preventDefault();
//   return false;
// });