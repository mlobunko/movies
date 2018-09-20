import { connect } from 'react-redux';

import BackdropComponent from './BackdropComponent';
import { getAll } from '../selectors';

const mapStateToProps = state => ({
  backdropPath: getAll(state)
});

export default connect(mapStateToProps)(BackdropComponent);
