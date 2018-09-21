import { connect } from 'react-redux';

import { getAll } from '../selectors';
import DescriptionComponent from './DescriptionComponent';

const mapStateToProps = state => getAll(state);

export default connect(mapStateToProps)(DescriptionComponent);
