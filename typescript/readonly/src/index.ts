interface User {
    name: string;
    age: number;
}

const user : Readonly <User> = {
    name: "Parth",
    age: 20
}

const user1 : User = {
    name: "Parth2",
    age: 21
}

user1.age = 20;
console.log(user1)