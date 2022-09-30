const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';

const dialogsReduser = (state, action) => {

  switch (action.type) {
    case ADD_MESSAGE:
      const messageId = state.dialogs[0].messages.length + 1;

      const message = {
        id: messageId,
        member: 'Iron-man',
        memberAvatar: 'https://bit.ly/3RGqLZ0',
        message: state.newMessageText,
      }

      if (state.newMessageText) {
        state.dialogs[0].messages.push(message);
        state.newMessageText = '';
      }
      
      return state;
    case UPDATE_MESSAGE_TEXT:
      state.newMessageText = action.payload;
      return state;

    default:
      return state;
  }
};

export const sendMessageCreator = () => ({
  type: ADD_MESSAGE
});

export const updateMessageTextCreator = (text) => ({
  type: UPDATE_MESSAGE_TEXT,
  payload: text
});

export default dialogsReduser;
