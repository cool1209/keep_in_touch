import React from 'react';
import { compose } from 'redux';

import withAuthUser from '../../hocs/withAuthUser';
import withLayout from '../../hocs/withLayout';
import Music from './Music';

const MusicContainer = () => <Music />

export default compose(
  withAuthUser,
  withLayout
)(MusicContainer);
