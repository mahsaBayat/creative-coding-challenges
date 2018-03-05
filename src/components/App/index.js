import { connect } from 'react-redux';
import App from './App';
import { getMessage } from '../../selectors/app';

const mapStateToProps = state => ({
    message: getMessage(state),
});

export default connect(mapStateToProps)(App);
