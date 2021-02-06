function sum() {
    let sum = 0;
    for (let args of arguments) {
        sum += args;
    }
    return sum;
}

function product() {
    let product = 0;
    for (let args of arguments) {
        product *= args;
    }
    return product;
}