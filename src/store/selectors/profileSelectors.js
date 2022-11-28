export const getProfile = (state) => (
  state.profile.profile
);

export const getProfileId = (state) => (
  state.profile.profile.id
);

export const getIsProfile = (state) => (
  getProfileId(state)
);

export const getIsAuthUserProfile = (state) => (
  state.profile.isAuthUserProfile
);

export const getProfileOnlineStatus = (state) => (
  state.profile.onlineStatus
);

export const getProfileStatus = (state) => (
  state.profile.profile.status
);
