import React from 'react';
import s from './Profile.module.css';

import UserInfoContainer from './components/UserInfo/UserInfoContainer';
import NewPublicationContainer from './components/NewPublication/NewPublicationContainer';
import PublicationListContainer from './components/PublicationList/PublicationListContainer';

const Profile = () => {
  return (
    <section className={s.profile}>
      <UserInfoContainer />
      
      <div className={s.profile__publications}>
        <NewPublicationContainer/>
        <PublicationListContainer />
      </div>
    </section>
  );
};

export default Profile;
