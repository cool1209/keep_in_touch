import { getUserFollowings } from "./general";

export const deleteFollowing = (userId, unfollow, followings) => {
    const userFollowings = getUserFollowings(userId, followings);
    userFollowings.followings = userFollowings.followings
    .filter(following => following !== unfollow);
  
    return {status: 200};
  };