import React from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';

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

  render() {
    return (
      <View style={styles.wrapper}>
        <StatusBar backgroundColor="#0091ff" barStyle="light-content" />
        <View style={styles.header} />
        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.heading}>Choose Trip</Text>

            <View style={styles.itemList}>
              <View style={styles.itemListChild}>
                <FontAwesomeIcon icon={faCity} color={'#c3c4c6'} size={22} />
              </View>
              <View style={styles.itemListChild2}>
                <RNPickerSelect
                  // onValueChange={value => console.log(value)}
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
                    { label: 'Jakarta', value: '6' }
                  ]}
                />
              </View>
            </View>
            <View style={styles.itemList}>
              <View style={styles.itemListChild}>
                <FontAwesomeIcon icon={faCity} color={'#c3c4c6'} size={22} />
              </View>
              <View style={styles.itemListChild2}>
                <RNPickerSelect
                  // onValueChange={value => console.log(value)}
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
          </View>

          {/* second */}

          <View style={styles.content}>
            <Text style={styles.heading}>Choose Date</Text>
            <View style={styles.itemList}>
              <View style={styles.itemListChild}>
                <FontAwesomeIcon icon={faCity} color={'#c3c4c6'} size={22} />
              </View>
              <View style={styles.itemListChild2}>
                <DatePicker />
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default Home;
