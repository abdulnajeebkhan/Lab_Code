'use strict'

const usernameField = document.querySelector('#username');
const passwordField = document.querySelector('#password');
const form = document.querySelector('form');
const usernameRequiredLabel = document.querySelectorAll('.requiredLabel')[0];
const passwordRequiredLabel = document.querySelectorAll('.requiredLabel')[1];

form.addEventListener('submit', function(event){
    // let hasLowerCase = false;
    // let hasUpperCase = false;
    // let hasNumber = false;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    event.preventDefault();

    console.log(passwordField.value)

    let isUsernameCorrect = false, isPasswordCorrect = false;

    if(usernameField.value === ''){
        usernameRequiredLabel.style.display = 'inline';
    }
    else{
        passwordRequiredLabel.style.display = 'none';
        isUsernameCorrect = true;
    }

    if(!passwordRegex.test(passwordField.value)){
        passwordRequiredLabel.style.display = 'inline';
    }
    else{
        passwordRequiredLabel.style.display = 'none';
        isPasswordCorrect = true;
    }

    // for(let i=0; i<passwordField.value.length; i++){
    //     if(passwordField.value.charCodeAt(i) >= 65 && passwordField.value.charCodeAt(i) <= 90){
    //         hasUpperCase = true;
    //     }

    //     if(passwordField.value.charCodeAt(i) >= 97 && passwordField.value.charCodeAt(i) <= 122){
    //         hasLowerCase = true;
    //     }

    //     if(passwordField.value.charCodeAt(i) >= 48 && passwordField.value.charCodeAt(i) <= 57){
    //         hasNumber = true;
    //     }
    // }

    // if(!passwordField.value){
    //     passwordRequiredLabel.style.display = 'inline';
    //     passwordRequiredLabel.textContent = 'Password is required!';
    // }
    // else if(passwordField.value.length < 8){
    //     passwordRequiredLabel.style.display = 'inline';
    //     passwordRequiredLabel.textContent = 'Password should at least 8 characters long';
    // }
    // else if(!hasLowerCase){
    //     passwordRequiredLabel.style.display = 'inline';
    //     passwordRequiredLabel.textContent = 'Password should contain lower case!';
    // }
    // else if(!hasUpperCase){
    //     passwordRequiredLabel.style.display = 'inline';
    //     passwordRequiredLabel.textContent = 'Password should contain upper case!';
    // }
    // else if(!hasNumber){
    //     passwordRequiredLabel.style.display = 'inline';
    //     passwordRequiredLabel.textContent = 'Password should contain atleast one number!';
    // }
    // else{
    //     passwordRequiredLabel.style.display = 'none';
    // }

    if(isUsernameCorrect && isPasswordCorrect){
        window.location.href = './3_homePage.html';
    }
})