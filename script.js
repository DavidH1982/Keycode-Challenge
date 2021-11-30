// let keyCode = document.addEventListener("keypress", (event) => {
//   console.log(event.code);
// });
// let keyKey = document.addEventListener("keypress", (event) => {
//   console.log(event.key);
// });
// let keyWhich = document.addEventListener("keypress", (event) => {
//   console.log(event.charCode);
// });

// const input = document.addEventListener("keypress", () => {
//   document.getElementById("keyOutput").textContent = `${keyCode}`;
//   document.getElementById("codeOutput").textContent = `${keyKey}`;
//   document.getElementById("whichOutput").textContent = `${keyWhich}`;
// });

let keyCode = "";
let keyKey = "";
let keyWhich = 0;

document.addEventListener("keypress", (event) => {
  keyCode = event.code;
  keyKey = event.key;
  keyWhich = event.charCode;
});

document.addEventListener("keypress", () => {
  document.getElementById("keyOutput").textContent = `${keyCode}`;
  document.getElementById("codeOutput").textContent = `${keyKey}`;
  document.getElementById("whichOutput").textContent = `${keyWhich}`;
  document.getElementById("bigWhich").textContent = `${keyWhich}`;
});
