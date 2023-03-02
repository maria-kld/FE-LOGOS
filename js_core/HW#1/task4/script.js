// 4 task

let url = prompt("Enter a url address", "https://www.google.com");

function checkDomain() {
    if (url.startsWith("http://")) {
        console.log(url.replace("http://", ""));
    } else if (url.startsWith("https://")) {
        console.log(url.replace("https://", ""));
    } else {
        console.log("It is a wrong address");
    }


}

checkDomain();