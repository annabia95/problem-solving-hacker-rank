// EXERCÍCIO 2 - Página 41 do livro Lógica de Programação e Algoritmos com JavaScript de Edécio Iepsen

// Elaborar um programa que leia o valor de um jantar. Calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.
// EXEMPLO: 
// Valor do jantar: R$80,00
// Taxa do garçom: R$8,00
// Total a pagar: R$88,00

let value = 80;
let taxes = value*0.1;
let total = value + taxes;

console.log (`Valor do jantar: R$${value},00`);
console.log (`Taxa do garçom: R$${taxes},00`);
console.log (`Total a pagar: R$${total},00`);