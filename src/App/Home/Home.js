import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { connect } from 'react-redux';

class Home extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  handleLogout = () => {
    this.props.setDataLogout();
    this.props.navigation.navigate('Auth');
  };

  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.handleLogout()}>
          <Text style={{ fontSize: 26, alignSelf: 'center', color: 'orange' }}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => ({
  setDataLogout: payload =>
    dispatch({
      type: 'POST_LOGOUT',
      payload
    })
});

export default connect(
  mapStateProps,
  mapDispatchToProps
)(Home);
