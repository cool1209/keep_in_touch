import React from 'react';
import { NavLink } from 'react-router-dom';
import GetIcon from '../../../assets/img/GetIcon';
import PostStyles from './Post.module.css';

const Post = ({ post }) => {
  return (
    <article className={PostStyles.wrapper}> 
      <div className={PostStyles.authorInfo}>
        <NavLink to={`/profile/${post.userId}`}>
          <img 
            src={post.authorAvatar}
            alt='Publication author avatar'
            className={PostStyles.authorAvatar}
          />
        </NavLink>

        <button className={PostStyles.likeBtn}>
          <span className={PostStyles.likeIcon}>
            <GetIcon id='like-icon' />
          </span>

          <span className={PostStyles.likesCounter}>
            {post.likes}
          </span>
        </button>
      </div>

      <div className={PostStyles.content}>
        <h3 className={PostStyles.postAuthor}>
          [ {post.author} ]
        </h3>

        <p>
          {post.text}
        </p>
      </div>
    </article>
  );
};

export default Post;
