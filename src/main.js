const submitBtn = document.getElementById("submitBtn")
const nameErorr = document.getElementById('nameError')

const validationName  =() =>{
    let name = document.getElementById('name').value

    if ( name.length  == 0 ){
        nameErorr.innerHTML = "Name is required"
        return false
    }

    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameErorr.innerHTML = 'Write full Name'
        return false
    }
        
    return true


    
}

submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    validationName() ? alert ('From Submitted Successfully') : ''

})