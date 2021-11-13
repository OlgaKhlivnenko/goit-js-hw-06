const btns = document.querySelectorAll(`button`);
 
btns.forEach(btn => {
    btn.addEventListener(`click`, function () {
        const action = this.dataset.action;
        console.log(action);
        const spanEl = document.querySelector(`#value`);
        const currentValue = Number(spanEl.textContent);
        let counterValue = 0;

        if (action === "increment") {
            counterValue = currentValue + 1;
        }
        else {
            counterValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
        }
        spanEl.textContent = counterValue;
    });
})