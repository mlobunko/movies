import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledPoster,
  StyledPosterContainer,
  StyledPosterContent
} from './styles';

export const PosterComponent = ({ posterPath }) => (
  <StyledPosterContainer>
    <StyledPosterContent>
      <StyledPoster posterPath={posterPath} />
    </StyledPosterContent>
  </StyledPosterContainer>
);

PosterComponent.displayName = 'PosterComponent';

export default PosterComponent;

PosterComponent.propTypes = {
  posterPath: PropTypes.string
};
