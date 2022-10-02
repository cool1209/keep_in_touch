const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';

const messagesReduser = (state, action) => {
  const dialogsPage = state.dialogsPage;
  const dialogId = action.payload;

  switch (action.type) {
    case ADD_MESSAGE:
      const messageId = state.dialogs[dialogId - 1].messages.length + 1;
      const message = {
        id: messageId,
        member: state.user.id,
        message: dialogsPage.newMessageText.trim(),
      }

      if (dialogsPage.newMessageText.trim()) {
        state.dialogs[dialogId - 1].messages.push(message);
        dialogsPage.newMessageText = '';
      } 
      
      dialogsPage.newMessageText = '';

      return state;

    case UPDATE_MESSAGE_TEXT:
      dialogsPage.newMessageText = action.payload;
      return state;

    default:
      return state;
  }
};

export const sendMessageCreator = (dialogId) => ({
  type: ADD_MESSAGE,
  payload: dialogId
});

export const updateMessageTextCreator = (text) => ({
  type: UPDATE_MESSAGE_TEXT,
  payload: text
});

export default messagesReduser;
