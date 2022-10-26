import { getDataPage } from "./general";

const getUserFollowings = (userId, followings, users) => {
  const userFollowings = followings.find(userFollowings => (
    userFollowings.userId === userId
  ));

  if (userFollowings) {
    const handledUserFollowings = userFollowings
    .followings
    .map(following => (
      users.find(user => user.id === following)
    ));
  
    return handledUserFollowings;
  }

  return null;
}

export const getFollowings = (
  userId,
  followings,
  users,
  page,
  length
) => {
  const userFollowings = getUserFollowings(userId, followings, users);

  if (userFollowings) {
    return getDataPage(userFollowings, page, length);
  }

  return null;
};

export const postFollowing = (newFollowing, followings) => {

};

export const deleteFollowing = (following, followings) => {

};
