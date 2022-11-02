import users from '../../data/users';
import followings from '../../data/followings';
import { getDataPage } from "./general";

export const getUserFollowingsId = (userId) => {
  const userFollowingsId = followings.find(userFollowings => (
    userFollowings.userId === userId
  ));

  if (userFollowingsId) {
    return userFollowingsId.followings
  };

  return null;
};

const getUserFollowings = (userId) => {
  const userFollowings = getUserFollowingsId(userId);

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
  page = 1,
  length = 10
) => {
  const userFollowings = getUserFollowings(userId);

  if (userFollowings) {
    return {
      data: getDataPage(userFollowings, page, length),
      status: 200
    };
  }

  return {
    status: 404,
    message: 'Not found'
  };
};

export const postFollowing = (userId, newFollowing) => {
  const userFollowings = getUserFollowingsId(userId);

  if (userFollowings) {
    userFollowings.push(newFollowing);
  } else {
    const newUserFollowings = {
      id: 1,
      userId: userId,
      followings: [newFollowing]
    }

    followings.push(newUserFollowings);
  }

  return {status: 200};
};

export const deleteFollowing = (userId, unfollow) => {
  const userFollowings = getUserFollowingsId(userId);
  const followingIndex = userFollowings.indexOf(unfollow);

  if (followingIndex >= 0) {
    userFollowings.splice(followingIndex, 1);

    return {status: 200};
  }

  return {status: 404}
};
