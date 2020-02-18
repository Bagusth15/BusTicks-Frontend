import React, { Component } from 'react';
import { DatePicker } from 'native-base';
import { StyleSheet } from 'react-native';

export default class DatePickerr extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  render() {
    // console.log(this.state.chosenDate.toString().substr(4, 12));
    return (
      <DatePicker
        locale={'en'}
        timeZoneOffsetInMinutes={undefined}
        modalTransparent={false}
        animationType={'fade'}
        androidMode={'default'}
        placeHolderText="Select date"
        textStyle={styles.color}
        placeHolderTextStyle={styles.color}
        onDateChange={this.setDate}
        disabled={false}
      />
    );
  }
}

const styles = StyleSheet.create({
  color: {
    color: '#c3c4c6'
  }
});
