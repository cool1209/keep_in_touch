import server from "../mockBackend/mockServer/mockServer";
import { getUserKey } from "./authAPI";

export const profileAPI = {
  fetchProfile(id) {
    return server.get(`profile/${id}`, getUserKey());
  },

  fetchOnlineStatus(id) {
    return server.get(`online/${id}`, getUserKey());
  },

  putProfileStatus(status) {
    return server.put('status', { status }, getUserKey());
  },
};
