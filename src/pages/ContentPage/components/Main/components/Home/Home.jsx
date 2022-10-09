import React from 'react';
import GetIcon from '../../../../../../img/GetIcon';
import s from './Home.module.css';

const Home = ({ users, publications }) => {
  const getPublicationAutor = (userId) => (
    users.find(user => user.id === userId)
  ); 

  return (
    <div className={s.home}>
      <ul className={s.home__publications}>
        {publications.map(publication => (
          <li
            className={s.home__publication}
            key={publication.id}
          > 
            <div>
              <img 
                src={getPublicationAutor(publication.userId).avatar}
                alt='Publication author avatar'
                className={s.home__publicationAuthorAvatar}
              />

              <button className={s.home__likeBtn}>
                <span className={s.home__likeIcon}>
                  <GetIcon id='like-icon' />
                </span>

                <span className={s.home__likesCounter}>
                  {publication.likes}
                </span>
              </button>
            </div>

            <div className={s.home__publicationText}>
              <h3 className={s.home__publicationAuthor}>
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

export default Home;
