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
    return users
    .filter(user => userFollowingsId.includes(user.id))
    .map(user => ({
      id: user.id,
      name: user.name,
      avatar: user.avatar
    }));
  }

  return null;
}

export const getUserFollowingsPage = (userId, page = 1, length = 10) => {
  updateOnlineStatus(userId);

  const userFollowings = getUserFollowings(userId);

  if (userFollowings) {
    return {
      data: handleDataPage(userFollowings, page, length),
      statusCode: 200
    };
  }

  return {
    status: 404,
    message: 'Not found'
  };
};

export const postFollowing = (userId, body) => {
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

  return {statusCode: 200};
};

export const deleteFollowing = (userId, unfollowId) => {
  updateOnlineStatus(userId);

  const followingsId = getUserFollowingsId(userId);

  if (followingsId) {
    const unfollowIdIndex = followingsId.indexOf(+unfollowId);

    if (unfollowIdIndex !== -1) {
      followingsId.splice(unfollowIdIndex, 1);
    }

    return {statusCode: 200};
  }

  return {statusCode: 404}
};
