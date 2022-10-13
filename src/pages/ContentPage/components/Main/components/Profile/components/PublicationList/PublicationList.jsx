import React, { useEffect } from 'react';
import server from '../../../../../../../../backend/server';
import GetIcon from '../../../../../../../../img/GetIcon';
import styles from './PublicationList.module.css';

const PublicationList = ({
  publications,
  setUserPublications,
  user
}) => {
  useEffect(() => {
    server.get('server/api/user-publications/' + user.id)
    .then(publications => {
      setUserPublications(publications);
    })
  }, []);

  return (
    <section className={styles.publicationList}>
      <h3 className={styles.publicationList__title}>
        All my publications:
      </h3>

      <div className={styles.publicationList__inner}>
        {publications.map(publication => (
          <article
            className={`${styles.publicationList__item} ${styles.publication}`}
            key={publication.id}
          >
            <div className={styles.publication__userInfo}>
              <img 
                src={publication.authorAvatar}
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
      </div>
    </section>
  );
};

export default PublicationList;
