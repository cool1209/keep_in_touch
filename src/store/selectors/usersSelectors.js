export const getUsers = (state) => (
  state.users.users
);

export const getTotalUsers = (state) => (
  state.users.totalUsers
);

export const getPagesOfUsers = (state) => (
  state.users.pages
);

export const getCurrentPageOfUsers = (state) => (
  state.users.currentPage
);

export const getUsersPageIsLoading = (state) => (
  state.users.isPageLoadingProcess
);
