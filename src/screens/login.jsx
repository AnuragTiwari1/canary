// @flow
import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

const Login = () => {
  return <Text>Canary Nest</Text>;
};

export default connect((state: Object) => ({
  nav: state.nav,
}))(Login);
