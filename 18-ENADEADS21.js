let altura = [];
function criaPessoa (num) {
  for(let index = 0; index < num; index += 1){
    altura.push(Math.random() * (2.5 - 1.3) + 1.3).toFixed(2);
  }
};
criaPessoa(10);
let maiorAltura = Math.max(...altura);
let menorAltura = Math.min(...altura);
let somaAltura = 0;
let mediaAltura = 0;
let menorQueMedia = 0;
for (let index = 0; index < altura.length; index += 1){
  somaAltura += altura[index];
}
mediaAltura = somaAltura/altura.length;
  for (let index = 0; index < altura.length; index += 1){
  if(altura[index] < mediaAltura) {
    menorQueMedia += 1;
  }
}
console.log(maiorAltura.toFixed(2));
console.log(menorAltura.toFixed(2));
console.log(mediaAltura.toFixed(2));
console.log(menorQueMedia);