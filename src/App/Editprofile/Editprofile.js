import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
  ScrollView
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { connect } from 'react-redux';
import { ListItem, Icon } from 'react-native-elements';
import Moment from 'moment';
import ImagePicker from 'react-native-image-picker';
import getUser from '../Account/action';
import axios from 'axios';
import { API_HOST } from 'react-native-dotenv';
class Home extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  static navigationOptions = {
    title: 'Edit Profile'
  };
  constructor(props) {
    super(props);
    this.state = {
      filePath: {},
      name: '',
      email: '',
      username: ''
    };
  }
  chooseFile = () => {
    const options = {
      title: 'Select Image',
      quality: 1,
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
      } else if (response.error) {
      } else {
        let source = response;
        this.setState({
          filePath: source
        });
      }
    });
  };

  handleInput = (input, type) => {
    this.setState({ [type]: input });
  };

  handleEdit = id => {
    let body = new FormData();
    body.append('name', this.state.name);
    body.append('email', this.state.email);
    body.append('username', this.props.auth.data.username);
    body.append('image', {
      uri: this.state.filePath.uri,
      type: this.state.filePath.type,
      name: this.state.filePath.fileName
    });
    axios
      .put(`${API_HOST}/user/update/profile/${id}`, body)
      .then(response => {
        if (this.state.image === '') {
          ToastAndroid.showWithGravityAndOffset(
            'Select a image',
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            0,
            150
          );
        } else {
          const { msg } = response.data;
          if (msg === undefined) {
            this.props.navigation.navigate('Account');
            this.props.updateProfile(response.data.data);
          } else {
            msg.map((item, index) => {
              ToastAndroid.showWithGravity(
                item.error,
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM
              );
            });
          }
        }
      })
      .catch(() => {
        ToastAndroid.showWithGravity(
          'Cannot save change please check your filled',
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM
        );
      });
  };

  handlechangepassword = () => {
    this.props.navigation.navigate('Changepassword');
  };

  render() {
    return (
      <View>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.headercondition2}>
              <View style={styles.headertextcondition2}>
                <Text style={styles.information}>
                  {this.props.auth.data.name}
                </Text>
                <Text style={styles.email}>{this.props.auth.data.email}</Text>
                <Text style={styles.email}>
                  Join date: {''}
                  {''}
                  {Moment(this.props.auth.data.create_at).format(
                    'MMMM Do YYYY'
                  )}
                </Text>
              </View>
              <View style={styles.headeravatar}>
                <TouchableOpacity onPress={this.chooseFile}>
                  {this.props.auth.data.image === '' ? (
                    <Image
                      onChangeText={input => this.handleInput(input, 'image')}
                      source={
                        this.state.filePath.uri
                          ? this.state.filePath
                          : require('../../Public/Assets/Image/default_avatar.png')
                      }
                      style={styles.avatar}
                    />
                  ) : (
                    <Image
                      onChangeText={input => this.handleInput(input, 'image')}
                      source={
                        this.state.filePath.uri
                          ? this.state.filePath
                          : {
                              uri:
                                'http://localhost:3001/' +
                                this.props.auth.data.image
                            }
                      }
                      style={styles.avatar}
                    />
                  )}
                </TouchableOpacity>
              </View>
              <View style={styles.iconedit}>
                <Icon name="edit" type="material" />
              </View>
            </View>
            <View style={styles.containermid}>
              <ListItem
                rightIcon={{ name: 'edit', size: 18 }}
                bottomDivider
                title={
                  <TextInput
                    onChangeText={input => this.handleInput(input, 'name')}
                    style={styles.inputedit}
                    placeholder={'new name profile'}
                  />
                }
              />
              <ListItem
                rightIcon={{ name: 'edit', size: 18 }}
                bottomDivider
                title={
                  <TextInput
                    onChangeText={input => this.handleInput(input, 'email')}
                    style={styles.inputedit}
                    placeholder={'new email'}
                  />
                }
              />
              <TouchableOpacity
                onPress={() => this.handleEdit(this.props.auth.data.id)}>
                <ListItem
                  title={'Save Changes'}
                  titleStyle={styles.titlesave}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.containerend}>
              <TouchableOpacity onPress={() => this.handlechangepassword()}>
                <ListItem
                  titleStyle={styles.title}
                  title="Change Password"
                  chevron={styles.blackcode}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
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
  getAllUser: payload => dispatch(getUser(payload)),
  updateProfile: payload => dispatch({ type: 'UPDATE_DATA_PROFILE', payload })
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
    backgroundColor: 'white'
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60
  },
  headercondition2: {
    flexDirection: 'column-reverse',
    backgroundColor: '#ffff',
    marginBottom: 15,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 7
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
