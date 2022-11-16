import { usersAPI } from "../../api/api";

const SET_USERS = 'SET_USERS';
const SET_IS_LOADING_PROCESS = 'SET_IS_LOADING_PROCESS';

const initialState = {
  users: [],
  totalUsers: null,
  pages: [],
  currentPage: 0,
  isPageLoadingProcess: false
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      const stateCopy = {
        ...state, 
        totalUsers: action.totalUsers
      };

      const pageLength = 10;
      const totalPages = Math.ceil(stateCopy.totalUsers / pageLength);
      const pages = [];
      
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return {
        ...stateCopy,
        users: action.users,
        pages,
        currentPage: action.currentPage,
      }

    case SET_IS_LOADING_PROCESS:
      return {
        ...state,
        isPageLoadingProcess: action.isPageLoadingProcess
      }

    default:
      return state;
  };
}

export const setUsers = (users, totalUsers, currentPage) => ({
  type: SET_USERS,
  users,
  totalUsers,
  currentPage
});

export const setIsPageLoadingProcess = (isPageLoadingProcess) => ({
type: SET_IS_LOADING_PROCESS,
isPageLoadingProcess
});

export const getUsers = (page) => (dispatch) => {
  dispatch(setIsPageLoadingProcess(true));

  usersAPI.getUsers(page)
  .then(response => {
    if (response.status === 200) {
      const { items, totalCount } = response.data;
      
      dispatch(setUsers(items, totalCount, page));
    };

    dispatch(setIsPageLoadingProcess(false));
  });
}

export default usersReducer;
