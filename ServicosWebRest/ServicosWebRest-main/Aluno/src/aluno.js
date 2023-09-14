let aluno = {
    matricula: 123,
    nome: 'Ana Maria',
    curso: 'Sistema de Informação',
    cre: 8.5
};

//acessando valores por 'dot notation'
console.log(aluno.nome);

//acessando valores pelo nome da chave
console.log(aluno['nome']);

//adicionando um novo atributo
aluno.bolsista = true;
console.log(aluno);