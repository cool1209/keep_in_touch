import users from "../../mockData/users";
import { handleDataPage } from "./handleDataPage";
import { checkOnlineStatus, updateOnlineStatus } from "./handleOnlineStatus";

export const getUser = (id) => users.find((user) => user.id === id);

export const getUsers = (body, userId) => {
  updateOnlineStatus(userId);

  const { page, length = 10 } = body;
  const handledUsers = users.map(user => ({
    id: user.id,
    name: user.name,
    avatar: user.avatar,
    city: user.city,
    isOnline: checkOnlineStatus(user.id)
  }));

  return {
    data: handleDataPage(handledUsers, page, length),
    status: 200
  }
};
