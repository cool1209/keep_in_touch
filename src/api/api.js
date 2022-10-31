import server from "../backend/server/simpleServerSimulator";

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
  },

  getCurrentUser(userId) {
    return server.get(`user`, userId)
  }
};

export const postsAPI = {
  getPosts(payload) {
    return server.get('posts', payload);
  },

  getUserPosts(userId) {
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
