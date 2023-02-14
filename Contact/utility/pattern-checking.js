const pattern = {
    loginName: {
        length: checkLenght,
        minLenght: checkMinLenght,
        maxLength: checkMaxLength,
    },
    loginSurname: {
        length: checkLenght,
        minLenght: checkMinLenght,
        maxLength: checkMaxLength,
    },
    loginEmail: {
        length: checkLenght,
        minLenght: checkMinLenght,
        maxLength: checkMaxLengthEmail,
        reg: checkRegEmail,
    },
    loginTextArea: {
        length: checkLenght,
        minLenght: checkMinLenght,
        maxLength: checkMaxLengthTextarea,
    },
}

function checkLenght(input) {
    input.nextElementSibling.textContent = '';
    if (!input.value.trim().length) {
        input.nextElementSibling.textContent = 'Invalid input!';
    }
}
function checkMinLenght(input) {
    if (input.value.trim().length < 5 && input.nextElementSibling.textContent === '') {
        input.nextElementSibling.textContent = 'Min is 5 chr!';
    }
}
function checkMaxLength(input) {
    if (input.value.trim().length > 16 && input.nextElementSibling.textContent === '') {
        input.nextElementSibling.textContent = 'Max is 15 chr!';
    }
}
function checkRegEmail(input) {
    let validateEmail = String(input.value).toLowerCase().match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if(validateEmail === null && input.nextElementSibling.textContent === '') {
        input.nextElementSibling.textContent = 'Not valid email!';
    }
}
function checkMaxLengthEmail(input) {
    if (input.value.trim().length > 30 && input.nextElementSibling.textContent === '') {
        input.nextElementSibling.textContent = 'Max is 15 chr!';
    }
}
function checkMaxLengthTextarea(input) {
    if (input.value.trim().length > 31 && input.nextElementSibling.textContent === '') {
        input.nextElementSibling.textContent = 'Max is 30 chr!';
    }
}

export default pattern;