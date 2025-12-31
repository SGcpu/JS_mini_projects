const nameError = document.getElementById('name-error')
const phoneError = document.getElementById('phone-error')
const emailError = document.getElementById('email-error')
const messageError = document.getElementById('message-error')
const submitError = document.getElementById('submit-error')


function validateName() {
    let name = document.getElementById('contact-name').value;
    if(name.length == 0){
        nameError.innerText = 'Name is Required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerText = 'Write Full Name';
        return false
    }
    const check = document.createElement('i');
    check.classList.add('fas fa-check-circle');
    nameError.append(check);
    return true;
}