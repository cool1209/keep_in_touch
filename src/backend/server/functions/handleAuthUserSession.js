import users from "../../data/users";

export const getAuthUsers = (page) => {
  const usersForLoginTest = users.slice(0, 15);
  const start = (page - 1) * 3;

  return usersForLoginTest.slice(start, page * 3);
};

export const openAuthUserSession = (login) => {
  const user = users.find((user) => user.login === login);
  if (user) {
    user.online = true;
    return {
      status: 200,
      data: user
    };
  }

  return {status: 404}
};

export const closeAuthUserSession = (id) => {
  const user = users.find((user) => user.id === +id);
  user.online = false;

  return {status: 200}
};
