const form = document.querySelector(`.login-form`);

form.addEventListener(`submit`, onFormSubmit);
    
    function onFormSubmit(event) {
        event.preventDefault();
        const FormEl = event.currentTarget.elements
        
        const email = FormEl.email.value;
        const password = FormEl.password.value;
        
    if (email === "" || password === "") {
        alert(`Все поля должны быть заполнены!`)
        return
        }
  
        const formData = { email, password };
        console.log(formData);
        
        form.reset();
}

