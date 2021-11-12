const input = document.getElementById(`font-size-control`);
const span = document.getElementById(`text`);
console.log(span);

input.addEventListener(`input`, onInputScroll);
function onInputScroll(event) {
    console.log(event.target.value);
    span.style.fontSize = (event.target.value + `px`);
};