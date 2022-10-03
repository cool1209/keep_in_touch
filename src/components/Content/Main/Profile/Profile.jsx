import React from 'react';
import styles from './Profile.module.css';
import CurrentUserPublication from './CurrentUserPublication/CurrentUserPublication';
import PublicationList from './PublicationList/PublicationList';
import UserInfo from './UserInfo/UserInfo';

const Profile = ({ state, store }) => {
  const user = state.users.currentUser;
  const publications = state.publications.publications;
  const newPublicationText = state.publications.newPublicationText;
  const getUserPublications = () => (
    publications.filter(publication => publication.userId === user.id)
  );

  return (
    <section className={styles.profile}>
      <UserInfo user={user} store={store} />
      
      <div className={styles.profile__publications}>
        <CurrentUserPublication
          newPublicationText ={newPublicationText}
          user={user}
          store={store}
        />

        <PublicationList
          user={user}
          publications={getUserPublications()}
        />
      </div>
    </section>
  );
};

export default Profile;
