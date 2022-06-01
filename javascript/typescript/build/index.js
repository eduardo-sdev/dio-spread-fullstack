"use strict";
const foo = 'foo';
const sum = (a, b) => {
    return a + b;
};
sum(1, 1);
const coffee = {
    name: 'expreso',
    tipo: 'arabica',
    nivel: 'forte',
    colocar_azulca: (colocar) => colocar
};
const xicara = {
    tamanho: 'media',
    cor: 'preta',
    name: 'expreso',
    tipo: 'arabica',
    nivel: 'forte',
    colocar_azulca: (colocar) => colocar
};
xicara.colocar_azulca('not');
const bike = {
    aro: 29,
    motor: 'turbo',
    cor: 'red',
    estilo: 'mtbb',
};
// input HTML
const input = document.querySelector('#input');
input.addEventListener('input', event => {
    const e = event.currentTarget;
    console.log(e.value);
});
// generic tips
function addValueArr(arr, value) {
    return arr.map(() => value);
}
addValueArr(['1'], 't');
function redirecione(user) {
    if (user.cargo) {
        const u = {
            id: '1',
            email: 'email@gmail.com',
            cargo: 'supervisor'
        };
        return u;
    }
}
const myDog = {
    name: 'nike',
    cor: 'preto',
    raca: 'lira lata'
};
class MyDogg {
    constructor(name, cor) {
        this.name = name;
        this.cor = cor;
    }
}
const dog = new MyDogg('nike', 'preto');
console.log(dog);
