import React from 'react';
import { connect } from 'react-redux';
import { getMessage } from '../selectors/app';

const App = props => <div>{props.message}</div>;

const mapStateToProps = state => ({
  message: getMessage(state),
});

export default connect(mapStateToProps)(App);
