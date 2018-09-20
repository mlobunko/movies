import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledPoster,
  StyledTrailer,
  StyledTrailerContainer,
  StyledPosterContainer,
  StyledTrailerContent,
  StyledPosterContent
} from './styles';

export const TrailerOrPosterComponent = ({ posterPath, trailerPath }) => (
  <React.Fragment>
    {trailerPath ? (
      <StyledTrailerContainer>
        <StyledTrailerContent>
          <StyledTrailer trailerPath={trailerPath} />
        </StyledTrailerContent>
      </StyledTrailerContainer>
    ) : posterPath ? (
      <StyledPosterContainer>
        <StyledPosterContent>
          <StyledPoster posterPath={posterPath} />
        </StyledPosterContent>
      </StyledPosterContainer>
    ) : null}
  </React.Fragment>
);

TrailerOrPosterComponent.displayName = 'TrailerOrPosterComponent';

export default TrailerOrPosterComponent;

TrailerOrPosterComponent.propTypes = {
  posterPath: PropTypes.string,
  trailerPath: PropTypes.string
};
