const counterValue = 0;
const spanEl = document.querySelector(`#value`);
const btns = document.querySelectorAll(`button`);
 
btns.forEach(btn => {
    btn.addEventListener(`click`, function () {
        const action = this.dataset.action;
        console.log(action);
        const currentValue = +spanEl.textContent;
        

        if (action === "decrement") {
            counterValue = currentValue + 1;
        } else {
            counterValue = currentValue - 1 > 0 ?
                currentValue - 1 :
                0;
        }
        spanEl.textContent = counterValue;
    })
})