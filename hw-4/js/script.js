// 1 завдання

for(let num = 20 ; num <= 30; num += 0.5) {
     console.log(num);
}

// 2 завдання

for(let sum = 10 ; sum <= 100;sum += 10) {
     console.log(`${sum} доларів = ${sum*27}`);
}

// 3 завдання


let n= 25 ;
for(let num1 = 1 ; num1 <= 100; num1++) {
     if(num1**2<= n) {
          console.log(num1);
     }
}

// 4 завдання

const number = 7;
let result = true;

if (number === 1) {
    console.log("Число 1 - не є ні простим, ні складовим числом, тому що у нього лише один дільник - 1.");
}
else if (number > 1) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
          result = false;
            break;
        }
    }
    if (result) {
        console.log(`${number}  просте число`);
    } else {
        console.log(`${number} НЕ  є простим числом`);
    }
}

// 5 завдання


let o = 81 ;
let result2 = false;
for(let degree = 1 ; degree <= 100; degree++) {
     if( o == 3**degree ){
        result2 = true;
     }
}
if (result2) {
    console.log( `число ${o} можна одержати  шляхом зведення числа 3 у деякий ступінь `);
} else {
    console.log( `число ${o} НЕ можна одержати  шляхом зведення числа 3 у деякий ступінь `);
}

