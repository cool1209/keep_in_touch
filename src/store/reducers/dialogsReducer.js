import server from "../../backend/server";

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
        dialogs: action.dialogs,
      }

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
