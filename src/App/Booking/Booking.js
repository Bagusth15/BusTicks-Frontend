import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

class Detail extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <View style={styles.content}>
            <View>
              <Text>Hello</Text>
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
