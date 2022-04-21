function returnFoo(array) {
    let inpnumbers = []
    let parnumbers = []

    for (let index in array){
        if(array[index] % 2 === 0) {
            parnumbers.push(array[index])
        }
        if(array[index] % 2 === 1) {
            inpnumbers.push(array[index])
        }
    }

    console.log('inpar', inpnumbers)
    console.log('par', parnumbers)
}

let array =[1,2,3,4,5,6] 

returnFoo(array)
