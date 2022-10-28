export const postNewPost = (newPost, posts) => {
    posts.push({
      id: posts.length + 1,
      userId: newPost.userId,
      text: newPost.text,
      likes: 0,
    });
  
    return {status: 200};
};
