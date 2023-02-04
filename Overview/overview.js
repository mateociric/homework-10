import { location } from "../location.js";

let overviewName = document.getElementById('overviewName');
let overviewSurname = document.getElementById('overviewSurname');
let overviewEmail = document.getElementById('overviewEmail');
let overviewDetails = document.getElementById('overviewDetails');
let overviewSubscribe = document.getElementById('overviewSubscribe');
let overviewBtn = document.getElementById('overviewBtn');
let lStorageData = localStorage.getItem('user')
let emptyFields = [overviewName, overviewSurname,  overviewEmail, overviewDetails, overviewSubscribe];

function overviewGuard() {
    let isExist = localStorage.getItem('user');
    if(!isExist) {
        window.location.assign(`${location}//Contact/contact.html`);
    }
}

overviewGuard();

emptyFields.forEach( (el, index) => {
    el.innerHTML = Object.values(JSON.parse(lStorageData))[index];
});

overviewBtn.addEventListener('click', () => {
    //localStorage.clear();
    window.location.assign(`${location}//Contact/contact.html`);
});
