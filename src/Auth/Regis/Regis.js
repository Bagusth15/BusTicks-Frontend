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
import axios from 'axios';
import { connect } from 'react-redux';
import { API_HOST } from 'react-native-dotenv';
import toast from '../../Public/Component/Toast';
import { Icon } from 'react-native-elements';
class Login extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  static navigationOptions = {
    title: 'Registration'
  };
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
        const { msg } = response.data;
        if (msg === undefined) {
          this.props.navigation.navigate('Login');
          toast('Success Registration');
        } else {
          msg.map((item, index) => {
            toast(item.error);
          });
        }
      })
      .catch(() => {
        toast('Please check all column must filled');
      });
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
                    <View style={styles.iconpass}>
                      <Icon name="person" type="material" />
                    </View>
                  </View>
                  <View style={styles.logininput}>
                    <TextInput
                      style={styles.inputs}
                      placeholder="Email"
                      onChangeText={text => this.handleInput(text, 'email')}
                    />
                    <View style={styles.iconpass}>
                      <Icon name="email" type="material" />
                    </View>
                  </View>
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
                  <View style={styles.logininput}>
                    <TextInput
                      style={styles.inputs}
                      placeholder="Confirm Password"
                      secureTextEntry
                      onChangeText={text =>
                        this.handleInput(text, 'confirm_password')
                      }
                    />
                    <View style={styles.iconpass}>
                      <Icon name="https" type="material" />
                    </View>
                  </View>
                  <TouchableOpacity onPress={() => this.handleSubmitRegis()}>
                    <View style={styles.buttonregis}>
                      <Text style={styles.textsubmitlogin}>Register</Text>
                    </View>
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

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(Login);

const styles = StyleSheet.create({
  container: {
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
    margin: 10
  },
  image: {
    width: 250,
    height: 180
  },
  welcometext: {
    alignItems: 'flex-start',
    padding: 4
  },
  logininput: {
    borderRadius: 30,
    paddingHorizontal: 12,
    marginTop: 10,
    backgroundColor: 'white',
    elevation: 7
  },
  buttonregis: {
    marginBottom: 30,
    marginTop: 20,
    borderRadius: 30,
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
  inputs: {
    fontSize: 15
  },
  register: {
    color: '#0091ff',
    alignSelf: 'center'
  },
  subheader2: {
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 10
  },
  subheader3: {
    padding: 18
  },
  headforget: {
    alignItems: 'flex-start',
    left: 12,
    marginTop: 10
  }
});
