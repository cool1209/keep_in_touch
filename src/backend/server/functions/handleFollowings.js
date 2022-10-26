import { getDataPage, getUser } from "./general";

const getUserFollowings = (userId, users) => {
  const userFollowings = getUser(userId, users).followings;

  if (userFollowings) {
    const handledUserFollowings = userFollowings
    .map(following => (
      users.find(user => user.id === following)
    ));
  
    return handledUserFollowings;
  }

  return null;
}

export const getFollowings = (
  userId,
  users,
  page,
  length
) => {
  const userFollowings = getUserFollowings(userId, users);

  if (userFollowings) {
    return getDataPage(userFollowings, page, length);
  }

  return null;
};

export const postFollowing = (newFollowing) => {

};

export const deleteFollowing = (following) => {

};
