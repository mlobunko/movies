import React from 'react';
import PropTypes from 'prop-types';

import Header from 'app/header/components';
import Backdrop from 'app/backdrop/components';
import Description from 'app/description/components';
import Poster from 'app/poster/components';
import SearchInput from 'app/searchInput/components';

import ErrorBoundary from './ErrorBoundary';
import { StyledMainComponent } from './styles';

export const MainComponent = ({ error }) => (
  <StyledMainComponent>
    <ErrorBoundary>
      <Header />
      {error ? (
        <h1 style={{ textAlign: 'center' }}>Something went wrong.</h1>
      ) : (
        <Backdrop>
          <SearchInput />
          <Poster />
          <Description />
        </Backdrop>
      )}
    </ErrorBoundary>
  </StyledMainComponent>
);

MainComponent.displayName = 'MainComponent';

export default MainComponent;

MainComponent.propTypes = {
  error: PropTypes.string
};
