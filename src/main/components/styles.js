import styled, { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    background: black
  }
`;

export const StyledMainComponent = styled.div`
  background: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
`;

StyledMainComponent.displayName = 'StyledMainComponent';
