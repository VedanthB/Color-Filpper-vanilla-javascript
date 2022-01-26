const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const button = document.querySelector("button");
const color = document.querySelector(".color");

button.addEventListener("click", () => {
  const randomNumber = getRandomNumber();
  console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

const getRandomNumber = () => Math.floor(Math.random() * colors.length);
