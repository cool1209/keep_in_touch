import users from "../database/users";
import posts from "../database/posts";
import dialogs from "../database/dialogs";

import {
  getAuthUser,
  getUser,
  getUsers,
  setLogoutUser
} from "./functions/users";

import {
  getPosts,
  getUserPosts,
  postNewPost
} from "./functions/posts";

import {
  getDialogs,
  postNewMessage
} from "./functions/dialogs";

const server = {
  get: (action, payload) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        switch(action) {
          case 'auth':
            resolve(getAuthUser(payload, users));
            break;

          case 'user':
            resolve(getUser(payload, users));
            break;

          case 'all-users':
            resolve(getUsers(payload, users));
            break;
    
          case 'all-posts':
            resolve(getPosts(1, posts, users));
            break;

          case 'user-posts':
            resolve(getUserPosts(payload, posts, users));
            break;

          case 'user-dialogs':
            resolve(getDialogs(payload, dialogs, users));
            break;

          default:
            reject('404 (not found)');
        }
      }, 778);
    })
  },

  post: (action, payload) => {  
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        switch(action) {
          case 'new-post':
            resolve(postNewPost(payload, posts));
            break;

          case 'new-message':
            resolve(postNewMessage(payload, dialogs));
            break;

          default:
            reject('404 (not found)');
        }
      }, 554);
    })
  },

  put: (action, payload) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        switch(action) {
          case 'logout':
            resolve(setLogoutUser(payload, users));
            break;

          default:
            reject('404 (not found)');
        }
      }, 30000);
    })
  },

  getLoginUsers: (page) => {
    const usersForLoginTest = users.slice(0, 15);
    const start = (page - 1) * 3;

    return usersForLoginTest.slice(start, page * 3);
  }
};

export default server;
