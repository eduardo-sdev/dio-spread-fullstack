function substituir_pares(array) {
    if(!array || !array.length) return -1;

    for(let i =0; i < array.length > 0; i++) {
        if(array[i] === 0) {
            console.log('0')
        }else if(array[i]%2===0) {
            console.log(`Sub ${array[i]} por 0...`)
            array[i]=0;
        }
    }
    return array
}

const arr = ['1','2','3','4','10','23','36','47']

console.log(substituir_pares(arr));

