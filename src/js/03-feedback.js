const throttle = require('lodash.throttle');

const FEED_FORM_KEY = "feedback-form-state";

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('input'),
    textarea: document.querySelector('textarea'),
}

let formData = {};

loadForm();

function inputsHandler(e) {
    formData[e.target.name] = e.target.value;

    localStorage.setItem(FEED_FORM_KEY, JSON.stringify(formData));
};


function loadForm() {
    const saveState = JSON.parse(localStorage.getItem(FEED_FORM_KEY));

    if (saveState === null) return;

    formData = saveState;

    refs.input.value = formData.email;
    refs.textarea.value = formData.message;
};

function onSubmitForm(e) {
    e.preventDefault();

    console.log(JSON.parse(localStorage.getItem(FEED_FORM_KEY)));

    e.currentTarget.reset();
    localStorage.removeItem(FEED_FORM_KEY);
}

refs.form.addEventListener('input', throttle(inputsHandler, 500));
refs.form.addEventListener('submit', onSubmitForm);