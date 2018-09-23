import { connect } from 'react-redux';

import { getErrorFromState } from 'app/searchInput/selectors';

import MainComponent from './MainComponent';

const mapStateToProps = state => ({
  error: getErrorFromState(state)
});

export default connect(mapStateToProps)(MainComponent);
