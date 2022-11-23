import users from "../../mockData/users";

const getUserByLogin = (login) => {
  return users.find(user => user.login === login);
}

export const handleAuth = (body) => {
  const { login, password } = body;
  const user = getUserByLogin(login);

  if (user) {
    if (user.password === password) {
      const authUser = {
        id: user.id,
        name: user.name,
        avatar: user.avatar,
      };

      return {
        statusCode: 200,
        data: authUser,
      };
    }

    return { statusCode: 403, text: "Forbidden" };
  }

  return { statusCode: 403, text: "Forbidden" };
};
