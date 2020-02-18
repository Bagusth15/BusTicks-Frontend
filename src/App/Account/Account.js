import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { connect } from 'react-redux';
import { ListItem, Icon } from 'react-native-elements';
class Home extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  handleLogin = () => {
    this.props.navigation.navigate('Login');
  };
  handleRegister = () => {
    this.props.navigation.navigate('Regis');
  };

  handleLogout = () => {
    this.props.setDataLogout();
    this.props.navigation.navigate('Account');
  };

  handleEditprofile = () => {
    this.props.navigation.navigate('Editprofile');
  };

  render() {
 

    return (
      <View>
        <View style={styles.container}>
          {this.props.auth.data.token === undefined ? (
            <View style={styles.header1}>
              <Text style={styles.textheaderlogin}>
                Login to menage your journey
              </Text>
              <View style={styles.headerlogin}>
                <TouchableOpacity onPress={() => this.handleLogin()}>
                  <Text style={styles.textlogin}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.handleRegister()}>
                  <Text style={styles.textregis}>REGISTER</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View style={styles.headercondition2}>
              <TouchableOpacity onPress={() => this.handleEditprofile()}>
                <View style={styles.icon1}>
                  <Icon
                    name={'keyboard-arrow-right'}
                    type="material"
                    size={20}
                  />
                </View>
              </TouchableOpacity>
              <View style={styles.headertextcondition2}>
                <Text style={styles.information}>
                  {this.props.auth.data.name}
                </Text>
                <Text style={styles.email}>{this.props.auth.data.email}</Text>
                <Text style={styles.titleinfo}>
                  {this.props.auth.data.status === 1 ? 'member' : 'member'}
                </Text>
              </View>
              <View style={styles.headeravatar}>
                {this.props.auth.data.image === '' ? (
                  <Image
                    source={require('../../Public/Assets/Image/default_avatar.png')}
                    style={styles.avatar}
                  />
                ) : (
                  <Image
                    source={{
                      uri: 'http://localhost:3001/' + this.props.auth.data.image
                    }}
                    style={styles.avatar}
                  />
                )}
              </View>
            </View>
          )}
          <View style={styles.containermid}>
            <ListItem
              titleStyle={styles.title}
              bottomDivider
              title="My Journey"
              chevron={styles.blackcode}
            />
            <ListItem
              titleStyle={styles.title}
              title="About Us"
              chevron={styles.blackcode}
            />
          </View>
          {this.props.auth.data.token === undefined ? null : (
            <View style={styles.containerend}>
              <TouchableOpacity onPress={() => this.handleLogout()}>
                <ListItem
                  titleStyle={styles.title}
                  title="Logout"
                  chevron={styles.blackcode}
                />
              </TouchableOpacity>
            </View>
          )}
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

const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontSize: 14
  },
  icon1: {
    padding: 6
  },
  container: {
    margin: 2,
    padding: 16
  },
  headeravatar: {
    borderRadius: 60,
    backgroundColor: 'white',
    position: 'absolute',
    right: 20,
    borderWidth: 2
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 50
  },
  headercondition2: {
    flexDirection: 'row-reverse',
    backgroundColor: '#ffff',
    marginBottom: 15,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 7
  },
  headertextcondition2: {
    marginRight: 15,
    padding: 10
  },
  information: {
    fontSize: 18,
    color: 'black',
    marginBottom: 10
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
    elevation: 7
  },
  containerend: {
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 25,
    elevation: 7
  }
});
