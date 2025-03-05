const baseUrl = 'http://localhost:3030/jsonstore/users'


export const getAll = async () => {
    const response = await fetch(baseUrl);
    const result  = await response.json();
    const users = Object.values(result);

    return users;
};

export const create = async (userData) => {
    const response  = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'aplication/json'
        },
        body: JSON.stringify(userData)
    });

    const result = await response.json();
    return result;
}
const userService = {
    getAll,
    create
}

export default userService;