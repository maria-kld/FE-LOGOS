
let number = parseInt(prompt('Enter a number'));

function checkNumber() {
    for(let i = 2; i < number; i++){
        if (number % i === 0) {
          return  alert("it is not a prime number")
        } else {
          return  alert("it is a prime number")
        }
    }

}

checkNumber();