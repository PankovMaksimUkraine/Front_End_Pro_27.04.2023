const command = prompt('Какое действие ты хочешь выполнить?');
const num1 = +prompt('Какое первое число?');
const num2 = +prompt('Какое второе число?');
if(command === "add"){
    alert(` ${num1} + ${num2} = ${num1+num2}`)     
}
if(command === "sub"){
    alert(` ${num1} - ${num2} = ${num1-num2}`)        
}
if(command === "mult"){
    alert(` ${num1} * ${num2} = ${num1*num2}`)        
}
if(command === "div"){
    alert(` ${num1} / ${num2} = ${num1/num2}`)     
}


// const command = prompt('Какое действие ты хочешь выполнить?');
// const num1 = +prompt('Какое первое число?');
// const num2 = +prompt('Какое второе число?');
// if(command === "add"){
//     alert( `Получается ${num1 + num2} все верно?`)     
// }
// if(command === "sub"){
//     alert( `Получается ${num1 - num2} все верно?`)     
// }
// if(command === "mult"){
//     alert( `Получается ${num1 * num2} все верно?`)     
// }
// if(command === "div"){
//    alert( `Получается ${num1 / num2} все верно?`)    
// }

