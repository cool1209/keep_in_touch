import server from "../backend/server/server";

export const authAPI = {
  getUsersForAuth(page) {
    return server.getAuthUsers(page);
  },

  openAuth(login) {
    return server.getAuthSessionHandler('open-session', login);
  },

  closeAuth(userId) {
    return server.getAuthSessionHandler('close-session', userId);
  }
};

export const usersAPI = {
  getUsers(page) {
    return server.get(`users`, page);
  }
};

export const profileAPI = {
  getProfile(userId) {
    return server.get(`profile`, userId);
  },

  getProfileStatus(userId) {
    return server.get('profile-status', userId);
  },

  putProfileStatus(payload) {
    return server.put('profile-status', payload);
  }
};

export const postsAPI = {
  getPosts(payload) {
    return server.get('posts', payload);
  },

  getProfilePosts(userId) {
    return server.get('user-posts', userId)
  },

  sendNewPost(newPost) {
    return server.post('new-post', newPost)
  }
};

export const dialogsAPI = {
  getUserDialogs(userId) {
    return server.get(`dialogs`, userId)
  },
  
  postNewMessage(newMessage) {
    return server.post('new-message', newMessage)
  }
};

export const followingsAPI = {
  getFollowings(authUserId) {
    return server.get('followings', authUserId)
  },

  postFollow(payload) {
    return server.post('follow', payload)
  },
  
  deleteFollow(payload) {
    return server.delete('unfollow', payload)
  }
};
