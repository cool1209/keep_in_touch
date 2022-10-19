import users from "../database/users";
import posts from "../database/posts";
import dialogs from "../database/dialogs";
import { getRequest } from "./serverFunctions/general";

import {
  getLogInUser,
  getUsers,
  setLogoutUser
} from "./serverFunctions/users";

import {
  getPosts,
  getUserPosts,
  postNewPost
} from "./serverFunctions/posts";

import {
  getDialogs,
  postNewMessage
} from "./serverFunctions/dialogs";

const server = {
  get: (header) => {
    const [ action, parameter1 ] = getRequest(header);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        switch(action) {
          case 'login':
            resolve(getLogInUser(parameter1, users));
            break;
          case 'users':
            resolve(getUsers(users, parameter1));
            break;
    
          case 'posts':
            resolve(getPosts(posts, users));
            break;

          case 'user-posts':
            resolve(getUserPosts(posts, users, parameter1));
            break;

          case 'dialogs':
            resolve(getDialogs(parameter1, dialogs, users));
            break;

          default:
            reject('404 (not found)');
        }
      }, 332)
    })
  },

  post: (header, body) => {
    const [ action ] = getRequest(header);
        
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        switch(action) {
          case 'post':
            resolve(postNewPost(body, posts));
            break;

          case 'message':
            resolve(postNewMessage(body, dialogs));
            break;

          default:
            reject('404 (not found)');
        }
      }, 100)
    })
  },

  put: (header) => {
    const [ action, parameter1 ] = getRequest(header);
    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        switch(action) {
          case 'logout':
            resolve(setLogoutUser(parameter1, users));
            break;

          default:
            reject('404 (not found)');
        }
      }, 30000)
    })
  },

  getLoginUsers: (page) => {
    const usersForLoginTest = users.slice(0, 15);
    const start = (page - 1) * 3;

    return usersForLoginTest.slice(start, page * 3);
  }
};

export default server;