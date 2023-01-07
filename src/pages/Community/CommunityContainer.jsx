import React from 'react';
import { compose } from 'redux';

import withAuthUser from '../../hocs/withAuthUser';
import withLayout from '../../hocs/withLayout';
import Community from './Community';

const CommunityContainer = () => <Community />

export default compose(
  withAuthUser,
  withLayout
)(CommunityContainer);
