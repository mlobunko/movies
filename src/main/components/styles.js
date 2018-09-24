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

export const StyledContent = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  width: 90%;
  max-width: 1200px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

StyledContent.displayName = 'StyledContent';

export const StyledMainComponent = styled.div``;

StyledMainComponent.displayName = 'StyledMainComponent';
