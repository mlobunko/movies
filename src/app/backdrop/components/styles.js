import styled from 'styled-components';

export const StyledBackdropComponent = styled.div`
  min-height: calc(100vh - 3rem);
  max-height: 100vh;
  background: ${props =>
    props.backdropPath &&
    `
    linear-gradient(
      rgba(0, 0, 0, 1),
      rgba(11, 11, 11, 0.8) 2%,
      rgba(11, 11, 11, 0.8) 98%,
      rgba(0, 0, 0, 1) 100%
    ),
    url(https://image.tmdb.org/t/p/original${
      props.backdropPath
    }) no-repeat center center / cover
    `};
`;

StyledBackdropComponent.displayName = 'StyledBackdropComponent';
