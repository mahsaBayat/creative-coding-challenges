import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMessage } from '../selectors/app';

export const App = props => <div>{props.message}</div>;

App.propTypes = {
  message: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  message: getMessage(state),
});

export default connect(mapStateToProps)(App);
