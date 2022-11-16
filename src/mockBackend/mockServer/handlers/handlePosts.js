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

export const getPosts = (body, userId) => {
  updateOnlineStatus(userId);

  const { page = 1, length = 12 } = body;

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
    status: 200
  }
};

export const getProfilePosts = (body, userId) => {
  updateOnlineStatus(userId);

  const { profileId, length = 6 } = body;
  const profilePosts = posts
  .filter(post => post.userId === +profileId)
  .map(post => (
    handlePost(post, users)
  ));
  
  return {
    data: handleDataPage(profilePosts, 1, length),
    status: 200
  }
};

export const postNewPost = (body, userId) => {
  updateOnlineStatus(userId);

  const { text } = body;
  const newPost = {
    id: posts.length + 1,
    userId,
    text,
    likes: 0,
  }

  posts.push(newPost);

  return {status: 200};
};
