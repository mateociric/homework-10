function contactGuard(userObj, locat) {
    if (localStorage.getItem('user')) {
        const trueArr = Object.keys(userObj);
        const checkingArr = Object.entries(JSON.parse(localStorage.getItem('user')));
        let numOfErrors = 0;
        if (checkingArr.length === 5) {
            checkingArr.forEach((el, index) => {
                if (el[0] !== trueArr[index]) {
                    numOfErrors++
                }
                if (!el[1]) {
                    numOfErrors++
                }
            });
            if (!numOfErrors) {
                window.location.assign(`${locat}/overview/overview.html`);
            }
        }
    }
}

export default contactGuard;