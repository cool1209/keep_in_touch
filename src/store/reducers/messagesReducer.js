import data from "../../data/data";
const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';

const initialState = {
  dialogs: data.dialogs,
  newMessageText: '',
};

const messagesReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_MESSAGE:
      const messageId = state.dialogs[action.dialogId - 1].messages.length + 1;
      const message = {
        id: messageId,
        member: action.UserId,
        message: state.newMessageText.trim(),
      }

      if (state.newMessageText.trim()) {
        state.dialogs[action.dialogId - 1].messages.push(message);
        state.newMessageText = '';
      } 
      
      state.newMessageText = '';

      return state;

    case UPDATE_MESSAGE_TEXT:
      state.newMessageText = action.payload;
      return state;

    default:
      return state;
  }
};

export const sendMessageCreator = (dialogId, UserId) => ({
  type: ADD_MESSAGE,
  dialogId,
  UserId
});

export const updateMessageTextCreator = (text) => ({
  type: UPDATE_MESSAGE_TEXT,
  text
});

export default messagesReducer;
