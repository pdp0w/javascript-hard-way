function copyArrayAndMultiplyBy2(array) {
    const output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(array[i] * 2);
    }

    return output;
}

function copyArrayAndDivideBy2(array) {
    const output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(array[i] / 2);
    }

    return output;
}

// do the same thing but this time add 3 to array elements

function copyArrayAndManipulate(array, instruction) {
    const output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(instruction(array[i]));
    }
    return output;
}

function multiplyBy2(input) {
    return input * 2;
}

function add3(input) {
    return input + 3;
}

const myArray = [1, 2, 3];
const result = copyArrayAndManipulate(myArray, add3);

console.log(result);
