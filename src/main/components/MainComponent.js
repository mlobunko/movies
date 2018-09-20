import React from 'react';

import Header from 'app/header/components';
import Backdrop from 'app/backdrop/components';
import { StyledMainComponent } from './styles';

export const MainComponent = () => (
  <StyledMainComponent>
    <Header />
    <Backdrop />
  </StyledMainComponent>
);

MainComponent.displayName = 'MainComponent';

export default MainComponent;
