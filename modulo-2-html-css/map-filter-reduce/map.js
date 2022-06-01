const apple = {
    value: 2
}

const banana = {
    value: 3
}

function mapComThis(arr, thisArg) {
    return arr.map(function(item) {
        return item * this.value
    }, thisArg)
}

const nums = [1,2]

console.log('this is Apple: ', mapComThis(nums, apple))

console.log('this is banana: ', mapComThis(nums, banana))
