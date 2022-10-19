import { getDataPage } from "./general";

export const postNewMessage = (message, dialogs) => {
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
};

export const getDialogs = (userId, dialogs, users, length = 21) => {
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

  return getDataPage(userDialogs, 1, length);
};
