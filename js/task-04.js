const btns = document.querySelectorAll(`button`);
const currentValue = document.querySelector(`#value`);
let counterValue = 0;
currentValue.textContent = counterValue;
btns.forEach(btn => {
    btn.addEventListener(`click`, function () {
        const action = btn.dataset.action;
              
        if (action === "increment") {
            counterValue += 1;
           currentValue.textContent = counterValue;
        }
        if (action === "decrement") {
            counterValue -= 1;
           currentValue.textContent = counterValue;
        }
    })
})