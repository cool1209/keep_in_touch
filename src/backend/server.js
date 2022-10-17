import users from "./data/users";
import posts from "./data/posts";
import dialogs from "./data/dialogs";
import {
  getDialogs,
  getRequest,
  getLogInUser,
  getParsedPosts,
  getUserPosts,
  getUsers,
  postNewMessage,
  postNewPost,
  setLogoutUser
} from "./serverFunctions";

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
            resolve(getUsers(parameter1, users));
            break;
    
          case 'posts':
            resolve(getParsedPosts(posts, users));
            break;

          case 'user-posts':
            resolve(getUserPosts(parameter1, posts, users));
            break;

          case 'dialogs':
            resolve(getDialogs(parameter1, dialogs, users));
            break;

          default:
            reject('404 (not found)');
        }
      }, 1000)
    })
  },

  post: (header, body) => {
    const [ action ] = getRequest(header);
        
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        switch(action) {
          case 'posts':
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
  }
};

export default server;
