
let a = +prompt('Enter a number');
let b = +prompt('Enter stepin');
let result = 1;
let i = 0;

do {
     if ( b > 0) {
        result *= a;
     } else if (b < 0) {
        result /= a;
     } else {
        result;
     }
     i++;
} while (i < Math.abs(b))
alert(result);

