function validaArray(arr, num) {
    try {
        if(!arr && !num) throw new ReferenceError("Envies os paremetros")

        if(typeof arr !== 'object') throw new TypeError("Arrays precisa ser object")

        if(typeof num !== 'number') throw new TypeError("Num precisa ser number")

        if(arr.length !== num) throw new RangeError("tamanho invalido")

        return arr
    }catch(e) {
        if(e instanceof ReferenceError) {
            console.log("referenceErro")
            console.log(e.message)
            console.log(e.name)
            console.log(e.stack)
        }else if(e instanceof TypeError) {
            console.log("TypeError")
            console.log(e.message)
            console.log(e.name)
            console.log(e.stack)

        }else if(e instanceof RangeError) {
            console.log("RangeError")
            console.log(e.message)
            console.log(e.name)
            console.log(e.stack)

        } else {
            console.log("Error not found" + e)
        }
    }
}

console.log(validaArray([1,2], 2))

