import React from 'react';
import GetIcon from '../../../../img/GetIcon';
import styles from './News.module.css';

const News = ({ state }) => {
  const publications = state.publications.publications;
  const users = state.users.allUsers;

  const getPublicationAutor = (userId) => (
    users.find(user => user.id === userId)
  ); 

  return (
    <div className={styles.news}>
      <ul className={styles.news__publications}>
        {publications.map(publication => (
          <li
            className={styles.news__publication}
            key={publication.id}
          > 
            <div>
              <img
                src={getPublicationAutor(publication.userId).avatar}
                alt="Publication author avatar"
                className={styles.news__publicationAuthorAvatar}
              />

              <button className={styles.news__likeBtn}>
                <span className={styles.news__likeIcon}>
                  <GetIcon id='like-icon' />
                </span>

                <span className={styles.news__likesCounter}>
                  {publication.likes}
                </span>
              </button>
            </div>

            <div>
              <h3 className={styles.news__publicationAuthor}>
                {getPublicationAutor(publication.userId).name}:
              </h3>

              <p>
                {publication.publication}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
