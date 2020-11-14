let minNumber;
let maxNumber;
let boleanChoice;
let sumNumber = 0;
do{
    minNumber = +prompt('Хей Введи число N');
}
while(Number.isInteger(minNumber) === false);
if(minNumber != null && minNumber != "" && minNumber != false){
    
}else {
   console.log('шось пішло не так ');
   minNumber--;

}
do{
    maxNumber = +prompt('Хей Введи число M');
}
while(Number.isInteger(maxNumber) === false);
if(maxNumber != null && maxNumber != "" && minNumber != false){
    
}else {
    console.log('шось пішло не так ');
    minNumber--;

}

boleanChoice = confirm('Пропустити парні числа?');
for (let i = minNumber; i <= maxNumber; i++){
if(boleanChoice && i%2 === 1){
    sumNumber += i;
}
else if(!boleanChoice){
    sumNumber += i;
}}

console.log(
    `твоє перше число: ${minNumber}
     твоє другуче число: ${maxNumber}
     загальна сума: ${sumNumber}`
);