const submitBtn = document.getElementById("submitBtn")
const nameErorr = document.getElementById('nameError')

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



submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    validationName() ? alert ('From Submitted Successfully') : ''

})