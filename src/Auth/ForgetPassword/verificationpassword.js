import React, { Component } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { connect } from 'react-redux';
import { ListItem } from 'react-native-elements';
import axios from 'axios';
import { API_HOST } from 'react-native-dotenv';
import toast from '../../Public/Component/Toast';

class verification extends Component {
  static navigationOptions = {
    title: 'Reset Password'
  };

  state = {
    password: '',
    confirm_password: '',
    key_user: ''
  };

  componentDidMount() {
    SplashScreen.hide();
  }

  handleInput = (input, type) => {
    this.setState({ [type]: input });
  };

  handleReset = () => {
    let body = {
      password: this.state.password,
      confirm_password: this.state.confirm_password,
      key_user: this.state.key_user
    };
    axios.put(`${API_HOST}/auth/reset/`, body).then(response => {
      const { msg } = response.data;
      if (msg === undefined) {
        toast('Password Success Reset');
        this.props.navigation.navigate('Login');
      } else {
        msg.map((item, index) => {
          toast(item.error);
        });
      }
    });
  };

  render() {
    return (
      <View>
        <View style={styles.containermid}>
          <ListItem
            rightIcon={{ name: 'https', size: 18 }}
            bottomDivider
            title={
              <TextInput
                onChangeText={input => this.handleInput(input, 'password')}
                style={styles.inputedit}
                placeholder={'New Password'}
                secureTextEntry
              />
            }
          />
          <ListItem
            rightIcon={{ name: 'https', size: 18 }}
            bottomDivider
            title={
              <TextInput
                onChangeText={input =>
                  this.handleInput(input, 'confirm_password')
                }
                style={styles.inputedit}
                placeholder={'Confirm New Password'}
                secureTextEntry
              />
            }
          />
          <ListItem
            rightIcon={{ name: 'vpn-key', size: 18 }}
            bottomDivider
            title={
              <TextInput
                onChangeText={input => this.handleInput(input, 'key_user')}
                style={styles.inputedit}
                placeholder={'Verification Code'}
              />
            }
          />
          <TouchableOpacity onPress={() => this.handleReset()}>
            <ListItem title={'Reset Password'} titleStyle={styles.titlesave} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateProps)(verification);

const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontSize: 14
  },
  titlesave: {
    color: 'black',
    fontSize: 14,
    alignSelf: 'center'
  },
  icon1: {
    padding: 6
  },
  iconedit: {
    left: 40,
    bottom: 25,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: 'white'
  },
  inputedit: {
    padding: 2
  },
  container: {
    margin: 2,
    padding: 16
  },
  headeravatar: {
    borderRadius: 60,
    backgroundColor: 'white',
    borderWidth: 2
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 90
  },
  headercondition2: {
    flexDirection: 'column-reverse',
    backgroundColor: '#ffff',
    marginBottom: 15,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 7,
    borderWidth: 2
  },
  headertextcondition2: {
    marginRight: 2,
    padding: 10,
    alignItems: 'center'
  },
  information: {
    fontSize: 18,
    color: 'black',
    marginBottom: 2
  },
  blackcode: {
    color: 'black'
  },
  email: {
    color: 'black',
    fontSize: 12
  },
  titleinfo: {
    color: 'black',
    marginTop: 2
  },
  header1: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 15,
    elevation: 7
  },
  headerlogin: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center'
  },
  textheaderlogin: {
    fontSize: 16,
    color: 'black'
  },
  textlogin: {
    fontSize: 14,
    margin: 5,
    padding: 5,
    marginRight: 25,
    color: '#0091ff'
  },
  textregis: {
    fontSize: 14,
    margin: 5,
    padding: 5,
    color: '#0091ff'
  },
  containermid: {
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 7,
    margin: 16,
    marginTop: 20
  },
  containerend: {
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 25,
    elevation: 7
  }
});
