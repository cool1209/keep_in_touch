import {
  getUserDialogs,
  postNewMessage
} from "../../backend/server";

const SET_DIALOGS = 'SET_DIALOGS';
const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';

const initialState = {
  dialogs: [],
  newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DIALOGS:
      return {
        ...state,
        dialogs: getUserDialogs(),
        newMessageText: ''
      }

    case ADD_MESSAGE:
      const copyState = {
        ...state,
      };

      if (state.newMessageText.trim()) {
        const newMessage = {
          authorId: action.authorId,
          message: state.newMessageText.trim(),
        }
        
        postNewMessage(action.dialogId, newMessage);
        
        copyState.dialogs = getUserDialogs();
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

export const setDialogsAC = () => ({
  type: SET_DIALOGS,
});

export const sendMessageAC = (dialogId, authorId) => ({
  type: ADD_MESSAGE,
  dialogId,
  authorId
});

export const updateMessageTextAC = (messageText) => ({
  type: UPDATE_MESSAGE_TEXT,
  messageText
});

export default dialogsReducer;
