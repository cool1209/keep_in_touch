import { getDataPage } from "./general";

export const getLogInUser = (login,  users) => {
  const user = users.find(user => user.login === login);
  user.status = 'Online';
  return user;
};

export const setLogoutUser = (id, users) => {
  const user = users.find(user => user.id === +id);
  user.status = 'Offline';
};

export const getUsers = (users, page, length = 10) => {
  return getDataPage(users, page, length);
};
