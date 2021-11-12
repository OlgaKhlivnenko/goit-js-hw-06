const input = document.querySelector(`input`);
const style = document.querySelector(`style`);
const length = input.getAttribute("data-length")
input.addEventListener(`change`, onInputChange);
console.log(input);
console.log(length);
function onInputChange(event) {
    console.log(event.currentTarget.value);
    console.log(event.currentTarget.value.length);
    if (event.currentTarget.value.length === Number(length)) {
        input.classList.add(`valid`);
        input.classList.remove(`invalid`);
    }
  
    input.classList.add(`invalid`);
    input.classList.remove(`valid`);
}