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
  
    return {status: 200};
};
