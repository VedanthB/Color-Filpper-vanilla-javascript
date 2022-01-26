const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const button = document.querySelector(".button");
const color = document.querySelector(".color");

button.addEventListener("click", () => {
  let hexValue = "#";
  for (let i = 0; i < 6; i++) {
    hexValue += hex[generateRandom()];
  }
  console.log(hexValue);
  color.textContent = hexValue;
  document.body.style.backgroundColor = hexValue;
});

const generateRandom = () => Math.floor(Math.random() * hex.length);
