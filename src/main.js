const submitBtn = document.getElementById("submitBtn")
const nameErorr = document.getElementById('nameError')

const validationName  =() =>{
    let name = document.getElementById('name').value
    nameErorr.innerText = name.length  == 0 ? "Name is required"  : '' 
    return name.length  == 0 ? true : false;
    
}

submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    validationName() ? alert ('From Submitted Successfully') : ''

})