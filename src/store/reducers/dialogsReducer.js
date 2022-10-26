const SET_DIALOGS = 'SET_DIALOGS';
const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';
const SET_IS_CONTACT_SELECTED = 'SET_IS_CONTACT_SELECTED';
const SET_NO_CONTACT_SELECTED = 'SET_NO_CONTACT_SELECTED';

const initialState = {
  dialogs: [],
  totalDialogs: null,
  isContactSelected: false,
  newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DIALOGS:
      return {
        ...state,
        dialogs: action.dialogs,
        totalDialogs: action.totalDialogs
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
      const currentDialogId = action.newMessage.dialogId;
      const currentDialogMessages = state.dialogs
      .find(dialog => dialog.id === currentDialogId)
      .messages;

      currentDialogMessages.push(action.newMessage);

      const stateCopy = JSON.parse(JSON.stringify(state));

      return { ...stateCopy };

    case UPDATE_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.messageText
      }

    default:
      return state;
  }
};

export const setDialogs = (dialogs, totalDialogs) => ({
  type: SET_DIALOGS,
  dialogs,
  totalDialogs
});

export const setIsContactSelected = () => ({
  type: SET_IS_CONTACT_SELECTED
});

export const setNoContactSelected = () => ({
  type: SET_NO_CONTACT_SELECTED
});

export const addMessage = (newMessage) => ({
  type: ADD_MESSAGE,
  newMessage
});

export const updateMessageText = (messageText) => ({
  type: UPDATE_MESSAGE_TEXT,
  messageText
});

export default dialogsReducer;
