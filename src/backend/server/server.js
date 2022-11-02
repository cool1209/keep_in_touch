import {
  getAuthUsers,
  openAuthUserSession,
  closeAuthUserSession
} from "./functions/handleAuthUserSession";

import {
  getPosts,
  getProfilePosts,
  postNewPost
} from "./functions/handlePosts";

import {
  getFollowings,
  postFollowing,
  deleteFollowing
} from "./functions/handleFollowings";

import {
  getProfile,
  getProfileStatus,
  putProfileStatus
} from "./functions/handleProfile";

import {
  getDialogs,
  postNewMessage
} from "./functions/handleDialogs";

import { getUsers } from "./functions/handleUsers";


const server = {
  get: (action, payload) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        switch(action) {
          case 'profile':
            resolve(getProfile(payload));
            break;

          case 'users':
            resolve(getUsers(payload));
            break;
    
          case 'posts':
            const { userId } = payload;

            resolve(getPosts(userId));
            break;

          case 'profile-status':
            resolve(getProfileStatus(payload));
            break;

          case 'user-posts':
            resolve(getProfilePosts(payload));
            break;

          case 'dialogs':
            resolve(getDialogs(payload));
            break;

          case 'followings':
            resolve(getFollowings(payload));
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
            resolve(postNewPost(payload));
            break;

          case 'new-message':
            resolve(postNewMessage(payload));
            break;

          case 'follow':
            const {userId, newFollowing} = payload;
            resolve(postFollowing(userId, newFollowing));
            break;

          default:
            reject('404 (not found)');
        }
      }, 332);
    })
  },

  put: (action, payload) => {  
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        switch(action) {
          case 'profile-status':
            const { userId, status } = payload;

            resolve(putProfileStatus(userId, status));
            break;

          default:
            reject('404 (not found)');
        }
      }, 378);
    })
  },

  delete: (action, payload) => {  
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        switch(action) {
          case 'unfollow':
            const {userId, unfollow} = payload;

            resolve(deleteFollowing(userId, unfollow));
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
            resolve(openAuthUserSession(payload));
            break;

          case 'close-session':
            resolve(closeAuthUserSession(payload));
            break;

          default:
            reject('404 (not found)');
        }
      }, 554);
    })
  },

  getAuthUsers(payload) {
    return getAuthUsers(payload);
  }
};

export default server;
