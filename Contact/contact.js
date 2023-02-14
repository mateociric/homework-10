import USER_DETAIL from "../user-detail.js";
import getAllInput from "./add-on/input-collection.js";
import pattern from "./add-on/pattern-checking.js";
import { location } from "../location.js";
import contactGuard from "./add-on/contact-guard.js";

let loginForm = document.getElementById('loginForm');
let loginName = document.getElementById('loginName');
let loginSurname = document.getElementById('loginSurname');
let loginEmail = document.getElementById('loginEmail');
let loginTextArea = document.getElementById('loginTextArea');
let loginSubscribe = document.getElementById('loginSubscribe');
let btnSubmit = document.getElementById('btnSubmit');
let errors = 0;

contactGuard(USER_DETAIL, location);

btnSubmit.addEventListener('click', () => {

    let arrInput = getAllInput(loginForm);
    errors = 0;

    arrInput.forEach((el) => {
        let keyInPattern = el.getAttribute('id');

        for (let prop in pattern[keyInPattern]) {
            console.log(pattern[keyInPattern][prop](el))
        }
    });

    arrInput.forEach((el) => {
        if (arrInput.length === 5) arrInput.pop();
        el.nextElementSibling.innerHTML ? errors++ : errors
    });

    console.log(errors);

    USER_DETAIL.NAME = loginName.value;
    USER_DETAIL.SURNAME = loginSurname.value;
    USER_DETAIL.EMAIL = loginEmail.value;
    USER_DETAIL.DETAILS = loginTextArea.value;
    loginSubscribe.checked ? USER_DETAIL.SUBSCRIBE = 'I want subscribe' : USER_DETAIL.SUBSCRIBE = 'I do not want to subscribe'

});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (errors === 0) {
        localStorage.setItem('user', JSON.stringify(USER_DETAIL));
        window.location.assign(`${location}//Overview/overview.html`);
    } else
        localStorage.clear();
});