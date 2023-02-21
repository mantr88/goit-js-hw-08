const throttle = require('lodash.throttle');

const EMAIL_KEY = "email";
const MESSAGE_KEY = "massage";
const formRef = document.querySelector('.feedback-form');

function inputsHandler(e) {
    
    e.preventDefault()
    console.log('throtle work!')
    localStorage.setItem(EMAIL_KEY, e.currentTarget.email.value);
    localStorage.setItem(MESSAGE_KEY, e.currentTarget.message.value);



}

formRef.addEventListener('input', throttle(inputsHandler, 500));