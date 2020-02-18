import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { connect } from 'react-redux';
import { ListItem } from 'react-native-elements';
import axios from 'axios';
import { API_HOST } from 'react-native-dotenv';

class Changepassword extends Component {
  static navigationOptions = {
    title: 'Change Password'
  };

  state = {
    old_password: '',
    new_password: '',
    confirm_password: ''
  };

  componentDidMount() {
    SplashScreen.hide();
  }

  handleInput = (input, type) => {
    this.setState({ [type]: input });
  };

  handleChange = id => {
    let body = {
      old_password: this.state.old_password,
      new_password: this.state.new_password,
      confirm_password: this.state.confirm_password
    };
    axios.put(`${API_HOST}/user/update/password/${id}`, body).then(response => {
      const { msg } = response.data;
      if (msg === undefined) {
        this.props.navigation.navigate('Editprofile');
        ToastAndroid.showWithGravityAndOffset(
          'Password Success Change',
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          0,
          100
        );
      } else {
        msg.map((item, index) => {
          ToastAndroid.showWithGravityAndOffset(
            item.error,
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            0,
            100
          );
        });
      }
    });
  };

  render() {
    return (
      <View>
        <View style={styles.containermid}>
          <ListItem
            rightIcon={{ name: 'edit', size: 18 }}
            bottomDivider
            title={
              <TextInput
                onChangeText={input => this.handleInput(input, 'old_password')}
                style={styles.inputedit}
                placeholder={'old password'}
                secureTextEntry
              />
            }
          />
          <ListItem
            rightIcon={{ name: 'edit', size: 18 }}
            bottomDivider
            title={
              <TextInput
                onChangeText={input => this.handleInput(input, 'new_password')}
                style={styles.inputedit}
                placeholder={'new password'}
                secureTextEntry
              />
            }
          />
          <ListItem
            rightIcon={{ name: 'edit', size: 18 }}
            bottomDivider
            title={
              <TextInput
                onChangeText={input =>
                  this.handleInput(input, 'confirm_password')
                }
                style={styles.inputedit}
                placeholder={'confirm password'}
                secureTextEntry
              />
            }
          />
          <TouchableOpacity
            onPress={() => this.handleChange(this.props.auth.data.id)}>
            <ListItem title={'Save Changes'} titleStyle={styles.titlesave} />
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

export default connect(mapStateProps)(Changepassword);

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
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 7,
    margin: 10,
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
