import users from "../database/users";
import posts from "../database/posts";
import dialogs from "../database/dialogs";
import followings from "../database/followings";

import {
  getAuthUser,
  getUser,
  getUsers,
  removeUserSession
} from "./functions/handleUsers";

import {
  getPosts,
  getUserPosts,
  postNewPost
} from "./functions/handlePosts";

import {
  getDialogs,
  postNewMessage
} from "./functions/handleDialogs";

import { getFollowings } from "./functions/handleFollowings";

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
            const { userId } = payload;
            
            resolve(getPosts(userId, 1, posts, followings, users, 12));
            break;

          case 'user-posts':
            resolve(getUserPosts(payload, posts, users));
            break;

          case 'user-dialogs':
            resolve(getDialogs(payload, dialogs, users));
            break;

          case 'user-followings':
            resolve(getFollowings(payload, followings, users, 1, 10));
            break;

          default:
            reject('404 (not found)');
        }
      }, 534);
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

  removeSession: (action, payload) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        switch(action) {
          case 'remove-session':
            resolve(removeUserSession(payload, users));
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
