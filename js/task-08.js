const form = document.querySelector(`.login-form`);

form.addEventListener(`submit`, onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const { elements: { login, password } } = event.currentTarget;
    if (login.value === "" || password.value === "") {
        alert(`Все поля должны быть заполнены!`)
    }
    
    event.currentTarget.resert();
}

