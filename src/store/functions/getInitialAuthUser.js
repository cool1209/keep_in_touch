import authUserInStorage from "./handleSessionStorage";

export const getInitialAuthUser = () => {
  return authUserInStorage.get() || {};
};
