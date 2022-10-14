import users from "./database/users";
import publications from "./database/publications";
import dialogs from "./database/dialogs";
import {
  getDialogs,
  getHeaderEndpoint,
  getLogInUser,
  getPublications,
  getUserPublications,
  getUsers,
  postNewMessage,
  postNewPublication,
  setLogoutUser
} from "./serverFunctions";

const server = {
  get: (header) => {
    const [ action, parameter ] = getHeaderEndpoint(header);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        switch(action) {
          case 'user':
            resolve(getLogInUser(parameter, users));
            break;
          case 'users':
            resolve(getUsers(parameter, users));
            break;
    
          case 'publications':
            resolve(getPublications(publications, users));
            break;

          case 'user-publications':
            resolve(getUserPublications(parameter, publications, users));
            break;

          case 'dialogs':
            resolve(getDialogs(parameter, dialogs, users));
            break;

          default:
            reject('404 (not found)');
        }
      }, 1000)
    })
  },

  post: (header, body) => {
    const [ action ] = getHeaderEndpoint(header);
        
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        switch(action) {
          case 'publication':
            resolve(postNewPublication(body, publications));
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
    const [ action, parameter ] = getHeaderEndpoint(header);
    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        switch(action) {
          case 'user':
            resolve(setLogoutUser(parameter, users));
            break;

          default:
            reject('404 (not found)');
        }
      }, 30000)
    })
  }
};

export default server;

// "https://bit.ly/3emGlKL"