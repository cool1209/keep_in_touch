export const getAuthUsers = (page,  users) => {
    const usersForLoginTest = users.slice(0, 15);
    const start = (page - 1) * 3;

    return usersForLoginTest.slice(start, page * 3);
};

export const openAuthUserSession = (login,  users) => {
    const user = users.find(user => user.login === login);
    user.status = 'Online';

    return user;
};

export const closeAuthUserSession = (id, users) => {
    const user = users.find(user => user.id === +id);
    
    user.status = 'Offline';  
};
