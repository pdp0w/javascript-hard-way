/*

- Closure is most esoteric of javascript concepts
- Enable powerful pro-level function like 'once' and 'memoize'
- Many javascript design pattern including the module patterns use closure
- Build iterators, handle partial application and maintain state in an 
  asynchornous world

*/

function createFunction() {
    function multiplyBy2(num) {
        return num * 2;
    }

    return multiplyBy2;
}

const generateFunction = createFunction();
const result = generateFunction(3);
console.log(result); // 6
