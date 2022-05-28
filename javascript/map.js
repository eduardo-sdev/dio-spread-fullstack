function getAdmins(map) {
    let admins = []
    for([key, value] of map) {
        if(value === "A"){
            admins.push(key)
        }
    }
    return admins

}

const user = new Map()

user.set('User01', 'A')
user.set('User02', 'U')

// console.log(getAdmins(user))

const myArr = [30, 40, 100]

function valueUnicos(arr){
    const mySet = new Set(arr)

    return [...mySet]
}

console.log(valueUnicos(myArr))

