const input = document.querySelector(`#name-input`);
const nameLable = document.querySelector(`#name-output`);

input.addEventListener(`input`, onInputChange);
function onInputChange(event) {
    nameLable.textContent = event.currentTarget.value;
}
input.addEventListener(`keypress`, onInputEmpty);
function onInputEmpty(evt) {
    if (evt.currentTarget.value.length === 0) {
        input.value = nameLable.textContent;
    }
}