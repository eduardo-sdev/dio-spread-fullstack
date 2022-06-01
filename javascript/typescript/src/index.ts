
 const foo: string = 'foo'

 const sum = (a:number,b:number) => {
     return a+b
 }

 sum(1,1)

// usando interface

interface Icoffee {
    name: string
    tipo: string
    nivel: 'leve' | 'tradicional' | 'forte'

    colocar_azulca(colocar: string):void
}

interface Ixicara extends Icoffee {
    tamanho: 'pequena' | 'media' | 'grande',
    cor: 'branca' | 'preta' | 'azul'
}

const coffee: Icoffee = {
    name: 'expreso',
    tipo: 'arabica',
    nivel: 'forte',

    colocar_azulca: (colocar) => colocar
}

const xicara: Ixicara = {
    tamanho: 'media',
    cor: 'preta',

    name: 'expreso',
    tipo: 'arabica',
    nivel: 'forte',
    colocar_azulca: (colocar) => colocar
}

xicara.colocar_azulca('not')

// types

interface ibike {
    estilo: string
    aro: number
    cor: string
    freio: string
}

interface ibikemotor {
    estilo: string
    aro: number
    cor: string
    motor: string
}

type bike = ibike | ibikemotor

const bike:bike = {
    aro: 29,
    motor: 'turbo',
    cor: 'red',
    estilo: 'mtbb',

}

// input HTML

const input = document.querySelector('#input') as HTMLInputElement

input.addEventListener('input', event => {
    const e = event.currentTarget as HTMLInputElement

    console.log(e.value)
})

// generic tips

function addValueArr<T>(arr: T[], value: T) {
    return arr.map(() => value)
}

addValueArr(['1'], 't')

// parametros

interface IUser {
    id: string
    email: string
    cargo?: 'funcionario' | 'gerente' | 'coordenador' | 'supervisor'
}

function redirecione(user: IUser){
    if(user.cargo){
        const u = {
            id: '1',
            email: 'email@gmail.com',
            cargo: 'supervisor'
        }
        return u
    }
}

// readonly e private class

interface Dog {
    name: string
    cor: string
    raca?: string
}

type DogRead = {
    readonly [K in keyof Dog]: Dog[K]
}

const myDog: Dog = {
    name: 'nike',
    cor: 'preto',
    raca: 'lira lata'
}

class MyDogg implements DogRead {
    name
    cor

    constructor(name, cor) {
        this.name = name
        this.cor = cor
    }
}

const dog = new MyDogg('nike', 'preto')


console.log(dog);


