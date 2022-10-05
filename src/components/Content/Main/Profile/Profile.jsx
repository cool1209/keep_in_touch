import React from 'react';
import styles from './Profile.module.css';
import UserInfoContainer from './UserInfo/UserInfoContainer';
import UserNewPublicationContainer from './UserNewPublication/UserNewPublicationContainer';
import PublicationListContainer from './PublicationList/PublicationListContainer';

const Profile = () => {
  return (
    <section className={styles.profile}>
      <UserInfoContainer />
      
      <div className={styles.profile__publications}>
        <UserNewPublicationContainer/>
        <PublicationListContainer />
      </div>
    </section>
  );
};

export default Profile;
