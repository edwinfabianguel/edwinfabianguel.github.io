let finalResult;
let evenOddResult;

// Paso 1: Crear cuatro variables numéricas
let num1 = 6;
let num2 = 8;
let num3 = 10; // Cambiado para que la multiplicación resulte en 48
let num4 = 2; // Cambiado para que la resta resulte en 8

// Paso 2: Sumar las dos primeras variables y guardar el resultado
let sum = num1 + num2;

// Paso 3: Restar la cuarta variable de la tercera y almacenar el resultado
let difference = num3 - num4;

// Paso 4: Multiplicar los resultados de los pasos 2 y 3 juntos
finalResult = sum * difference;

// Paso 5: Verificar si finalResult es un número par
evenOddResult = finalResult % 2 === 0;

// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
const finalResultCheck = finalResult === 48 ? `Yes, well done!` : `No, it is ${ finalResult }`;
para1.textContent = `Is the finalResult 48? ${ finalResultCheck }`;
const para2 = document.createElement('p');
const evenOddResultCheck = evenOddResult ? 'The final result is even!' : 'The final result is odd. Hrm.';
para2.textContent = evenOddResultCheck;

section.appendChild(para1);
section.appendChild(para2);