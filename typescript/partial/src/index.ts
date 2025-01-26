interface Users {
    id: string;
    name: string;
    age: number;
    email: string;
    password: string;
}

type UpdateProps = Pick<Users, 'name' | 'age' | 'email' | 'password'>
type UpdatedPropsOptional = Partial<UpdateProps>

function updateDetails (user: Users, updatedprops: UpdatedPropsOptional): Users {
    return { ...user, ...updatedprops}
}

let user: Users = {
    id: "1",
    name: "Parth",
    age:20,
    email: "bhosle6006@gmail.com",
    password: "parthbhosle"
}

const updateProps: UpdatedPropsOptional = {
    age: 21
}  

user = updateDetails(user, updateProps)

console.log(user);