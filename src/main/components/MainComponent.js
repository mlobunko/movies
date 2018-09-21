import React from 'react';

import Header from 'app/header/components';
import Backdrop from 'app/backdrop/components';
import Description from 'app/description/components';
import TrailerOrPoster from 'app/trailerOrPoster/components';
import { StyledMainComponent } from './styles';

export const MainComponent = () => (
  <StyledMainComponent>
    <Header />
    <Backdrop>
      <TrailerOrPoster />
      <Description />
    </Backdrop>
  </StyledMainComponent>
);

MainComponent.displayName = 'MainComponent';

export default MainComponent;
