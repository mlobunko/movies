import styled from 'styled-components';

export const StyledBackdropComponent = styled.div`
  min-height: calc(100vh - 3rem);
  max-height: 100vh;
  background: ${props =>
    props.backdropPath &&
    `
    linear-gradient(
      rgba(60, 60, 60, 0.8),
      rgba(60, 60, 60, 0.8)
    ),
    url(https://image.tmdb.org/t/p/original${
      props.backdropPath
    }) no-repeat center center / cover`};
`;

StyledBackdropComponent.displayName = 'StyledBackdropComponent';
