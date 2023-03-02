let a = +prompt('Enter a first number');
let b = +prompt('Enter a second number')

let fun = () => {
    for(i = 2; i > a && i < b; i++) {
        console.log(i);
    }
}