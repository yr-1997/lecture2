let minNumber;
let maxNumber;
let sumNumber = 0;
do{
    minNumber = +prompt('Хей Введи число N');
}
while(!Number.isInteger(minNumber));
do{
    maxNumber = +prompt('Хей Введи число M');
}
while(!Number.isInteger(maxNumber));
 const userChoice = confirm('Пропустити парні числа?');
for (let i = minNumber; i <= maxNumber; i++){
if(userChoice && i%2 === 1){
    continue;
}{
    sumNumber += i;
}}

console.log(
    `твоє перше число: ${minNumber}
     твоє другуче число: ${maxNumber}
     загальна сума: ${sumNumber}`
);