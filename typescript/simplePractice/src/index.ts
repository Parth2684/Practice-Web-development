interface User {
    name: string;
    age: number;
}

function addAges (user1: User, user2: User): number {
    return user1.age + user2.age; 
}

const result = addAges({
    name: "Parth",
    age: 21
},{
    name: "Bhosle",
    age: 50
})

console.log(result)