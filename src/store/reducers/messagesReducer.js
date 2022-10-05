import data from "../../data/data";
const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';

const initialState = {
  dialogs: data.dialogs,
  newMessageText: '',
};

const messagesReducer = (state = initialState, action) => {
  const copyState = {...state};
  
  switch (action.type) {
    case ADD_MESSAGE:
      copyState.dialogs = [...state.dialogs];
      const currentDialog = copyState.dialogs[action.dialogId - 1];
      const messageId = currentDialog.messages.length + 1;
      const message = {
        id: messageId,
        authorId: action.authorId,
        message: copyState.newMessageText.trim(),
      }

      if (copyState.newMessageText.trim()) {
        currentDialog.messages.push(message);
        copyState.newMessageText = '';
      } 
      
      copyState.newMessageText = '';

      return copyState;

    case UPDATE_MESSAGE_TEXT:
      copyState.newMessageText = action.messageText;
      return copyState;

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
