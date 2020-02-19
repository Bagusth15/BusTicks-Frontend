import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  Text,
  ScrollView,
  Image,
  TextInput
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { connect } from 'react-redux';
import axios from 'axios';
import qs from 'qs';
import { API_HOST } from 'react-native-dotenv';
import { Icon } from 'react-native-elements';
import toast from '../../Public/Component/Toast';
class Login extends Component {
  // static navigationOptions = { headerShown: false };
  componentDidMount() {
    SplashScreen.hide();
  }
  state = {
    username: '',
    password: ''
  };

  handleInput = (text, type) => {
    this.setState({ [type]: text });
  };

  handleLogin = () => {
    const { username, password } = this.state;
    const body = {
      username,
      password
    };
    axios
      .post(`${API_HOST}/auth/login/`, qs.stringify(body))
      .then(response => {
        const { msg } = response.data;
        if (msg === undefined) {
          this.props.navigation.navigate('Account');
          this.props.setDataLogin(response.data.data);
          toast('Success Login');
        } else {
          msg.map((item, index) => {
            toast(item.error);
          });
        }
      })
      .catch(() => {
        toast('Cannot login please check your username and password');
      });
  };

  handleRegis = () => {
    this.props.navigation.navigate('Regis');
  };
  handleforget = () => {
    this.props.navigation.navigate('Forgetpassword');
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <ImageBackground
            source={require('../../Public/Assets/Image/background4.jpg')}
            style={styles.background}>
            <View style={styles.header2}>
              <Image
                style={styles.image}
                source={require('../../Public/Assets/Image/pic2.png')}
              />
            </View>
            <View style={styles.subheader2}>
              <View style={styles.subheader3}>
                <View style={styles.welcometext}>
                  <Text style={styles.textwelcome}>
                    Login to enjoy faster booking, secure payment and easy go
                  </Text>
                </View>
                <View style={styles.containerinput}>
                  <View style={styles.logininput}>
                    <TextInput
                      style={styles.inputs}
                      placeholder="Username"
                      onChangeText={text => this.handleInput(text, 'username')}
                    />
                    <View style={styles.iconpass}>
                      <Icon name="person" type="material" />
                    </View>
                  </View>
                  <View style={styles.logininput}>
                    <TextInput
                      style={styles.inputs}
                      placeholder="Password"
                      secureTextEntry
                      onChangeText={text => this.handleInput(text, 'password')}
                    />
                    <View style={styles.iconpass}>
                      <Icon name="https" type="material" />
                    </View>
                  </View>
                  <View style={styles.containerforget}>
                    <TouchableOpacity onPress={() => this.handleforget()}>
                      <View style={styles.headforget}>
                        <Text style={styles.forget}>Forget the password?</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.containersubmit}>
                    <TouchableOpacity
                      activeOpacity={0.6}
                      onPress={() => this.handleLogin()}>
                      <View style={styles.buttonlogin}>
                        <Text style={styles.textsubmitlogin}>LOGIN</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.header3}>
                  <Text style={styles.account}>Don't have an account?</Text>
                  <TouchableOpacity onPress={() => this.handleRegis()}>
                    <Text style={styles.register}>{''} REGISTER</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    );
  }
}

const mapStateProps = state => {
  return {
    auth: state.auth,
    historybook: state.history
  };
};

const mapDispatchToProps = dispatch => ({
  setDataLogin: payload =>
    dispatch({
      type: 'POST_LOGIN_FULFILLED',
      payload
    })
});

export default connect(
  mapStateProps,
  mapDispatchToProps
)(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#0091ff'
  },
  iconpass: {
    position: 'absolute',
    right: 15,
    top: 10
  },
  background: {
    width: '100%',
    height: '100%'
  },
  header2: {
    alignItems: 'center',
    margin: 5
  },
  image: {
    width: 300,
    height: 250
  },
  header3: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    padding: 5
  },
  welcometext: {
    alignItems: 'flex-start'
  },
  logininput: {
    borderRadius: 30,
    paddingHorizontal: 12,
    marginTop: 16,
    backgroundColor: 'white',
    elevation: 5
  },
  buttonlogin: {
    marginTop: 16,
    marginBottom: 15,
    borderRadius: 30,
    backgroundColor: '#0091ff',
    padding: 10,
    alignItems: 'center'
  },
  containersubmit: {
    margin: 10
  },
  textsubmitlogin: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  textwelcome: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14
  },
  forget: {
    color: '#0091ff',
    fontWeight: 'bold',
    fontSize: 12
  },
  inputs: {
    fontSize: 15
  },
  register: {
    color: '#0091ff',
    alignSelf: 'center'
  },
  account: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 12
  },
  subheader2: {
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40
  },
  subheader3: {
    marginTop: 15,
    margin: 5,
    padding: 20
  },
  headforget: {
    alignItems: 'flex-end',
    marginTop: 10,
    padding: 5
  },
  containerforget: {
    margin: 5
  }
});
