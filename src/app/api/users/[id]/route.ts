interface User {
    id: number;
    name: string;
    password: string;
}

interface NewUserRequest extends Request {
    id: string,
    json: () => Promise<{
        name: string;
        password: string;
    }>;
}


const users: User[] = [
    {
        "id": 1,
        "name": "tahsin",
        "password": "newUserspassword"
    },
    {
        "id": 2,
        "name": "tahsin",
        "password": "newUserspassword"
    },
    {
        "id": 3,
        "name": "tahsin",
        "password": "newUserspassword"
    },
    {
        "id": 4,
        "name": "tahsin",
        "password": "newUserspassword"
    },
    {
        "id": 5,
        "name": "tahsin",
        "password": "newUserspassword"
    }
];


export const GET = async () => {
    return Response.json(users, {
        headers :{
            "Set-Cookie" : "theme = dark"
        }
    })
}

export const PATCH = async (request: NewUserRequest, { params }: { params: { id: string } }): Promise<Response> => {
    const id = params.id
    const indexUser = users.findIndex((c) => c.id === parseInt(id))
    users[indexUser] = {
        id: users[indexUser].id,
        name: users[indexUser].name,
        password: "changed pass"
    }
    return Response.json({
        message: "user added",
        users
    });
};
export const DELETE = async (request: NewUserRequest, { params }: { params: { id: string } }): Promise<Response> => {
    const id = params.id
    const indexUser = users.findIndex((c) => c.id === parseInt(id))
    users[indexUser] = {
        id: users[indexUser].id,
        name: users[indexUser].name,
        password: "changed pass"
    }
    return Response.json({
        message: "user added",
        users
    });
};
