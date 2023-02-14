import USER_DETAIL from "../user-detail.js";
import getAllInput from "./utility/input-collection.js";
import pattern from "./utility/pattern-checking.js";
import contactGuard from "./utility/contact-guard.js";

const loginForm = document.getElementById('loginForm');
const loginName = document.getElementById('loginName');
const loginSurname = document.getElementById('loginSurname');
const loginEmail = document.getElementById('loginEmail');
const loginTextArea = document.getElementById('loginTextArea');
const loginSubscribe = document.getElementById('loginSubscribe');

contactGuard(USER_DETAIL, window.location.origin);

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let errors = 0;
    let arrInput = getAllInput(loginForm);

    arrInput.forEach((el) => {
        const keyInPattern = el.getAttribute('id');

        for (const prop in pattern[keyInPattern]) {
            console.log(pattern[keyInPattern][prop](el))
        }
    });

    arrInput.forEach((el) => {
        if (arrInput.length === 5) arrInput.pop();
        el.nextElementSibling.innerHTML ? errors++ : errors
    });

    USER_DETAIL.NAME = loginName.value;
    USER_DETAIL.SURNAME = loginSurname.value;
    USER_DETAIL.EMAIL = loginEmail.value;
    USER_DETAIL.DETAILS = loginTextArea.value;
    USER_DETAIL.SUBSCRIBE = loginSubscribe.checked ? 'I want subscribe' : 'I do not want to subscribe';

    if (errors === 0) {
        localStorage.setItem('user', JSON.stringify(USER_DETAIL));
        window.location.assign(`${window.location.origin}/overview/overview.html`);
    } else
        localStorage.clear();
});