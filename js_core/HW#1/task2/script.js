

let email = prompt('Enter an email');

function checkMail() {
    for(let i = 0; i < arguments.length; i++) {

         if (email.startsWith('@') || email.endsWith('@')) {
            console.log("Incorrect");
        }  else if (!email.includes('@')) {
           console.log("Incorrect");
        } else if (email.includes('@')) {
            console.log("Correct");
    }
}
}

checkMail("@");

