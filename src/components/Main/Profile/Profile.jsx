import React from 'react';
import styles from './Profile.module.css';
import MyPublication from './MyPublication/MyPublication';
import PublicationList from './PublicationList/PublicationList';
import UserInfo from './UserInfo/UserInfo';

const Profile = ({ store }) => {
  const state = store.getState();
  const { users, publicationsPage  } = state;

  return (
    <section className={styles.profile}>
      <UserInfo users={users} />
      
      <div className={styles.publications}>
        <MyPublication
          newPublicationText ={publicationsPage.newPublicationText}
          dispatch={store.dispatch.bind(store)}
        />

        <PublicationList
          publications={publicationsPage.publications}
        />
      </div>
    </section>
  );
};

export default Profile;
