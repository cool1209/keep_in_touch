import React from 'react';
import GetIcon from '../../../../../../../../img/GetIcon';
import styles from './PublicationList.module.css';

const PublicationList = ({ user, publications }) => {
  const getUserNewPublications = () => (
    publications.filter(publication => publication.userId === user.id)
  );

  return (
    <section className={styles.publicationList}>
      <h3 className={styles.publicationList__title}>
        All my publications:
      </h3>

      {getUserNewPublications().map(publication => (
        <article
          className={`${styles.publicationList__item} ${styles.publication}`}
          key={publication.id}
        >
          <div className={styles.publication__userInfo}>
            <img 
              src={user.avatar}
              alt='User avatar'
              className={styles.publication__userAvatar}
            />
    
            <button className={styles.publication__likeBtn}>
              <span className={styles.publication__likeIcon}>
                <GetIcon id='like-icon' />
              </span>

              <span className={styles.publication__likesCounter}>
                {publication.likes}
              </span>
            </button>
          </div>
          
          <div className={styles.publication__text}>
            {publication.publication}
          </div>
        </article>
      ))}
    </section>
  );
};

export default PublicationList;
