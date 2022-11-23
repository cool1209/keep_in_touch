import { dialogsAPI } from "../../api/dialogsAPI";

const SET_DIALOGS = 'SET_DIALOGS';
const SET_IS_CONTACT_SELECTED = 'SET_IS_CONTACT_SELECTED';
const SET_NO_CONTACT_SELECTED = 'SET_NO_CONTACT_SELECTED';

const initialState = {
  dialogs: [],
  totalDialogs: null,
  isContactSelected: false,
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

export const fetchDialogs = () => (dispatch) => {
  dialogsAPI.fetchDialogs()
  .then(response => {
    if (response.statusCode === 200) {
      const { items, totalCount } = response.data
      dispatch(setDialogs(items, totalCount));
    }
  });
};

export const sendMessage = (newMessageInfo) => (dispatch) => {
  
  dialogsAPI.sendNewMessage(newMessageInfo)
  .then(response => {
    if (response.statusCode === 200) {
        dispatch(fetchDialogs());
    }
  });
};

export default dialogsReducer;
