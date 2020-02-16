import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  Text,
  ScrollView,
  Image,
  TextInput,
  ToastAndroid
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Icon from 'react-native-vector-icons';
import axios from 'axios';
import { connect } from 'react-redux';
import { API_HOST } from 'react-native-dotenv';
class Login extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  state = {
    name: '',
    email: '',
    username: '',
    password: '',
    confirm_password: ''
  };

  handleInput = (text, type) => {
    this.setState({ [type]: text });
  };

  handleSubmitRegis = () => {
    const { name, email, username, password, confirm_password } = this.state;
    const body = {
      name,
      email,
      username,
      password,
      confirm_password
    };
    axios
      .post(`${API_HOST}/auth/register`, body)
      .then(response => {
        if (response.status === 200) {
          this.props.navigation.navigate('Login');
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
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
            <ScrollView>
              <View style={styles.subheader3}>
                <View style={styles.welcometext}>
                  <Text style={styles.textwelcome}>
                    Register to start enjoy life travel
                  </Text>
                </View>
                <View style={styles.containerinput}>
                  <View style={styles.logininput}>
                    <TextInput
                      style={styles.inputs}
                      placeholder="Name"
                      onChangeText={text => this.handleInput(text, 'name')}
                    />
                  </View>
                  <View style={styles.logininput}>
                    <TextInput
                      style={styles.inputs}
                      placeholder="Email"
                      onChangeText={text => this.handleInput(text, 'email')}
                    />
                  </View>
                  <View style={styles.logininput}>
                    <TextInput
                      style={styles.inputs}
                      placeholder="Username"
                      onChangeText={text => this.handleInput(text, 'username')}
                    />
                  </View>
                  <View style={styles.logininput}>
                    <TextInput
                      style={styles.inputs}
                      placeholder="Password"
                      secureTextEntry
                      onChangeText={text => this.handleInput(text, 'password')}
                    />
                  </View>
                  <View style={styles.logininput}>
                    <TextInput
                      style={styles.inputs}
                      placeholder="Confirm Password"
                      secureTextEntry
                      onChangeText={text =>
                        this.handleInput(text, 'confirm_password')
                      }
                    />
                  </View>
                  <TouchableOpacity onPress={() => this.handleSubmitRegis()}>
                    <View style={styles.buttonregis}>
                      <Text style={styles.textsubmitlogin}>Register</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#0091ff'
  },
  background: {
    width: '100%',
    height: '100%'
  },
  header2: {
    flex: 0.3,
    // borderWidth: 2,
    padding: 20,
    alignItems: 'center'
  },
  image: {
    width: 250,
    height: 180
  },
  header3: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10
  },
  welcometext: {
    alignItems: 'flex-start',
    padding: 4
  },
  logininput: {
    borderWidth: 1.5,
    borderRadius: 15,
    paddingLeft: 5,
    marginTop: 12,
    height: 40,
    backgroundColor: '#f4f6f8'
  },
  buttonregis: {
    margin: 15,
    marginTop: 30,
    marginBottom: 10,
    borderRadius: 15,
    backgroundColor: '#0091ff',
    padding: 10,
    alignItems: 'center'
  },
  textsubmitlogin: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  textwelcome: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15
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
    flex: 0.7,
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40
  },
  subheader3: {
    padding: 16,
    marginBottom: 2
  },
  headforget: {
    alignItems: 'flex-start',
    left: 12,
    marginTop: 10
  }
});
