import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from './App';
import { getCredentials } from '../../selectors/app';
// desctructuing because was not exported as default
import { submitSimpleForm } from '../../actions/app';

// mapStateToProps maps the entire redux state, into a set of props
// that the component is interested in
// return and empty object
const mapStateToProps = state => ({
    credentials: getCredentials(state),
});

// mapDispatchToProps binds actions to the Dispatcher, and returns them
// to the Props of a component
const mapDispatchToProps = (dispatch: any) => ({
    ...bindActionCreators(
        {
            submitSimpleForm,
        },
        dispatch
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
