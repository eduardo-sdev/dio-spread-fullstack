function filter(arr) {
    return arr.filter(callback)
}

function callback(item) {
    return item % 2 === 1;
}

const myArr = [1,2,3,4,5,6,7,8,9,10]

console.log(filter(myArr))
