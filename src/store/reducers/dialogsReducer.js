import server from "../../backend/server/server";

const SET_DIALOGS = 'SET_DIALOGS';
const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';
const SET_IS_CONTACT_SELECTED = 'SET_IS_CONTACT_SELECTED';
const SET_NO_CONTACT_SELECTED = 'SET_NO_CONTACT_SELECTED';

const initialState = {
  dialogs: [],
  isContactSelected: false,
  newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DIALOGS:
      return {
        ...state,
        dialogs: action.dialogs,
      }
    
    case SET_IS_CONTACT_SELECTED:
      if (state.isContactSelected === false) {
        return {
          ...state,
          isContactSelected: true
        }
      }

      return state;

      case SET_NO_CONTACT_SELECTED:
        if (state.isContactSelected === true) {
          return {
            ...state,
            isContactSelected: false
          }
        }
  
        return state;

    case ADD_MESSAGE:
      if (state.newMessageText.trim()) {
        const currentDialogMessages = state.dialogs
        .find(dialog => dialog.id === action.dialogId)
        .messages;

        const newMessage = {
          id: currentDialogMessages.length + 1,
          dialogId: action.dialogId,
          authorId: action.user.id,
          authorAvatar: action.user.avatar,
          message: state.newMessageText.trim(),
        }

        server.post('server/api/message', newMessage);

        currentDialogMessages.push(newMessage);

        return {
          ...state,
          newMessageText: ''
        }
      }

      return {
        ...state,
        newMessageText: ''
      }

    case UPDATE_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.messageText
      }

    default:
      return state;
  }
};

export const setDialogsAC = (dialogs) => ({
  type: SET_DIALOGS,
  dialogs
});

export const setIsContactSelectedAC = () => ({
  type: SET_IS_CONTACT_SELECTED
});

export const setNoContactSelectedAC = () => ({
  type: SET_NO_CONTACT_SELECTED
});

export const sendMessageAC = (dialogId, user) => ({
  type: ADD_MESSAGE,
  dialogId,
  user
});

export const updateMessageTextAC = (messageText) => ({
  type: UPDATE_MESSAGE_TEXT,
  messageText
});

export default dialogsReducer;
