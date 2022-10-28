import users from "../database/users";
import posts from "../database/posts";
import dialogs from "../database/dialogs";
import followings from "../database/followings";

import {
  closeAuthUserSession,
  getAuthUsers,
  openAuthUserSession
} from "./functions/handleAuthUserSession";

import { getCurrentUser } from "./functions/handleCurrentUser";
import { getUsers } from "./functions/handleUsers";
import { postNewPost } from "./functions/handleNewPost";
import { getPosts } from "./functions/handlePosts";
import { getUserPosts } from "./functions/handleUserPosts";
import { getFollowings } from "./functions/handleFollowings";
import { postFollowing } from "./functions/handlePostFollowing";
import { deleteFollowing } from "./functions/handleDeleteFollowing";
import { postNewMessage } from "./functions/handleNewMessage";
import { getDialogs } from "./functions/handleDialogs";

const server = {
  get: (action, payload) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        switch(action) {
          case 'user':
            resolve(getCurrentUser(payload, users));
            break;

          case 'users':
            resolve(getUsers(payload, users));
            break;
    
          case 'posts':
            const { userId } = payload;

            resolve(getPosts(userId, 1, posts, followings, users, 12));
            break;

          case 'user-posts':
            resolve(getUserPosts(payload, posts, users));
            break;

          case 'dialogs':
            resolve(getDialogs(payload, dialogs, users));
            break;

          case 'followings':
            resolve(getFollowings(payload, followings, users, 1, 10));
            break;

          default:
            reject('404 (not found)');
        }
      }, 558);
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

          case 'follow':
            const {userId, newFollowing} = payload;
            resolve(postFollowing(userId, newFollowing, followings));
            break;

          default:
            reject('404 (not found)');
        }
      }, 332);
    })
  },

  delete: (action, payload) => {  
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        switch(action) {
          case 'unfollow':
            const {userId, unfollow} = payload;

            resolve(deleteFollowing(userId, unfollow, followings));
            break;

          default:
            reject('404 (not found)');
        }
      }, 332);
    })
  },

  getAuthSessionHandler: (action, payload) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        switch(action) {
          case 'open-session':
            resolve(openAuthUserSession(payload, users));
            break;

          case 'close-session':
            resolve(closeAuthUserSession(payload, users));
            break;

          default:
            reject('404 (not found)');
        }
      }, 554);
    })
  },

  getAuthUsers(payload) {
    return getAuthUsers(payload, users);
  }
};

export default server;
