interface User {
    id: string;
    name: string;
    age: number;
    email: string;
    password: string;
}

type UpdateProps = Pick<User, 'name' | 'age' | 'email'>

function updateUser(updateProps: UpdateProps){
    // Backend logic to update
}