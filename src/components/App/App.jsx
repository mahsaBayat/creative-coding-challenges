import React from 'react';
import PropTypes from 'prop-types';

const App = props => <div>{props.message}</div>;

App.propTypes = {
    message: PropTypes.string.isRequired,
};

export default App;
