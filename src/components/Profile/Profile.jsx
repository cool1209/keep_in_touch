import React from 'react';
import styles from './Profile.module.css';
import MyPublication from './MyPublication/MyPublication';
import PublicationList from './PublicationList/PublicationList';
import UserInfo from './UserInfo/UserInfo';

const Profile = () => {
  return (
    <main className={styles.profile}>
      <UserInfo />
      
      <div className={styles.publications}>
        <MyPublication />
        <PublicationList />
      </div>
    </main>
  );
};

export default Profile;
