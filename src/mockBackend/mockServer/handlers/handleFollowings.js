import users from '../../mockData/users';
import followings from '../../mockData/followings';
import { handleDataPage } from "./handleDataPage";
import { updateOnlineStatus } from './handleOnlineStatus';

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
  const userFollowingsId = getUserFollowingsId(userId);

  if (userFollowingsId) {
    const handledUserFollowings = userFollowingsId
    .map(followingId => (
      users.find(user => user.id === followingId)
    ));
  
    return handledUserFollowings;
  }

  return null;
}

export const getFollowings = (body, userId) => {
  updateOnlineStatus(userId);

  const{ page = 1, length = 10 } = body;
  const userFollowings = getUserFollowings(userId);

  if (userFollowings) {
    return {
      data: handleDataPage(userFollowings, page, length),
      status: 200
    };
  }

  return {
    status: 404,
    message: 'Not found'
  };
};

export const postFollowing = (body, userId) => {
  updateOnlineStatus(userId);

  const { newFollowing } = body;
  const followingsId = getUserFollowingsId(userId);

  if (followingsId) {
    followingsId.push(newFollowing);
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

export const deleteFollowing = (body, userId) => {
  updateOnlineStatus(userId);
  
  const { unfollow } = body;
  let followingsId = getUserFollowingsId(userId);

  if (followingsId) {
    followingsId = followingsId.filter(id => id !== unfollow);

    return {status: 200};
  }

  return {status: 404}
};
