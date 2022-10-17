export const getRequest = (header) => {
  const serverAddress = 'server/api';

  const headerParts = header.split('?');
  const requestAdressParts = headerParts[0].split('/');
  const requestAdress = requestAdressParts[0] + '/' + requestAdressParts[1];

  if (serverAddress === requestAdress) {
    const endpoint = requestAdressParts[2];
    const action = endpoint;
    
    if (headerParts[1]) {
      const parameters = headerParts[1].split('&')
      .map(parametr => parametr.split('=')[1]);

      return [
        action,
        ...parameters
      ];
    }
    return [ action ];
  } else {
    const action = 'error';
    return [ action ]
  }
};

export const getLogInUser = (login,  users) => {
  const user = users.items.find(user => user.login === login);
  user.status = 'Online';
  return user;
};

export const setLogoutUser = (id, users) => {
  const user = users.items.find(user => user.id === +id);
  user.status = 'Offline';
};

export const getUsers = (page = 1, users) => {
  const pageLength = 10;
  const usersPages = [];
  let usersPage = [];
  let userCounter = 0;

  for (let i = 0; i < users.items.length; i++) {
    const user = users.items[i];

    if (userCounter < pageLength) {
      usersPage.push(user);
      userCounter++;
    }
    
    if (userCounter === pageLength) {
      usersPages.push(usersPage);
      usersPage = [];
      userCounter = 0;
    }

    if (i === users.items.length - 1 && usersPage.length) {
      usersPages.push(usersPage);
    }
  }

  return page <= usersPages.length 
    ? usersPages[page - 1]
    : null;
};

const parsePost = (post, users) => {
  const parsedPost = {
    id: post.id,
    userId: post.userId,
  
    author: users.items.find(user => user.id === post.userId).nickname,
  
    authorAvatar: users.items.find(user => user.id === post.userId).avatar,
  
    text: post.text,
    likes: post.likes,
  }
  return parsedPost;
};

export const getParsedPosts = (posts, users) => {
  return posts.items.map(post => parsePost(post, users));
};

export const getUserPosts = (userId, posts, users) => {
  const userPost = posts.items
  .filter(post => post.userId === +userId)
  .map(post => (
    parsePost(post, users)
  ));

  return userPost
};

export const postNewPost = (newPost, posts) => {
  posts.items.push({
    id: posts.items.length + 1,
    userId: newPost.userId,
    text: newPost.text,
    likes: 0,
  });
};

export const getDialogs = (userId, dialogs, users) => {
  return dialogs.items
    .filter(dialog => dialog.membersId.includes(+userId))
    .map(dialog => ({
      id: dialog.id,

      contact: users.items
      .find(user => user.id === dialog.membersId.find(id => id !== +userId))
      .nickname,

      contactAvatar: users.items
      .find(user => user.id === dialog.membersId.find(id => id !== +userId))
      .avatar,

      messages: dialog.messages.map(message => ({
        id: message.id,
        authorId: message.authorId,

        authorAvatar: users.items
        .find(user => user.id === message.authorId)
        .avatar,

        message: message.message
      }))
    }))
};

export const postNewMessage = (message, dialogs) => {
  const dialogId = message.dialogId;
  const currentDialog = dialogs.items.dialogs
    .find(dialog => dialog.id === dialogId);

  const newMessageId = currentDialog.messages.length + 1;
  const newMessage = {
    id: newMessageId,
    authorId: message.authorId,
    message: message.message,
  }

  currentDialog.messages.push(newMessage);
};
