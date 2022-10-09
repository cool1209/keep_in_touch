import React from 'react';
import GetIcon from '../../../../../../../../img/GetIcon';
import s from './PublicationList.module.css';

const PublicationList = ({ user, publications }) => {
  const getUserNewPublications = () => (
    publications.filter(publication => publication.userId === user.id)
  );

  return (
    <section className={s.publicationList}>
      <h3 className={s.publicationList__title}>
        All my publications:
      </h3>

      {getUserNewPublications().map(publication => (
        <article
          className={`${s.publicationList__item} ${s.publication}`}
          key={publication.id}
        >
          <div className={s.publication__userInfo}>
            <img 
              src={user.avatar}
              alt='User avatar'
              className={s.publication__userAvatar}
            />
    
            <button className={s.publication__likeBtn}>
              <span className={s.publication__likeIcon}>
                <GetIcon id='like-icon' />
              </span>

              <span className={s.publication__likesCounter}>
                {publication.likes}
              </span>
            </button>
          </div>
          
          <div className={s.publication__text}>
            {publication.publication}
          </div>
        </article>
      ))}
    </section>
  );
};

export default PublicationList;
