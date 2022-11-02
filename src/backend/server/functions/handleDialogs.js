import users from '../../data/users';
import dialogs from '../../data/dialogs';
import { getDataPage } from "./general";

export const getDialogs = (userId, length = 21) => {
  const userDialogs = dialogs
  .filter(dialog => dialog.membersId.includes(+userId))
  .map(dialog => ({
    id: dialog.id,

    contact: users
    .find(user => user.id === dialog.membersId.find(id => id !== +userId))
    .name,

    contactAvatar: users
    .find(user => user.id === dialog.membersId.find(id => id !== +userId))
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
    data: getDataPage(userDialogs, 1, length),
    status: 200
  };
};

export const postNewMessage = (message) => {
  const dialogId = message.dialogId;
  const currentDialog = dialogs
    .find(dialog => dialog.id === dialogId);

  const newMessageId = currentDialog.messages.length + 1;
  const newMessage = {
    id: newMessageId,
    authorId: message.authorId,
    message: message.message,
  }

  currentDialog.messages.push(newMessage);

  return {status: 200};
};
