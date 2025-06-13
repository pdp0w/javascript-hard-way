function outer() {
    let counter = 0;

    function incrementOuter() {
        counter++;
    }

    incrementOuter();
    console.log(counter);
}

outer();
