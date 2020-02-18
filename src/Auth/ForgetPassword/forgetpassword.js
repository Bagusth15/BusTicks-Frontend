import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { connect } from 'react-redux';
import { ListItem } from 'react-native-elements';
import axios from 'axios';
import { API_HOST } from 'react-native-dotenv';
import toast from '../../Public/Component/Toast';

class forget extends Component {
  static navigationOptions = {
    title: 'Forget Password'
  };

  state = {
    email: ''
  };

  componentDidMount() {
    SplashScreen.hide();
  }

  handleInput = (input, type) => {
    this.setState({ [type]: input });
  };

  handleForget = () => {
    let body = {
      email: this.state.email
    };
    axios.post(`${API_HOST}/auth/forgot`, body).then(response => {
      const { msg } = response.data;
      if (msg === undefined) {
        this.props.navigation.navigate('verification');
        toast('Check your verification code in your email');
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
            rightIcon={{ name: 'email', size: 18 }}
            title={
              <TextInput
                onChangeText={input => this.handleInput(input, 'email')}
                style={styles.inputedit}
                placeholder={'Email'}
              />
            }
          />
        </View>
        <View style={styles.containersubmit}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => this.handleForget()}>
            <View style={styles.buttonlogin}>
              <Text style={styles.textsubmitlogin}>SUBMIT</Text>
            </View>
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

export default connect(mapStateProps)(forget);

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
  textlogin: {
    fontSize: 14,
    margin: 5,
    padding: 5,
    marginRight: 25,
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
  buttonlogin: {
    marginBottom: 15,
    borderRadius: 30,
    backgroundColor: '#0091ff',
    padding: 10,
    alignItems: 'center'
  },
  containersubmit: {
    margin: 15
  },
  textsubmitlogin: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
