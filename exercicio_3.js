const aluno1 = {
    nome: "Aluno 1",
    nota1: 8.5,
    nota2: 9.0
};

const aluno2 = {
    nome: "Aluno 2",
    nota1: 7.0,
    nota2: 6.5
};

aluno1.media = (aluno1.nota1 + aluno1.nota2) / 2;
aluno2.media = (aluno2.nota1 + aluno2.nota2) / 2;

console.log("Informações do Aluno 1:");
console.log("Nome:", aluno1.nome);
console.log("Nota 1:", aluno1.nota1);
console.log("Nota 2:", aluno1.nota2);
console.log("Média:", aluno1.media);

console.log("\nInformações do Aluno 2:");
console.log("Nome:", aluno2.nome);
console.log("Nota 1:", aluno2.nota1);
console.log("Nota 2:", aluno2.nota2);
console.log("Média:", aluno2.media);

const mediaTurma = (aluno1.media + aluno2.media) / 2;
console.log("\nMédia da Turma:", mediaTurma);

