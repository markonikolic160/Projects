let form = document.getElementById("form");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let password2 = document.getElementById("password2");


form.addEventListener("submit", (e)=> {
    e.preventDefault();

    checkAllImputs();
});

function checkAllImputs(){
    let usernameValue = username.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();
    let password2Value = password2.value.trim();

    if(usernameValue === ""){
        setErrorFor(username, "Username cannot be blank");
    } else {
        setSuccessFor(username);
    }

    if(emailValue === ""){
        setErrorFor(email,"Email cannot be blank");
    } else if(!isEmail(emailValue)){
        setErrorFor(email,"Email is not valid");
    } else {
        setSuccessFor(email);
    }

    if(passwordValue === ""){
        setErrorFor(password, "Password cannot be blank");
    }else if(passwordValue.length < 8){
        setErrorFor(password, "Password must be 8 or more characters");
    } else {
        setSuccessFor(password);
    }

    if(password2Value === ""){
        setErrorFor(password2, "Password cannot be blank");
    }else if(passwordValue !== password2Value){
        setErrorFor(password2, "Passwords does not match");
    }
     else {
        setSuccessFor(password2); 
    }
}

function setErrorFor(input,message){
    let control = input.parentElement;
    let small = control.querySelector("small");

    small.innerText = message;
    control.className = "control error";
}

function setSuccessFor(input){
    let control = input.parentElement;
    control.className = "control success"
}

function isEmail(email){
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}