const SET_USERS = 'SET_USERS';

const initialState = {
  users: [],
  totalUsers: null,
  pages: [],
  currentPage: 0
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

    default:
      return state;
  };
}

export const setUsersAC = (users, totalUsers, currentPage) => ({
  type: SET_USERS,
  users,
  totalUsers,
  currentPage
});

export default usersReducer;
