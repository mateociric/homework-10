function getAllInput(el) {
    if (el.children.length === 0) {
        return [el];
    }
    let inputArr = [];
    for (let i = 0; i < el.children.length; i++) {
        let children = getAllInput(el.children[i]);
        if (children) {
            inputArr.push(...children)
        };
    }
    inputArr.push(el);

    return inputArr.filter( (el) => {
        return el.tagName === 'INPUT' || el.tagName === 'TEXTAREA'
    });
};

export default getAllInput;