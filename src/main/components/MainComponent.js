import React from 'react';
import PropTypes from 'prop-types';

import Header from 'app/header/components';
import Backdrop from 'app/backdrop/components';
import Description from 'app/description/components';
import Poster from 'app/poster/components';

import ErrorBoundary from './ErrorBoundary';

export const MainComponent = ({ error }) => (
  <ErrorBoundary>
    <Header />
    {error ? (
      <h1 style={{ textAlign: 'center' }}>Something went wrong.</h1>
    ) : (
      <Backdrop>
        <Poster />
        <Description />
      </Backdrop>
    )}
  </ErrorBoundary>
);

MainComponent.displayName = 'MainComponent';

export default MainComponent;

MainComponent.propTypes = {
  error: PropTypes.string
};
