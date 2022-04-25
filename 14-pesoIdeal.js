// Desenvolva um algoritmo para calcular o peso ideal de uma pessoa.
// O peso ideal de um adulto pode ser calculado a partir das fórmulas:
// 22 * altura2 (para homens)
// 21 * altura2 (para mulheres)

let sexo = 'Feminino';
let altura = 1.59;
let pesoIdeal = 0;

sexo === 'Feminino' ? pesoIdeal = 21 * Math.pow(altura, 2) : pesoIdeal = 22 * Math.pow(altura, 2);

console.log(`Sexo: ${sexo}, então seu peso ideal é ${pesoIdeal.toFixed(3)}`);