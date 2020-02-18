import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image
} from 'react-native';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const datass = [
  {
    id_bus: 'Sinar Jaya',
    departure_location: 'Jakarta',
    departure_time: '18.00',
    arrival_location: 'Surabaya',
    arrival_time: '07.00'
  },
  {
    id_bus: 'Sinar Jaya',
    departure_location: 'Jakarta',
    departure_time: '18.00',
    arrival_location: 'Surabaya',
    arrival_time: '07.00'
  },
  {
    id_bus: 'Sinar Jaya',
    departure_location: 'Jakarta',
    departure_time: '18.00',
    arrival_location: 'Surabaya',
    arrival_time: '07.00'
  },
  {
    id_bus: 'Sinar Jaya',
    departure_location: 'Jakarta',
    departure_time: '18.00',
    arrival_location: 'Surabaya',
    arrival_time: '07.00'
  },
  {
    id_bus: 'Sinar Jaya',
    departure_location: 'Jakarta',
    departure_time: '18.00',
    arrival_location: 'Surabaya',
    arrival_time: '07.00'
  },
  {
    id_bus: 'Sinar Jaya',
    departure_location: 'Jakarta',
    departure_time: '18.00',
    arrival_location: 'Surabaya',
    arrival_time: '07.00'
  },
  {
    id_bus: 'Sinar Jaya',
    departure_location: 'Jakarta',
    departure_time: '18.00',
    arrival_location: 'Surabaya',
    arrival_time: '07.00'
  }
];

export default class Terminal extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <View style={styles.iconBack}>
            <FontAwesomeIcon icon={faArrowLeft} color={'#f4f6f8'} size={18} />
          </View>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={datass}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={styles.content}>
                <View style={styles.row}>
                  <Text style={styles.nameBus}>{item.id_bus}</Text>
                  <Text style={styles.price}>Rp.150.000</Text>
                </View>

                <View style={styles.col}>
                  <View style={styles.roadLabel}>
                    <Image
                      style={styles.roadImg}
                      source={require('../Assets/Image/road_min.png')}
                    />
                  </View>
                  <View style={styles.timeCol}>
                    <View style={styles.time}>
                      <Text style={styles.itemTime}>{item.departure_time}</Text>
                      <Text style={styles.itemTime}>{item.arrival_time}</Text>
                    </View>
                  </View>
                  <View style={styles.locationCol}>
                    <View style={styles.location}>
                      <Text style={styles.itemLoc}>
                        {item.departure_location}
                      </Text>
                      <Text style={styles.itemLoc}>
                        {item.arrival_location}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.colIcon}>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      color={'#c3c4c6'}
                      size={18}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,

    backgroundColor: '#f4f6f8'
  },
  header: {
    height: 60,
    backgroundColor: '#0091ff',
    elevation: 7,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    paddingBottom: 6,
    paddingTop: 6,
    alignItems: 'center'
  },
  iconBack: {
    flex: 0.1
  },
  content: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
    borderRadius: 15,

    display: 'flex',
    flexDirection: 'column',

    elevation: 7,

    backgroundColor: '#fff'
  },
  col: {
    flex: 1,
    flexDirection: 'row',
    height: 50
  },
  row: {
    flex: 1,

    paddingBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  roadLabel: {
    padding: 8,
    width: 20,
    alignItems: 'center'
  },
  roadImg: {
    width: 7,
    height: 32
  },
  timeCol: {
    flex: 0.2,
    justifyContent: 'center'
  },
  locationCol: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  colIcon: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  nameBus: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  price: {
    color: '#0091ff',
    fontWeight: 'bold'
  },
  itemTime: {
    paddingBottom: 6
  },
  itemLoc: {
    paddingBottom: 6
  }
});
