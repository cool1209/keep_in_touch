import data from "../../data/data";
const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';

const initialState = {
  dialogs: data.dialogs,
  newMessageText: '',
};

const messagesReducer = (state = initialState, action) => {
  const currentDialog = state.dialogs[action.dialogId - 1];
  
  switch (action.type) {
    case ADD_MESSAGE:
      const messageId = currentDialog.messages.length + 1;
      const message = {
        id: messageId,
        authorId: action.authorId,
        message: state.newMessageText.trim(),
      }

      if (state.newMessageText.trim()) {
        currentDialog.messages.push(message);
        state.newMessageText = '';
      } 
      
      state.newMessageText = '';

      return state;

    case UPDATE_MESSAGE_TEXT:
      state.newMessageText = action.messageText;
      return state;

    default:
      return state;
  }
};

export const sendMessageCreator = (dialogId, authorId) => ({
  type: ADD_MESSAGE,
  dialogId,
  authorId
});

export const updateMessageTextCreator = (messageText) => ({
  type: UPDATE_MESSAGE_TEXT,
  messageText
});

export default messagesReducer;
