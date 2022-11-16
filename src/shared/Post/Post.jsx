import React from 'react';
import { NavLink } from 'react-router-dom';

import GetIcon from '../../assets/ico/GetIcon';
import SmallUserAvatar from '../SmallUserAvatar/SmallUserAvatar';
import styles from './Post.module.scss';

const Post = ({ post }) => {
  const navLinkPath = `/profile/${post.userId}`;

  return (
    <article className={styles.post}> 
      <div className={styles.post__author}>
        <NavLink to={navLinkPath}  className={styles.post__authorContainer}>
          <SmallUserAvatar
            src={post.authorAvatar}
          />
        </NavLink>

        <button className={styles.post__likeBtn}>
          <span className={styles.post__likeIcon}>
            <GetIcon id='like-icon' />
          </span>

          <span className={styles.post__likesCounter}>
            {post.likes}
          </span>
        </button>
      </div>

      <div className={styles.post__content}>
        <NavLink to={navLinkPath}>
          <h3 className={styles.post__authorName}>
            [{post.author}]
          </h3>
        </NavLink>

        <p>
          {post.text}
        </p>
      </div>
    </article>
  );
};

export default Post;
