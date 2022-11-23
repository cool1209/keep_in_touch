import users from '../../mockData/users';
import dialogs from '../../mockData/dialogs';
import { handleDataPage } from "./handleDataPage";
import { updateOnlineStatus } from './handleOnlineStatus';

export const getDialogs = (userId, length = 21) => {
  updateOnlineStatus(userId);

  const userDialogs = dialogs
  .filter(dialog => dialog.membersId.includes(userId))
  .map(dialog => ({
    id: dialog.id,

    contact: users
    .find(user => user.id === dialog.membersId.find(id => id !== userId))
    .name,

    contactAvatar: users
    .find(user => user.id === dialog.membersId.find(id => id !== userId))
    .avatar,

    messages: dialog.messages.map(message => ({
      id: message.id,
      authorId: message.authorId,

      authorAvatar: users
      .find(user => user.id === message.authorId)
      .avatar,

      message: message.message
    }))
  }));

  return {
    data: handleDataPage(userDialogs, 1, length),
    statusCode: 200
  };
};

export const postNewMessage = (userId, body) => {
  updateOnlineStatus(userId);

  const { message, dialogId } = body;
  const currentDialog = dialogs.find(dialog => dialog.id === dialogId);
  const newMessageId = currentDialog.messages.length + 1;
  const newMessage = {
    id: newMessageId,
    authorId: userId,
    message,
  }

  currentDialog.messages.push(newMessage);

  return {statusCode: 200};
};
