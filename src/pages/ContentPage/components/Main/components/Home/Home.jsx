import React from 'react';
import GetIcon from '../../../../../../img/GetIcon';
import IsLoading from '../../../../../shared/IsLoading/IsLoading';
import styles from './Home.module.css';

const Home = ({ users, publications }) => {
  const getPublicationAutor = (userId) => (
    users.find(user => user.id === userId)
  ); 

  return (
    <div className={styles.home}>
      {publications.length > 0
        ?<ul className={styles.home__publications}>
          {publications.map(publication => (
            <li
              className={styles.home__publication}
              key={publication.id}
            > 
              <div>
                <img 
                  src={getPublicationAutor(publication.userId).avatar}
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
                  {getPublicationAutor(publication.userId).nickname}:
                </h3>

                <p>
                  {publication.publication}
                </p>
              </div>
            </li>
          ))}
        </ul>

        : <IsLoading text={'Publications is loading...'} />
      }
    </div>
  );
};

export default Home;
