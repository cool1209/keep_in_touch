import { getUserFollowings } from "./general";

export const postFollowing = (userId, newFollowing, followings) => {
    const userFollowings = getUserFollowings(userId, followings);
  
    if (userFollowings) {
      userFollowings.followings.push(newFollowing);
    } else {
      const newUserFollowings = {
        id: followings.length + 1,
        userId: userId,
        followings: [newFollowing]
      }
  
      followings.push(newUserFollowings);
    }
  
    return {status: 200};
  };