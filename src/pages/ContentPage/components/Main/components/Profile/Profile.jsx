import React from 'react';
import styles from './Profile.module.css';

import UserInfoContainer from './components/UserInfo/UserInfoContainer';
import NewPublicationContainer from './components/NewPublication/NewPublicationContainer';
import PublicationListContainer from './components/PublicationList/PublicationListContainer';

const Profile = () => {
  return (
    <section className={styles.profile}>
      <UserInfoContainer />
      
      <div className={styles.profile__publications}>
        <NewPublicationContainer/>
        <PublicationListContainer />
      </div>
    </section>
  );
};

export default Profile;
