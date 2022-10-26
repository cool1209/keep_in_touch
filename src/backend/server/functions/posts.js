import { getDataPage } from "./general";

export const postNewPost = (newPost, posts) => {
  posts.push({
    id: posts.length + 1,
    userId: newPost.userId,
    text: newPost.text,
    likes: 0,
  });

  return {status: '200'};
};

const assemblePost = (post, users) => {
  const assembledPost = {
    id: post.id,
    userId: post.userId,
  
    author: users.find(user => user.id === post.userId).name,
  
    authorAvatar: users.find(user => user.id === post.userId).avatar,
  
    text: post.text,
    likes: post.likes,
  }

  return assembledPost;
};

export const getUserPosts = (userId, posts, users, length = 6) => {
  const userPosts = posts
  .filter(post => post.userId === +userId)
  .map(post => (
    assemblePost(post, users)
  ));
  
  return getDataPage(userPosts, 1, length);
};

export const getPosts = (page, posts, users, length = 12) => {
  const postsPage =  getDataPage(posts, page, length);

  postsPage.items = postsPage.items.map(post => assemblePost(post, users));
  
  return postsPage;
};
