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
const USER_DETAIL_COPY = {};

Object.assign(USER_DETAIL_COPY, USER_DETAIL);

contactGuard(USER_DETAIL_COPY, window.location.origin);

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let errors = 0;
    let arrInput = getAllInput(loginForm);

    arrInput.forEach((el) => {
        const keyInPattern = el.getAttribute('id');

        for (const prop in pattern[keyInPattern]) {
            pattern[keyInPattern][prop](el)
        }
    });

    arrInput.forEach((el) => {
        if (arrInput.length === 5) arrInput.pop();
        el.nextElementSibling.innerHTML ? errors++ : errors
    });

    USER_DETAIL_COPY.NAME = loginName.value;
    USER_DETAIL_COPY.SURNAME = loginSurname.value;
    USER_DETAIL_COPY.EMAIL = loginEmail.value;
    USER_DETAIL_COPY.DETAILS = loginTextArea.value;
    USER_DETAIL_COPY.SUBSCRIBE = loginSubscribe.checked ? 'I want subscribe' : 'I do not want to subscribe';

    if (errors === 0) {
        localStorage.setItem('user', JSON.stringify(USER_DETAIL_COPY));
        window.location.assign(`${window.location.origin}/overview/overview.html`);
    } else
        localStorage.clear();
});