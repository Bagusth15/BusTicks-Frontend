'use strict';

import React, { useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native';
import { Card, ListItem, Button, Icon, Input } from 'react-native-elements';

import RNPickerSelect from 'react-native-picker-select';

import { faCity } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import SplashScreen from 'react-native-splash-screen';

import styles from './styles';
import DatePicker from '../../Public/components/DatePicker';

class Home extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  // constructor(props) {
  //   super(props);
  //   this.state = { chosenDate: new Date() };
  //   this.setDate = this.setDate.bind(this);
  // }
  // setDate(newDate) {
  //   this.setState({ chosenDate: newDate });
  // }

  render() {
    return (
      <View style={styles.wrapper}>
        <StatusBar backgroundColor="#0091ff" barStyle="light-content" />
        <View style={styles.header} />
        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.heading}>Choose Trip</Text>

            <View style={styles.itemList}>
              <View style={{ flex: 0.1, alignSelf: 'center' }}>
                <FontAwesomeIcon icon={faCity} color={'blue'} size={22} />
              </View>
              <View style={{ flex: 0.9 }}>
                <RNPickerSelect
                  onValueChange={value => console.log(value)}
                  placeholder={{
                    label: 'From...',
                    value: null,
                    color: '#c3c4c6'
                  }}
                  items={[
                    { label: 'Bogor', value: '1' },
                    { label: 'Bandung', value: '2' },
                    { label: 'Jakarta', value: '3' },
                    { label: 'Bogor', value: '4' },
                    { label: 'Bandung', value: '5' },
                    { label: 'Jakarta', value: '6' },
                    { label: 'Bogor', value: '6' },
                    { label: 'Bandung', value: '8' },
                    { label: 'Jakarta', value: '9' },
                    { label: 'Bogor', value: '10' },
                    { label: 'Bandung', value: '11' },
                    { label: 'Jakarta', value: '12' }
                  ]}
                />
              </View>
            </View>
            <View style={styles.itemList}>
              <View
                style={{
                  flex: 0.1,
                  alignSelf: 'center'
                }}>
                <FontAwesomeIcon icon={faCity} color={'blue'} size={22} />
              </View>
              <View style={{ flex: 0.9 }}>
                <RNPickerSelect
                  onValueChange={value => console.log(value)}
                  placeholder={{
                    label: 'To...',
                    value: null,
                    color: '#c3c4c6'
                  }}
                  items={[
                    { label: 'Bogor', value: '1' },
                    { label: 'Bandung', value: '2' },
                    { label: 'Jakarta', value: '3' }
                  ]}
                />
              </View>
            </View>
            <View style={styles.itemList}>
              <View
                style={{
                  flex: 0.1,
                  alignSelf: 'center'
                }}>
                <FontAwesomeIcon icon={faCity} color={'blue'} size={22} />
              </View>
              <View style={{ flex: 0.9 }}>
                <DatePicker />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export default Home;
