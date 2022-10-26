import { getDataPage, getUser } from "./general";

export const getAuthUser = (login,  users) => {
  const user = users.find(user => user.login === login);
  user.status = 'Online';
  return user;
};

export const getCurrentUser = (id, users) => getUser(id, users);

export const getUsers = (page, users, length = 10) => {
  return getDataPage(users, page, length);
};

export const removeUserSession = (id, users) => {
  const user = users.find(user => user.id === +id);
  user.status = 'Offline';
};
