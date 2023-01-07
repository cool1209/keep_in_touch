import { usersAPI } from "../../api/usersAPI";
import { changeState } from "../functions/changeState";

const SET_USERS = "users/SET_USERS";
const SET_IS_LOADING_PROCESS = "users/SET_IS_LOADING_PROCESS";

const initialState = {
  users: [],
  totalUsers: null,
  pages: [],
  currentPage: 0,
  isPageLoadingProcess: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      const stateCopy = {
        ...state,
        totalUsers: action.totalUsers,
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
      };

    case SET_IS_LOADING_PROCESS:
      return changeState(state, action, "isPageLoadingProcess");

    default:
      return state;
  }
};

export const setUsers = (users, totalUsers, currentPage) => ({
  type: SET_USERS,
  users,
  totalUsers,
  currentPage,
});

export const setIsPageLoadingProcess = (payload) => ({
  type: SET_IS_LOADING_PROCESS,
  payload,
});

export const fetchUsers = (page) => async (dispatch) => {
  dispatch(setIsPageLoadingProcess(true));

  const response = await usersAPI.fetchUsers(page);
  if (response.statusCode === 200) {
    const { items, totalCount } = response.data;

    dispatch(setUsers(items, totalCount, page));
  }

  dispatch(setIsPageLoadingProcess(false));
};

export default usersReducer;
