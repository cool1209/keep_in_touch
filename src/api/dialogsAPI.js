import server from "../mockBackend/mockServer/mockServer";
import { getUserKey } from "./authAPI";

export const dialogsAPI = {
  fetchDialogs() {
    return server.get(`dialogs`, getUserKey());
  },
  
  sendNewMessage(newMessageInfo) {
    return server.post('message', newMessageInfo, getUserKey())
  }
};
