// Desenvolva um algoritmo que recebe todas as suas contas do mês, faça a soma dos valores e diminua do seu salário. Como saída mostre o salário, o total de gastos e o quanto irá sobrar no final do mês.

let salario = 5000;
let despesas = {
  'Aluguel' : 800,
  'Luz' : 80,
  'Água' : 30,
  'Internet' : 90,
  'Cartão de crédito' : 1000,
  'Mercado' : 1000,
}
const total = Object.values(despesas).reduce((a, b) => a + b);

console.log(`Salário: ${salario}
Despesas: ${total}
Saldo atual: ${ salario - total}`);

