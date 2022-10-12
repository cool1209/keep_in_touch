import users from "../data/users";
import publications from "../data/publications";
import dialogs from "../data/dialogs";

let userId = 0;

export const postUserLogin = (login) => (
  userId = users.find(user => user.login === login).id
);

export const getUser = () => (
  users.find(user => user.id === userId)
);
  
export const getUsers = (stateUsers = 0) => (
  users.slice(stateUsers, (stateUsers + 6))
);

// export const getUsers1 = (pageLength = 6) => {

// };

export const getPublications = () => (
  publications.map(publication => (
    {
      id: publication.id,
      userId: publication.userId,
      author: users.find(user => user.id === publication.userId).login,
      authorAvatar:  users.find(user => user.id === publication.userId).avatar,
      publication: publication.publication,
      likes: publication.likes,
    }
  ))
);
      
export const postPublication = (publication) => (
  publications.push({
    ...publication,
    id: publications.length + 1
  })
);

export const getUserDialogs = () => (
  dialogs
    .filter(dialog => dialog.membersId.includes(userId))
    .map(dialog => ({
      id: dialog.id,
      contact: users
        .find(user => user.id === dialog.membersId.find(id => id !== userId))
        .login,
      contactAvatar: users
        .find(user => user.id === dialog.membersId.find(id => id !== userId))
        .avatar,
      messages: dialog.messages.map(message => ({
        id: message.id,
        authorId: message.authorId,
        author:  users.find(user => user.id === message.authorId).login,
        authorAvatar: users.find(user => user.id === message.authorId).avatar,
        message: message.message
      }))
    }))
);

export const postNewMessage = () => {

};
