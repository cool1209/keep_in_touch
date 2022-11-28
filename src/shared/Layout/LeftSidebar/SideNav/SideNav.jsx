import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { setNoContactSelected } from "../../../../store/reducers/dialogsReducer";
import SideNavLink from './SideNavLink/SideNavLink';
import styles from './SideNav.module.scss';
import { getAuthUserId } from '../../../../store/selectors/authSelectors';

const SideNav = ({ authUserId, setNoContactSelected }) => {
  const links = [
    {
      path: '/home',
      name: 'Home',
      id: 'home-icon'
    },
    {
      path: '/messaging',
      name: 'Messaging',
      id: 'dialogs-icon'
    },
    {
      path: '/network',
      name: 'Network',
      id: 'network-icon'
    },
    {
      path: '/music',
      name: 'Music',
      id: 'music-icon'
    },
    {
      path: `/profile/${authUserId}`,
      name: 'Profile',
      id: 'profile-icon'
    }
  ];
  
  return (
    <nav className={styles.sidenav}>
      {links.map(link => (
        <SideNavLink
          key={link.id}
          link={link}
          onSetNoContactSelected={setNoContactSelected}
        />
      ))}
    </nav>
  );
};

const mapStateToProps = (state) => ({
  authUserId: getAuthUserId(state)
})

const mapStateToDispatch = {
  setNoContactSelected
};

export default compose(
  connect(mapStateToProps, mapStateToDispatch)
)(SideNav);
