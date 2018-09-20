import { connect } from 'react-redux';

import { getPoster, getTrailer } from '../selectors';
import TrailerOrPosterComponent from './TrailerOrPosterComponent';

const mapStateToProps = state => ({
  posterPath: getPoster(state),
  trailerPath: getTrailer(state)
});

export default connect(mapStateToProps)(TrailerOrPosterComponent);
