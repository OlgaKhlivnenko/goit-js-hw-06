function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const box = document.querySelector(`.widget`);
const colorEl = document.querySelector(`.color`);
const btnChangeColor = document.querySelector(`.change-color`);
const bodyEl = document.querySelector(`body`);

btnChangeColor.addEventListener(`click`, onChangeBgc);
  
function onChangeBgc() {
    const colorChange = getRandomHexColor();
  colorEl.textContent = colorChange;
  bodyEl.style.backgroundColor = colorChange;
}