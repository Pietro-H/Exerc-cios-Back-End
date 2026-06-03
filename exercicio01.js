const nota1 = 7.5;
const nota2 = 8.0;
const nota3 = 6.0;

const mediaFinal = (nota1 + nota2 + nota3) / 3;

console.log(`A média final do aluno é: ${mediaFinal.toFixed(1)}`);

if (mediaFinal >= 7.0) {
    console.log("Situação: APROVADO! Parabéns pelo dedicação!");
} else if (mediaFinal >= 5.0 && mediaFinal < 7.0) {
    console.log("Situação: SE LIGA! Você está de recuperação, estude mais!");
} else {
    console.log("Situação: REPROVADO. Não desanime, tente melhor no próximo ano.");
}