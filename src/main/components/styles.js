import styled, { injectGlobal } from 'styled-components';

injectGlobal`
  html {
    background: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  *, *:before, *:after {
    box-sizing: border-box;
  }
`;

export const StyledMainComponent = styled.div``;

StyledMainComponent.displayName = 'StyledMainComponent';
