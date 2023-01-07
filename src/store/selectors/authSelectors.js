export const getIsAuth = (state) => (
    getAuthUserId(state)
);

export const getAuthUser = (state) => (
    state.auth.authUser
);

export const getAuthLoadingProcess = (state) => (
    state.auth.isLoadingProcess
);

export const getIsAuthError = (state) => (
    state.auth.isAuthError
);

export const getAuthUserId = (state) => (
    state.auth.authUser.id
);
