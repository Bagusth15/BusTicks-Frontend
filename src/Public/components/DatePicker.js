import React, { Component } from 'react';
import { DatePicker } from 'native-base';

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
    console.log(this.state.chosenDate.toString().substr(4, 12));
    return (
      <DatePicker
        locale={'en'}
        timeZoneOffsetInMinutes={undefined}
        modalTransparent={false}
        animationType={'fade'}
        androidMode={'default'}
        placeHolderText="Select date"
        textStyle={{ color: '#c3c4c6' }}
        placeHolderTextStyle={{ color: '#c3c4c6' }}
        onDateChange={this.setDate}
        disabled={false}
      />
    );
  }
}
