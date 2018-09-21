import React from 'react';

import Header from 'app/header/components';
import Backdrop from 'app/backdrop/components';
import Description from 'app/description/components';
import Poster from 'app/poster/components';
import { StyledMainComponent } from './styles';

export const MainComponent = () => (
  <StyledMainComponent>
    <Header />
    <Backdrop>
      <Poster />
      <Description />
    </Backdrop>
  </StyledMainComponent>
);

MainComponent.displayName = 'MainComponent';

export default MainComponent;
