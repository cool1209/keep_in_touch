import React, { useEffect } from 'react';
import server from '../../../../../../backend/server';
import GetIcon from '../../../../../../img/GetIcon';
import WithNoData from '../../../../../shared/WithNoData/WithNoData';
import styles from './Home.module.css';

const Home = ({ publications, setPublications }) => {
  useEffect(() => {
    server.get('server/api/publications/')
    .then((publications) => {
      setPublications(publications);
    });
  }, []);

  return (
    <div className={styles.home}>
      {publications.length
      ? <ul className={styles.home__publications}>
          {publications.map(publication => (
            <li
              className={styles.home__publication}
              key={publication.id}
            > 
              <div>
                <img 
                  src={publication.authorAvatar}
                  alt='Publication author avatar'
                  className={styles.home__publicationAuthorAvatar}
                />

                <button className={styles.home__likeBtn}>
                  <span className={styles.home__likeIcon}>
                    <GetIcon id='like-icon' />
                  </span>

                  <span className={styles.home__likesCounter}>
                    {publication.likes}
                  </span>
                </button>
              </div>

              <div className={styles.home__publicationText}>
                <h3 className={styles.home__publicationAuthor}>
                  {publication.author}:
                </h3>

                <p>
                  {publication.publication}
                </p>
              </div>
            </li>
          ))}
        </ul>

      : <WithNoData message={'Publications is loading...'} />
      }
    </div>
  );
};

export default Home;
