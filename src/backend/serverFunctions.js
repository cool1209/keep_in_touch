export const getHeaderEndpoint = (header) => {
  const headerEndpoint = header.split('api/')[1];
  const headerEndpointParts = headerEndpoint.split('/');

  const action = headerEndpointParts[0];
  const parameter = headerEndpointParts[1];

  return [
    action,
    parameter
  ];
};

export const getLogInUser = (login,  users) => {
  const user = users.find(user => user.login === login);
  user.status = 'Online';
  return user;
};

export const setLogoutUser = (id, users) => {
  const user = users.find(user => user.id === +id);
  user.status = 'Offline';
};

const createPublication = (publication, users) => ({
  id: publication.id,
  userId: publication.userId,
  author: users.find(user => user.id === publication.userId).nickname,
  authorAvatar:  users.find(user => user.id === publication.userId).avatar,
  publication: publication.publication,
  likes: publication.likes,
});

export const getPublications = (publications, users) => {
  return publications.map(publication => (
    createPublication(publication, users)
  ));
};

export const getUserPublications = (userId, publications, users) => {
  const userPublications = publications
  .filter(publication => publication.userId === +userId)
  .map(publication => (
    createPublication(publication, users)
  ));

  return userPublications
};

export const postNewPublication = (newPublication, publications) => {
  publications.push({
    id: publications.length + 1,
    userId: newPublication.userId,
    publication: newPublication.publication,
    likes: 0,
  });
};

export const getUsers = (page = 1, users) => {
  const pageLength = 20;
  const usersPages = [];
  let usersPage = [];
  let userCounter = 0;

  for (let i = 0; i < users.length; i++) {
    const user = users[i];

    if (userCounter < pageLength) {
      usersPage.push(user);
      userCounter++;
    }
    
    if (userCounter === pageLength) {
      usersPages.push(usersPage);
      usersPage = [];
      userCounter = 0;
    }

    if (i === users.length - 1 && usersPage.length) {
      usersPages.push(usersPage);
    }
  }

  return page <= usersPages.length 
    ? usersPages[page - 1]
    : null;
};

export const getDialogs = (userId, dialogs, users) => {
  return dialogs
    .filter(dialog => dialog.membersId.includes(+userId))
    .map(dialog => ({
      id: dialog.id,
      contact: users
        .find(user => user.id === dialog.membersId.find(id => id !== +userId))
        .login,
      contactAvatar: users
        .find(user => user.id === dialog.membersId.find(id => id !== +userId))
        .avatar,
      messages: dialog.messages.map(message => ({
        id: message.id,
        authorId: message.authorId,
        authorAvatar: users.find(user => user.id === message.authorId).avatar,
        message: message.message
      }))
    }))
};

export const postNewMessage = (newMessage, dialogs) => {
  const dialogId = newMessage.dialogId;
  const currentDialog = dialogs.find(dialog => dialog.id === dialogId);
  const newMessageId = currentDialog.messages.length + 1;

  currentDialog.messages.push({
    id: newMessageId,
    authorId: newMessage.authorId,
    message: newMessage.message,
  });
};
