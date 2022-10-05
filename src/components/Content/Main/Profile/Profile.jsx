import React from 'react';
import styles from './Profile.module.css';
import UserInfoContainer from './UserInfo/UserInfoContainer';
import NewUserPublicationContainer from './NewUserPublication/NewUserPublicationContainer';
import PublicationListContainer from './PublicationList/PublicationListContainer';

const Profile = () => {
  return (
    <section className={styles.profile}>
      <UserInfoContainer />
      
      <div className={styles.profile__publications}>
        <NewUserPublicationContainer/>
        <PublicationListContainer />
      </div>
    </section>
  );
};

export default Profile;
