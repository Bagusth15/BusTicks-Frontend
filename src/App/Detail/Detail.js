import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';
import NumberFormat from 'react-number-format';
import styles from './styles';

class Detail extends Component {
  state = {
    detail: this.props.navigation.state.params.detail_bus[0]
  };

  onPress = () => {
    this.props.navigation.navigate('Booking');
  };

  render() {
    console.log(this.state.detail);
    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <View style={styles.content}>
            <View>
              <View>
                <Text style={styles.busname}>{this.state.detail.name}</Text>
              </View>
              <Text style={styles.spec}>Specification</Text>
              <View style={styles.col}>
                <View style={styles.row}>
                  <Text>Seat capacity</Text>
                </View>
                <View style={styles.row}>
                  <Text>{this.state.detail.total_seat}</Text>
                </View>
              </View>

              <View style={styles.col}>
                <View style={styles.row}>
                  <Text>Seat format</Text>
                </View>
                <View style={styles.row}>
                  <Text>{this.state.detail.format_seat}</Text>
                </View>
              </View>

              <View style={styles.col}>
                <View style={styles.row}>
                  <Text>Price per seat</Text>
                </View>
                <View style={styles.row}>
                  <NumberFormat
                    value={this.state.detail.price}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'Rp '}
                    renderText={value => (
                      <Text style={styles.price}>{value}</Text>
                    )}
                  />
                </View>
              </View>
            </View>
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

export default Detail;
