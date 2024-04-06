
// Cálculo actualizado para dar el resultado deseado
let result = (7 + 13) / (9 + 7); // Actualizado para agrupar la suma y la división
let result2 = 100 / (2 * 6); // Actualizado para agrupar la multiplicación

// Calcula el resultado final multiplicando los dos resultados
result *= result2;

// Formatea el resultado con 2 decimales
let finalResult = result.toFixed(2);

// Verifica el tipo de dato de finalResult
let finalNumber = Number(finalResult);

// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
para1.textContent = `Your finalResult is ${finalResult}`;
const para2 = document.createElement('p');
const finalNumberCheck = isNaN(finalNumber) === false ? 'finalNumber is a number type. Well done!' : `Ooops! finalNumber is not a number.`;
para2.textContent = finalNumberCheck;

section.appendChild(para1);
section.appendChild(para2);