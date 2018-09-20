import React from 'react';
import PropTypes from 'prop-types';

import { StyledBackdropComponent } from './styles';

export const BackdropComponent = props => (
  <StyledBackdropComponent {...props} />
);

BackdropComponent.displayName = 'BackdropComponent';

export default BackdropComponent;

BackdropComponent.propTypes = {
  backdropPath: PropTypes.string
};
