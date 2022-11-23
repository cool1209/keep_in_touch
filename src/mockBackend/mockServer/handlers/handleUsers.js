import users from "../../mockData/users";
import { handleDataPage } from "./handleDataPage";
import { checkOnlineStatus, updateOnlineStatus } from "./handleOnlineStatus";

export const getUser = (id) => users.find((user) => user.id === id);

export const getUsers = (userId, page) => {
  updateOnlineStatus(userId);

  const length = 10;

  const handledUsers = users
  .filter(user => user.id !== userId)
  .map(user => ({
    id: user.id,
    name: user.name,
    avatar: user.avatar,
    city: user.city,
    isOnline: checkOnlineStatus(user.id)
  }));

  return {
    data: handleDataPage(handledUsers, +page, length),
    statusCode: 200
  }
};
