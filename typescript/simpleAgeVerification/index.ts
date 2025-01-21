interface User {
    firstName: string;
    lastName: string;
    age: number
}


function isLegal(user: User): boolean {
    if (user.age > 18){
        return true;
    }else return false;
}

function greet (user: User) : void {
    console.log("Hi there " + user.firstName)
}
isLegal({
    firstName: "Parth",
    lastName: "Bhosle",
    age: 20
})