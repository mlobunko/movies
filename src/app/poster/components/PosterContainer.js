import { connect } from 'react-redux';

import { getPoster } from '../selectors';
import PosterComponent from './PosterComponent';

const mapStateToProps = state => ({
  posterPath: getPoster(state)
});

export default connect(mapStateToProps)(PosterComponent);
