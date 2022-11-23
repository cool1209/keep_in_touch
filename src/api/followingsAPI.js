import server from "../mockBackend/mockServer/mockServer";
import { getUserKey } from "./authAPI";

export const followingsAPI = {
  fetchFollowings() {
    return server.get('followings', getUserKey());
  },

  follow(followInfo) {
    return server.post('follow', followInfo, getUserKey());
  },
  
  unfollow(id) {
    return server.delete(`unfollow/${id}`, getUserKey());
  }
};
