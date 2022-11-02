import users from "../../data/users";
import { getDataPage } from "./general";

export const getUsers = (page, length = 10) => ({
  data: getDataPage(users, page, length),
  status: 200
});
