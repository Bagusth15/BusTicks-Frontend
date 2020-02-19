import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import styles from './styles';

class Detail extends Component {
  state = {
    detail: this.props.navigation.state.params.detail_bus[0]
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
              <Text>Specification</Text>
              <Text>Seat capacity: {this.state.detail.total_seat}</Text>
              <Text>{this.state.detail.format_seat}</Text>
              <Text>{this.state.detail.price}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Detail;
