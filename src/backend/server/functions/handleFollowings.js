import { getDataPage } from "./general";

const getUserFollowings = (userId, followings) => (
  followings.find(userFollowings => (
    userFollowings.userId === userId
  ))
);

const getHandledUserFollowings = (userId, followings, users) => {
  const userFollowings = getUserFollowings(userId, followings);

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
  const userFollowings = getHandledUserFollowings(userId, followings, users);

  if (userFollowings) {
    return getDataPage(userFollowings, page, length);
  }

  return null
};

export const postFollowing = (userId, newFollowing, followings) => {
  const userFollowings = getUserFollowings(userId, followings);

  if (userFollowings) {
    userFollowings.followings.push(newFollowing);
  } else {

  }

  return {status: '200'};
};

export const deleteFollowing = (userId, unfollow, followings) => {
  const userFollowings = getUserFollowings(userId, followings);
  userFollowings.followings = userFollowings.followings
  .filter(following => following !== unfollow);

  return {status: '200'};
};
