import { getDataPage, handlePost } from "./general";

export const getPosts = (
  userId,
  page,
  posts,
  followings,
  users,
  length
) => {
  let userFollowings = followings
  .find(userFollowings => userFollowings.userId === userId);

  if (userFollowings) {
    userFollowings = userFollowings.followings
  } else {
    userFollowings = [];
  }

  const handledPosts = posts
  .filter(post => (
    [...userFollowings, userId].includes(post.userId)
  ));
    
  const postsPage =  getDataPage(handledPosts, page, length);

  postsPage.items = postsPage.items.map(post => handlePost(post, users));
  
  return {
    data: postsPage,
    status: 200
  }
};
