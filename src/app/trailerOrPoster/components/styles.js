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

export const StyledTrailer = styled.iframe.attrs({
  src: props =>
    `https://www.youtube.com/embed/${props.trailerPath}?rel=0&amp;showinfo=0`,
  frameBorder: '0',
  allow: 'autoplay; encrypted-media',
  allowFullScreen: true
})`
  position: absolute;
  width: 100%;
  height: 100%;
`;

StyledTrailer.displayName = 'StyledTrailer';

export const StyledPosterContainer = styled.div`
  width: 90%;
  max-width: 320px;
  margin: 0 auto;
`;

StyledPosterContainer.displayName = 'StyledPosterContainer';

export const StyledTrailerContainer = styled.div`
  width: 90%;
  max-width: 640px;
  margin: 0 auto;
`;

StyledTrailerContainer.displayName = 'StyledTrailerContainer';

export const StyledPosterContent = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 150%;
`;

StyledPosterContent.displayName = 'StyledPosterContent';

export const StyledTrailerContent = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
`;

StyledTrailerContent.displayName = 'StyledTrailerContent';
