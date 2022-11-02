import users from "../../data/users";
import posts from "../../data/posts";
import followings from "../../data/followings";
import { getDataPage, handlePost } from "./general";

export const getPosts = (
  userId,
  page = 1,
  length = 12
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

export const getProfilePosts = (userId, length = 6) => {
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

export const postNewPost = (newPost) => {
  posts.push({
    id: posts.length + 1,
    userId: newPost.userId,
    text: newPost.text,
    likes: 0,
  });

  return {status: 200};
};
