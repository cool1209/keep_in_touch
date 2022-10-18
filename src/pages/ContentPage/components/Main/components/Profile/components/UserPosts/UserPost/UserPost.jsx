import React from 'react';
import UserPostStyles from './UserPost.module.css';
import GetIcon from '../../../../../../../../../img/GetIcon';

const UserPost = ({ post }) => {
  return (
    <article className={UserPostStyles.wrapper}>
      <div className={UserPostStyles.userInfo}>
        <img 
          src={post.authorAvatar}
          alt='User avatar'
          className={UserPostStyles.authorAvatar}
        />

        <button className={UserPostStyles.likeBtn}>
          <span className={UserPostStyles.likeIcon}>
            <GetIcon id='like-icon' />
          </span>

          <span className={UserPostStyles.likesCounter}>
            {post.likes}
          </span>
        </button>
      </div>
      
      <div className={UserPostStyles.content}>
        {post.text}
      </div>
    </article>
  );
};

export default UserPost;
