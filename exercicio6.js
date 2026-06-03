export const pessoas = [
  { nome: "Ana Silva", idade: 25 },
  { nome: "Lucas Souza", idade: 15 },
  { nome: "Mariana Costa", idade: 18 },
  { nome: "Carlos Oliveira", idade: 17 },
  { nome: "Beatriz Santos", idade: 30 }
];

import { pessoas } from './dados.js';

const maioresDeIdade = pessoas.filter(pessoa => pessoa.idade >= 18);

console.log("--- Pessoas Maiores de 18 Anos ---");
console.log(maioresDeIdade);