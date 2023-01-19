let userName = prompt("Enter your name (Ім'я)");
let guessName = "Ім'я"
let password;
let guessPassword = "ЛОГОС"

if (userName == guessName) {
    password = prompt("Enter your password");
} 

else if (!userName) {
    alert("Login cancelled");
} else if (userName != guessName) {
    alert("I do not know you");
} 

if (password == guessPassword) {
    alert("You are welcome!");
}  else if (!password) {
    alert("Login cancelled");
}  else if (password != guessPassword) {
    alert("Password is not correct");
}