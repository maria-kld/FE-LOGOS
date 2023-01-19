let question1 = prompt("2+2?");
let question2 = prompt("Столиця України?");
let question3 = prompt("2+2*2");
let question4 = prompt("Яка найвища гора у світі?");
let question5 = prompt("Найдрібніша пташка?");
let question6 = prompt("Яким органом дихає риба?");
let question7 = prompt("Хто відкрив Америку (Прізвище)?");
let question8 = prompt("Хто написав п'єсу Гамлет (Прізвище)?");
let question9 = prompt("Коли почалась Друга світова війна?");
let question10 = prompt("Скільки є нотів у музиці?");

let answer1 = 4;
let answer2 = "Київ";
let answer3 = 6;
let answer4 = "Еверест";
let answer5 = "Колібрі";
let answer6 = "Зябра";
let answer7 = "Колумб";
let answer8 = "Шекспір";
let answer9 = 1939;
let answer10 = 8;

result = 0;

if (question1 == answer1) {
    result++;
}

if (question2 == answer2) {
    result++;
}

if (question3 == answer3) {
    result++;
}

if (question4 == answer4) {
    result++;
}

if (question5 == answer5) {
    result++;
}

if (question6 == answer6) {
    result++;
}

if (question7 == answer7) {
    result++;
}

if (question8 == answer8) {
    result++;
}

if (question9 == answer9) {
    result++;
}

if (question10 == answer10) {
    result++;
} 

alert(result);