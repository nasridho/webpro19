
function errorEmailFun() {
    let emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    
    errorEmail.style.display = 'block'

    if (email.value.match(emailFormat)) {
        errorEmail.classList.remove("text-danger")
        errorEmail.classList.add("text-success")
    } else {
        errorEmail.classList.remove("text-success")
        errorEmail.classList.add("text-danger")
    }
}
