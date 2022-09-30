import React from 'react';
import styles from './Profile.module.css';
import CurrentUserPublication from './CurrentUserPublication/CurrentUserPublication';
import PublicationList from './PublicationList/PublicationList';
import UserInfo from './UserInfo/UserInfo';

const Profile = ({ store }) => {
  const state = store.getState().currentUser;
  const { user, publicationsPage  } = state;

  return (
    <section className={styles.profile}>
      <UserInfo user={user} />
      
      <div className={styles.profile__publications}>
        <CurrentUserPublication
          newPublicationText ={publicationsPage.newPublicationText}
          dispatch={store.dispatch.bind(store)}
        />

        <PublicationList
          user={user}
          publications={publicationsPage.publications}
        />
      </div>
    </section>
  );
};

export default Profile;
