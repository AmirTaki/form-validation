const submitBtn = document.getElementById("submitBtn")
const nameErorr = document.getElementById('nameError')
const emailError = document.getElementById('emailError')
const passError = document.getElementById('passError')

const validationName  =() =>{
    let name = document.getElementById('name').value

    if ( name.length  == 0 ){
        nameErorr.innerHTML = "Name is required";
        nameErorr.previousElementSibling.classList.add('bi-x')
        return false
    }

    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameErorr.innerHTML = 'Write full Name'
        nameErorr.previousElementSibling.classList.add('bi-x')
        return false
    }
    nameErorr.innerHTML = ''
    nameErorr.previousElementSibling.classList.add('bi-check-lg')    
    return true

}


const validationEmail = () => {
    let email  = document.getElementById('email').value

       if ( email.length  == 0 ){
        emailError.innerHTML = "Email is required";
        emailError.previousElementSibling.classList.add('bi-x')
        return false
    }
      if (!email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        emailError.innerHTML = 'Write full Email'
        emailError.previousElementSibling.classList.add('bi-x')
        return false

        
    }
    emailError.innerHTML = ''
    emailError.previousElementSibling.classList.add('bi-check-lg')    
    return true

}

const validationPassword = () => {
    let password  = document.getElementById('password').value

    if ( password.length  == 0 ){
        passError.innerHTML = "Password is required";
        passError.previousElementSibling.classList.add('bi-x')
        return false
    }

    if (!password.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)) {
        passError.innerHTML = 'Password should contain 1Uppercase, 1Lowecase, 1 Digit & 1Alphabet '
        passError.previousElementSibling.classList.add('bi-x')
        return false
    }
    
    passError.innerHTML = ''
    passError.previousElementSibling.classList.add('bi-check-lg')    
    return true
}

submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    validationName() &&  validationEmail() && validationPassword() ? alert ('From Submitted Successfully') : ''
})

