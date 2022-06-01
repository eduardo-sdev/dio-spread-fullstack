function sumNumbers(arr) {
    return arr.reduce(function(prev, current) {
        console.log({prev})
        console.log({current})
        return prev + current
    })
}

const arr = [1,2]

console.log(sumNumbers(arr))

const list = [
    {
        name: 'item 1',
        value: 23
    },
    {
        name: 'item 2',
        value: 30
    },
]

const primaryValue = 100

function viewValue(primaryValue, list) {
    return list.reduce(function (prev, current, index) {
        console.log('nivel ', index)
        console.log({prev})
        console.log({current})
        return prev - current.value
    }, primaryValue)
}

console.log(viewValue(primaryValue, list))
