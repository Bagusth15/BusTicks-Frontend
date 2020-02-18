import { Component } from 'react';
import { connect } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

class index extends Component {
  componentDidMount() {
    SplashScreen.hide();
    if (this.props.auth.data.token) {
      this.props.navigation.navigate('App');
    } else {
      this.props.navigation.navigate('App');
    }
  }

  render() {
    return null;
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};
export default connect(mapStateToProps)(index);
