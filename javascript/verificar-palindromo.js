// 1
function palindromo(stg) {
    if(!stg) return "strig not found"

    const a = stg.split("").reverse().join("")
    console.log(a)

    verificar = a === stg

    return verificar
}

// console.log(palindromo("ana"))

// 2
function palindromo2(stg) {
    if(!stg) return "strig not found"

    for(let i = 0; i < stg.length / 2; i++){
        if(stg[i] !== stg[stg.length -1 -i]) return false;
        return true
    }
}

console.log(palindromo2("ana"))

