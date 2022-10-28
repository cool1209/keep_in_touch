import { getDataPage, handlePost } from "./general";

export const getUserPosts = (userId, posts, users, length = 6) => {
  const userPosts = posts
  .filter(post => post.userId === +userId)
  .map(post => (
    handlePost(post, users)
  ));
  
  return {
    data: getDataPage(userPosts, 1, length),
    status: 200
  }
};
