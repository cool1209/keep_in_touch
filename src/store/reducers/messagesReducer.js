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
      const copyState = {
        ...state,
      };

      if (state.newMessageText.trim()) {
        copyState.dialogs = [ ...state.dialogs ];
  
        const currentDialog = copyState.dialogs[action.dialogId - 1];
        const newMessageId = currentDialog.messages.length + 1;
        
        const newMessage = {
          id: newMessageId,
          authorId: action.authorId,
          message: state.newMessageText.trim(),
        }
        
        currentDialog.messages.push(newMessage);
      }

      copyState.newMessageText = '';
      
      return copyState;

    case UPDATE_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.messageText
      }

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
