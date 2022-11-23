import server from "../mockBackend/mockServer/mockServer";
import { getUserKey } from "./authAPI";

export const usersAPI = {
  fetchUsers(page) {
    return server.get(`users/${page}`, getUserKey());
  }
};
