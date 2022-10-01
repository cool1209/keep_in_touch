import React from 'react';
import styles from './Profile.module.css';
import CurrentUserPublication from './CurrentUserPublication/CurrentUserPublication';
import PublicationList from './PublicationList/PublicationList';
import UserInfo from './UserInfo/UserInfo';
import getCurrentUserData from '../../../../functions/user-data';

const Profile = ({ store }) => {
  const state = store.getState();
  const {
    user,
    publicationsPage
  } = getCurrentUserData(state);

  return (
    <section className={styles.profile}>
      <UserInfo store={store} />
      
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
