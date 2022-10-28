import server from "../backend/server/simpleServerSimulator";

export const getUsersForAuth = (page) => {
  return server.getAuthUsers(page);
};

export const openAuth = (login) => {
  return server.getAuthSessionHandler('open-session', login);
};

export const closeAuth = (userId) => {
  return server.getAuthSessionHandler('close-session', userId);
};

export const getFollowings = (authUserId) => {
  return server.get('followings', authUserId)
  .then(response => response.data);
};

export const getUser = (userId) => {
  return server.get(`user`, userId)
  .then(response => response.data);
};

export const getUsers = (page) => {
  return server.get(`users`, page)
  .then(response => response.data);
};

export const getUserPosts = (userId) => {
  return server.get('user-posts', userId)
  .then(response => response.data);
};

export const getPosts = (payload) => {
  return server.get('posts', payload)
  .then(response => response.data);
};

export const getUserDialogs = (authUserId) => {
  return server.get(`dialogs`, authUserId)
  .then(response => response.data);
};

export const postNewMessage = (newMessage) => {
  return server.post('new-message', newMessage)
  .then(response => +response.status)
};

export const postFollow = (payload) => {
  return server.post('follow', payload)
  .then(response => response.status);
};

export const deleteFollow = (payload) => {
  return server.delete('unfollow', payload)
  .then(response => response.status);
};

export const postNewPost = (newPost) => {
  return server.post('new-post', newPost)
  .then(response => +response.status);
};
