import server from "../mockBackend/mockServer/mockServer";
import { getUserKey } from "./authAPI";

export const postsAPI = {
  fetchPosts() {
    return server.get('posts', getUserKey());
  },

  fetchProfilePosts(id) {
    return server.get(`profilePosts/${id}`, getUserKey());
  },

  sendNewPost(newPostText) {
    const newPost = {
      text: newPostText
    };

    return server.post('post', newPost, getUserKey());
  }
};
