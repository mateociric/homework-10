const pattern = {
    loginName: {
        zeroLength: checkZeroLenght,
        minLenght: checkMinLenght(5),
        maxLength: checkMaxLength(15),
    },
    loginSurname: {
        zeroLength: checkZeroLenght,
        minLenght: checkMinLenght(5),
        maxLength: checkMaxLength(15),
    },
    loginEmail: {
        zeroLength: checkZeroLenght,
        minLenght: checkMinLenght(5),
        maxLength: checkMaxLength(20),
        reg: checkRegEmail,
    },
    loginTextArea: {
        zeroLength: checkZeroLenght,
        minLenght: checkMinLenght(5),
        maxLength: checkMaxLength(30),
    },
}

function checkZeroLenght(input) {
    input.nextElementSibling.textContent = '';
    if (!input.value.trim().length) {
        input.nextElementSibling.textContent = 'Invalid input!';
    }
}
function checkMinLenght(minLenght) {
    return (input) => {
        if (input.value.trim().length < minLenght && input.nextElementSibling.textContent === '') {
            input.nextElementSibling.textContent = `Min is ${minLenght} chr!`;
        }
    }
}
function checkMaxLength(maxLength) {
    return (input) => {
        if (input.value.trim().length > maxLength && input.nextElementSibling.textContent === '') {
            input.nextElementSibling.textContent = `Max is ${maxLength} chr!`;
        }
    }
}
function checkRegEmail(input) {
    let validateEmail = String(input.value).toLowerCase().match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (validateEmail === null && input.nextElementSibling.textContent === '') {
        input.nextElementSibling.textContent = 'Not valid email!';
    }
}

export default pattern;