import USER_DETAIL from "../user-detail.js";
import getAllInput from "./add-on/input-collection.js";
import pattern from "./add-on/pattern-checking.js";
import contactGuard from "./add-on/contact-guard.js";

let loginForm = document.getElementById('loginForm');
let loginName = document.getElementById('loginName');
let loginSurname = document.getElementById('loginSurname');
let loginEmail = document.getElementById('loginEmail');
let loginTextArea = document.getElementById('loginTextArea');
let loginSubscribe = document.getElementById('loginSubscribe');

contactGuard(USER_DETAIL, window.location.origin);

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let errors = 0;
    let arrInput = getAllInput(loginForm);

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