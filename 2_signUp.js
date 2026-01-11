'use strict'

const firstNameField = document.querySelector('#firstName');
const lastNameField = document.querySelector('#lastName');
const emailField = document.querySelector('#email');
const passwordField = document.querySelector('#password');
const confirmPasswordField = document.querySelector('#confirmPassword');
const form = document.querySelector('form');

form.addEventListener('submit', function(event){
    event.preventDefault();

    console.log(firstNameField.value);
    console.log(lastNameField.value);
    console.log(emailField.value);
    console.log(passwordField.value);
    console.log(confirmPasswordField.value);

    alert('password not matched');
});