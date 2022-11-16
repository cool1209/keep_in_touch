import users from "../../mockData/users";

const getUserByLogin = (login) => {
  return users.find(user => user.login === login);
}

export const getAuth = (body, userId) => {
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
        status: 200,
        data: authUser,
      };
    }

    return { status: 403, text: "Invalid user password" };
  }

  return { status: 401, text: "Invalid user login" };
};
