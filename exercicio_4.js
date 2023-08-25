function cadastrarPessoa(nome, idade, trabalhando, salario) {
    return {
        nome: nome,
        idade: idade,
        trabalhando: trabalhando,
        salario: salario
    };
}

const pessoas = [];

function coletarInformacoes() {
    const nome = prompt("Digite o nome da pessoa:");
    const idade = parseInt(prompt("Digite a idade da pessoa:"));
    const trabalhando = prompt("A pessoa está trabalhando? (S/N)").toLowerCase() === 's';
    
    let salario = 0;
    if (trabalhando) {
        salario = parseFloat(prompt("Digite o salário da pessoa:"));
    }
    
    return cadastrarPessoa(nome, idade, trabalhando, salario);
}

for (let i = 0; i < 5; i++) {
    const pessoa = coletarInformacoes();
    pessoas.push(pessoa);
    
    const continuar = prompt("Deseja continuar cadastrando? (S/N)").toLowerCase();
    if (continuar !== 's') {
        break;
    }
}

console.log("Pessoas desempregadas:");
for (const pessoa of pessoas) {
    if (!pessoa.trabalhando) {
        console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);
    }
}

console.log("\nPessoas empregadas com salários menores que 2500:");
for (const pessoa of pessoas) {
    if (pessoa.trabalhando && pessoa.salario < 2500) {
        console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Salário: ${pessoa.salario}`);
    }
}

console.log("\nPessoas empregadas com salários maiores que 2500:");
for (const pessoa of pessoas) {
    if (pessoa.trabalhando && pessoa.salario >= 2500) {
        console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Salário: ${pessoa.salario}`);
    }
}
