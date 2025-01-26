type Users = Record<string, {age: number, name: string}>;

let user: Users = {
    "123": {
        age: 20,
        name: "Parth"
    },
    "456": {
        age: 21,
        name: "Parth2025"
    }
}  

type Friend = Map<string, {age: number, name: string}>

const friends: Friend = new Map()
friends.set("789", {
    age: 19,
    name: "Parth2023"
})

console.log(user)
console.log(friends)