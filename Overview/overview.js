const overviewName = document.getElementById('overviewName');
const overviewSurname = document.getElementById('overviewSurname');
const overviewEmail = document.getElementById('overviewEmail');
const overviewDetails = document.getElementById('overviewDetails');
const overviewSubscribe = document.getElementById('overviewSubscribe');
const overviewBtn = document.getElementById('overviewBtn');
const lStorageData = localStorage.getItem('user')
const emptyFields = [overviewName, overviewSurname,  overviewEmail, overviewDetails, overviewSubscribe];

function overviewGuard() {
    const isExist = localStorage.getItem('user');
    if(!isExist) {
        window.location.assign(`${window.location.origin}/contact/contact.html`);
    }
}

overviewGuard();

emptyFields.forEach( (el, index) => {
    el.innerHTML = Object.values(JSON.parse(lStorageData))[index];
});

overviewBtn.addEventListener('click', () => {
    localStorage.clear();
    window.location.assign(`${window.location.origin}/contact/contact.html`);
});
