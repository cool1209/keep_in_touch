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

export const getPage = (data, page = 1, length = 10) => {
  const pageLength = length;
  const dataPages = [];
  let dataPage = [];
  let dataCounter = 0;

  for (let i = 0; i < data.items.length; i++) {
    const user = data.items[i];

    if (dataCounter < pageLength) {
      dataPage.push(user);
      dataCounter++;
    }
    
    if (dataCounter === pageLength) {
      dataPages.push(dataPage);
      dataPage = [];
      dataCounter = 0;
    }

    if (i === data.items.length - 1 && dataPage.length) {
      dataPages.push(dataPage);
    }
  }

  return page <= dataPages.length 
    ? {
        items: dataPages[page - 1],
        totalCount: data.totalCount
      }
    : null;
};

const getParsedPost = (post, users) => {
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

export const getUsers = (users, page) => {
  return getPage(users, page, 10);
};

export const getPosts = (posts, users) => {
  const postsPage = getPage(posts, 1, 4);

  return postsPage.items.map(post => getParsedPost(post, users));
};

export const getUserPosts = (posts, users, userId) => {

  const userPostsItems = posts.items
  .filter(post => post.userId === +userId)
  .map(post => (
    getParsedPost(post, users)
  ));
  
  const userPosts = {
    items: userPostsItems,
    totalCount: userPostsItems.length
  }

  return getPage(userPosts, 1, 1);
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
  const userDialogsItems = dialogs.items
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
  }));

  const userDialogs = {
    items: userDialogsItems,
    totalCount: userDialogsItems.length
  }

  return getPage(userDialogs, 1, 7);
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
