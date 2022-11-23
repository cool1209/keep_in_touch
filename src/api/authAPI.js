import server from "../mockBackend/mockServer/mockServer";
import authUserInStorage from "../store/functions/handleSessionStorage";

export const getUserKey = () => authUserInStorage.getId();

export const authAPI = {
  authorization(authInfo) {
    return server.post('auth', authInfo, getUserKey());
  }
};
