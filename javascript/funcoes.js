const alunos = [
    {
        name: 'eduardo',
        nota: 10,
        turma: '20'
    },
    {
        name: 'eduardo2',
        nota: 7,
        turma: '10'
    },
    {
        name: 'eduardo3',
        nota: 5,
        turma: '40'
    },
]

function alunosAprovados(arr, media){
    let aprovados = []

    for(let i = 0; i < arr.length; i++){
        const { nota, name } = arr[i]

        if(nota >= media){
            aprovados.push(name)
        }
    }

    return aprovados
}

console.log('aprovados', alunosAprovados(alunos, 8))


function calculaIdade(anos){
    return `Daqui a ${anos} nos, ${this.nome} tera ${this.idade + anos} anos de idade`
}

const pessoa1= {
    nome: 'eduardo',
    idade: 20
}

console.log(calculaIdade.call(pessoa1, 10))

