




interface User {
    id: number;
    name: string;
    password: string;
}

interface NewUserRequest extends Request {
    json: () => Promise<{
        name: string;
        password: string;
    }>;
}


const users: User[] = [];

export const POST = async (request: NewUserRequest): Promise<Response> => {
    const newUsers = await request.json(); // Await the JSON parsing

    users.push({
        id: users.length + 1,  // Incrementing id based on the existing users' length
        name: newUsers.name,
        password: newUsers.password
    });

    return Response.json({
        message: "user added",
        users
    });
};
export const GET = async (request: NewUserRequest): Promise<Response> => {
    const newUsers = await request.json(); // Await the JSON parsing

    users.push({
        id: users.length + 1,  // Incrementing id based on the existing users' length
        name: newUsers.name,
        password: newUsers.password
    });

    return Response.json({
        message: "user added",
        users
    });
};
