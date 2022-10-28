import { getDataPage, getUserFollowings } from "./general";

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
    return {
      data: getDataPage(userFollowings, page, length),
      status: 200
    };
  }

  return null
};
