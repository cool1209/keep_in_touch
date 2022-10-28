import { getDataPage } from "./general";

export const getUsers = (page, users, length = 10) => ({
  data: getDataPage(users, page, length),
  status: 200
});
