
let a = prompt('Enter a password  (LOGOS)');
let b = 'LOGOS'
let numberOfTries = 5;


do {
    if (a != b) {
        if (numberOfTries == 1) {
            alert("Try later");
            numberOfTries = 0;
        } else {
            a = prompt(`You have only ${numberOfTries - 1} attempts left`);
            numberOfTries--;
        }
    } else if (a == b) {
        alert('accept');
        numberOfTries = 0;
    }
} while (numberOfTries > 0)

