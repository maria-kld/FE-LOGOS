let a = +prompt('Enter a number');
let b = +prompt('Enter stepin');
let result = 1;

for (let i = 0; i < Math.abs(b); i++) {
    if (b > 0) {
        result *= a;
    } else if (b < 0) {
        result /= a;
    } else {
        result = 1;
    }

}

alert(result);



