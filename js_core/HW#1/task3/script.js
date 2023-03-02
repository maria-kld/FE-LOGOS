

let text = prompt("Enter a sentents", "smth with html");
let count = 0;

let word = text.slice('')


function sum() {
    for( let i = 0; i < arguments.length; i++) {
       if (word.includes('html')) {
            count++;
            console.log(count);
            return word;
        }
        return word;
    }


}

sum('html');




