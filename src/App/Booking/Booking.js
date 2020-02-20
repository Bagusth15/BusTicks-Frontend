import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Picker } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      no_identity: '',
      name: '',
      seat: ''
    };
  }
  handleInput = (input, type) => {
    this.setState({ [type]: input });
  };
  onPress = () => {
    const { no_identity, name, seat } = this.state;
    const item = {
      no_identity,
      name,
      seat
    };
    this.props.addBooking(item);
    this.props.navigation.navigate('Detail');
  };

  handleSeat = () => {
    this.props.navigation.navigate('Seat');
  };
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <View style={styles.content}>
            <TextInput
              onChangeText={input => this.handleInput(input, 'no_identity')}
              placeholder={'No Identity'}
            />
            <TextInput
              onChangeText={input => this.handleInput(input, 'name')}
              placeholder={'Name'}
            />
            <Text style={styles.titlePicker}>Seat Number</Text>
            <Picker
              style={styles.picker}
              selectedValue={this.state.seat}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ seat: itemValue })
              }>
              {[...Array(36)].map((x, i) => (
                <Picker.Item value={i + 1} label={`${i + 1}`} />
              ))}
            </Picker>
            <TouchableOpacity onPress={() => this.handleSeat()}>
              <Text style={styles.titleFormation}>Formation Seat</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.onPress()}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => ({
  addBooking: item =>
    dispatch({
      type: 'ADD_BOOKING_FULFILLED',
      item
    })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);
