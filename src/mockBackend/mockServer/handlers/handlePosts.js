import users from "../../mockData/users";
import posts from "../../mockData/posts";
import followings from "../../mockData/followings";
import { handleDataPage } from "./handleDataPage";
import { updateOnlineStatus } from "./handleOnlineStatus";

export const handlePost = (post) => {
  const handledPost = {
    id: post.id,
    userId: post.userId,
  
    author: users.find(user => user.id === post.userId).name,
  
    authorAvatar: users.find(user => user.id === post.userId).avatar,
  
    text: post.text,
    likes: post.likes,
  }

  return handledPost;
};

export const getPosts = (userId, page = 1, length = 12) => {
  updateOnlineStatus(userId);

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
    
  const postsPage =  handleDataPage(handledPosts, page, length);

  postsPage.items = postsPage.items.map(post => handlePost(post, users));
  
  return {
    data: postsPage,
    statusCode: 200
  }
};

export const getProfilePosts = (userId, profileId, length = 6) => {
  updateOnlineStatus(userId);

  const profilePosts = posts
  .filter(post => post.userId === +profileId)
  .map(post => (
    handlePost(post, users)
  ));
  
  return {
    data: handleDataPage(profilePosts, 1, length),
    statusCode: 200
  }
};

export const postNewPost = (userId, body) => {
  updateOnlineStatus(userId);

  const { text } = body;
  const newPost = {
    id: posts.length + 1,
    userId,
    text,
    likes: 0,
  }

  posts.push(newPost);

  return {statusCode: 200};
};
