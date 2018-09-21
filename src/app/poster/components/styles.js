import styled from 'styled-components';

export const StyledPoster = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${props => `url(https://image.tmdb.org/t/p/original${
    props.posterPath
  })
    no-repeat center center / cover`};
`;

StyledPoster.displayName = 'StyledPoster';

export const StyledPosterContainer = styled.div`
  width: 90%;
  max-width: 320px;
  margin: 0 auto;
`;

StyledPosterContainer.displayName = 'StyledPosterContainer';

export const StyledPosterContent = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 150%;
`;

StyledPosterContent.displayName = 'StyledPosterContent';
