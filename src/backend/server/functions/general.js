export const getUser = (userId, users) => (
  users.find(user => (user.id === userId))
);

export const getDataPage = (data, page, length) => {
  const reversedData = [ ...data ].reverse();
  const pageLength = length;
  const dataPages = [];
  let dataPage = [];
  let dataCounter = 0;

  for (let i = 0; i < reversedData.length; i++) {
    const item = reversedData[i];

    if (dataCounter < pageLength) {
      dataPage.push(item);
      dataCounter++;
    }
    
    if (dataCounter === pageLength) {
      dataPages.push(dataPage);
      dataPage = [];
      dataCounter = 0;
    }

    if (i === data.length - 1 && dataPage.length) {
      dataPages.push(dataPage);
    }
  }

  return page <= dataPages.length 
    ? {
        items: dataPages[page - 1],
        totalCount: data.length
      }
    : {
        items: [],
        totalCount: data.length
      };
};

export const handlePost = (post, users) => {
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

export const getUserFollowings = (userId, followings) => (
  followings.find(userFollowings => (
    userFollowings.userId === userId
  ))
);
