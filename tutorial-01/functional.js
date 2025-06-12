function square(num) { // generalized function
    return num * num;
}

console.log(square(9));

function copyArrayAndMultiplyBy2(array) {
    const output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(array[i] * 2);
    }

    return output;
}

// const myArray = [1, 2, 3];
// const result = copyArrayAndMultiplyBy2(myArray);
// console.log(result);

function copyArrayAndDivideBy2(array) {
    const output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(array[i] / 2);
    }

    return output;
}

const myArray = [1, 2, 3];
const result = copyArrayAndDivideBy2(myArray);

console.log(result);
