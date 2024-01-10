let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let msgError = document.getElementById("msg-error");
let submitError = document.getElementById("submit-error");

function validateName(){
    let name = document.getElementById("name").value;
    if (name.length == 0){
        nameError.innerHTML = "Name Is Required";
        return false
    }else if (!name.match(/^[A-Za-z]+\s{1}[A-Za-z]+$/)){
        nameError.innerHTML = "Write Full Name"
        return false
    }else {
        nameError.innerHTML= '<i class="fas fa-circle-check"></i>'
        return true
    }
}

function validatePhone(){
    let phone = document.getElementById("phone").value;
    if (phone.length == 0){
        phoneError.innerHTML = "Phone No. Is Required";
        return false

    }else if (phone.match(/^\d{3}\s{1}\d{3}\s{1}\d{4}/) || phone.match(/^\d{3}\-{1}\d{3}\-{1}\d{4}/) || phone.match(/^\d{10}$/)){
        phoneError.innerHTML= '<i class="fas fa-circle-check"></i>'
        return true
    }else if (!phone.match(/^\d{3}\s{1}\d{3}\s{1}\d{4}/) || !phone.match(/^\d{3}\-{1}\d{3}\-{1}\d{4}/)) {
        phoneError.innerHTML = "right pattern is 123 456 7891";
        return false
    }
        
}

let phoneInput = document.getElementById("phone");
phoneInput.addEventListener("blur", ()=>{
    if(phoneInput.value.length == 10){
        phoneInput.value = `${phoneInput.value.slice(0,3)}-${phoneInput.value.slice(3,6)}-${phoneInput.value.slice(6,10)}`
    }else if(phoneInput.value.length == 12){
        phoneInput.value = phoneInput.value.replaceAll(" ", "-")
    }
})


function validateEmail(){
    let email = document.getElementById("email").value;
    if (email.length == 0){
        emailError.innerHTML = "E-mail Is Required";
        return false
          
    }else if (email.match(/^\w+\@\w+\.[A-Za-z]{2,4}$/)){
        emailError.innerHTML= '<i class="fas fa-circle-check"></i>'
        return true
    }else{
        emailError.innerHTML= 'Invalid E-mail'
        return false    
    }    
}   

function validateMsg(){
    let msg = document.getElementById("msg").value;
    if (msg.length == 0){
        msgError.innerHTML = "Message Is Required";
        msgError.style.color = 'red';        
        msgError.style.bottom = "12px";
        msgError.style.transition = "0.5s";
        return false
        
    }else if (msg.length > 0 && msg.length <30){
        msgError.innerHTML = "Message Is Too Short";
        msgError.style.color = 'red';        
        msgError.style.bottom = "12px";
        msgError.style.transition = "0.5s";
        return false
    }else{
        msgError.innerHTML= `Characters Left: ${300 - msg.length}`;
        msgError.style.color = 'seagreen';        
        msgError.style.bottom = "-18px";
        msgError.style.transition = "0.5s";
        return true    
    }    
}

function validateForm(){
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMsg()){
        submitError.style.display = 'Block';
        submitError.innerHTML = "Please Fix The Problem";
        setTimeout(() => {submitError.style.display = 'none';}, 3000);
        return false
    }else{
        return true
    }
}