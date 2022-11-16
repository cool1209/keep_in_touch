import server from "../mockBackend/mockServer/mockServer";
import authUserInStorage from "../store/functions/handleSessionStorage";

const getUserKey = () => authUserInStorage.getId();

export const authAPI = {
  getAuth(loginInfo) {
    return server.get('login', loginInfo, getUserKey());
  }
};

export const usersAPI = {
  getUsers(page) {
    return server.get(`users`, { page }, getUserKey());
  }
};

export const profileAPI = {
  getProfile(profileId) {
    return server.get(`profile`, { profileId }, getUserKey());
  },

  getOnlineStatus(profileId) {
    return server.get('online', { profileId }, getUserKey());
  },

  putProfileStatus(status) {
    return server.put('status', { status }, getUserKey());
  },
};

export const postsAPI = {
  getPosts() {
    return server.get('posts', {}, getUserKey());
  },

  getProfilePosts(profileId) {
    return server.get('profile-posts', { profileId }, getUserKey());
  },

  sendNewPost(newPostText) {
    const newPost = {
      text: newPostText
    };

    return server.post('post', newPost, getUserKey());
  }
};

export const dialogsAPI = {
  getDialogs() {
    return server.get(`dialogs`, {}, getUserKey());
  },
  
  postNewMessage(newMessageInfo) {
    return server.post('message', newMessageInfo, getUserKey())
  }
};

export const followingsAPI = {
  getFollowings() {
    return server.get('followings', {}, getUserKey())
  },

  follow(followInfo) {
    return server.post('follow', followInfo, getUserKey());
  },
  
  unfollow(unfollowInfo) {
    return server.delete('unfollow', unfollowInfo, getUserKey());
  }
};
