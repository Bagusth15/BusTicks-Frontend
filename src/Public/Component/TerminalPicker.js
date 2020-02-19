import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  TextInput
} from 'react-native';
import {
  faArrowRight,
  faCity,
  faArrowLeft
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const datass = [
  {
    id: 2,
    name: 'Bandung',
    id_city: 2,
    location:
      'Jl. Leuwi Panjang Gg. Panyileukan, Kopo, Kec. Bojongloa Kaler, Kota Bandung, Jawa Barat 40233',
    status: 1,
    create_at: '2020-02-15T02:27:43.000Z',
    update_at: '2020-02-15T02:27:43.000Z'
  },
  {
    id: 1,
    name: 'Bogor',
    id_city: 1,
    location:
      'Jl. Manggis VI, Baranangsiang, Kec. Bogor Tim., Kota Bogor, Jawa Barat 16143',
    status: 1,
    create_at: '2020-02-15T02:27:43.000Z',
    update_at: '2020-02-15T02:27:43.000Z'
  },
  {
    id: 6,
    name: 'Depok',
    id_city: 6,
    location:
      'Jl. Jatijajar 1 No.04, Jatijajar, Kec. Tapos, Kota Depok, Jawa Barat 16451',
    status: 1,
    create_at: '2020-02-16T12:24:43.000Z',
    update_at: '2020-02-16T12:24:43.000Z'
  },
  {
    id: 5,
    name: 'Bekasi',
    id_city: 5,
    location:
      'Jl. Ir. H. Juanda, Margahayu, Kec. Bekasi Tim., Kota Bks, Jawa Barat',
    status: 1,
    create_at: '2020-02-16T12:24:29.000Z',
    update_at: '2020-02-16T12:24:29.000Z'
  },
  {
    id: 3,
    name: 'Jakarta',
    id_city: 3,
    location:
      ' Jl. Kyai Tapa No.1 RT.1/RW.5, Grogol, Grogol, Kec. Grogol petamburan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11450',
    status: 1,
    create_at: '2020-02-16T12:24:16.000Z',
    update_at: '2020-02-16T12:24:16.000Z'
  },
  {
    id: 4,
    name: 'Tangerang',
    id_city: 4,
    location:
      'Jl. Benteng Betawi, Poris Plawad, Kec. Tangerang, Kota Tangerang, Banten 15141',
    status: 1,
    create_at: '2020-02-16T12:24:16.000Z',
    update_at: '2020-02-16T12:24:16.000Z'
  },
  {
    id: 2,
    name: 'Bandung',
    id_city: 2,
    location:
      'Jl. Leuwi Panjang Gg. Panyileukan, Kopo, Kec. Bojongloa Kaler, Kota Bandung, Jawa Barat 40233',
    status: 1,
    create_at: '2020-02-15T02:27:43.000Z',
    update_at: '2020-02-15T02:27:43.000Z'
  },
  {
    id: 1,
    name: 'Bogor',
    id_city: 1,
    location:
      'Jl. Manggis VI, Baranangsiang, Kec. Bogor Tim., Kota Bogor, Jawa Barat 16143',
    status: 1,
    create_at: '2020-02-15T02:27:43.000Z',
    update_at: '2020-02-15T02:27:43.000Z'
  },
  {
    id: 6,
    name: 'Depok',
    id_city: 6,
    location:
      'Jl. Jatijajar 1 No.04, Jatijajar, Kec. Tapos, Kota Depok, Jawa Barat 16451',
    status: 1,
    create_at: '2020-02-16T12:24:43.000Z',
    update_at: '2020-02-16T12:24:43.000Z'
  },
  {
    id: 5,
    name: 'Bekasi',
    id_city: 5,
    location:
      'Jl. Ir. H. Juanda, Margahayu, Kec. Bekasi Tim., Kota Bks, Jawa Barat',
    status: 1,
    create_at: '2020-02-16T12:24:29.000Z',
    update_at: '2020-02-16T12:24:29.000Z'
  },
  {
    id: 3,
    name: 'Jakarta',
    id_city: 3,
    location:
      ' Jl. Kyai Tapa No.1 RT.1/RW.5, Grogol, Grogol, Kec. Grogol petamburan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11450',
    status: 1,
    create_at: '2020-02-16T12:24:16.000Z',
    update_at: '2020-02-16T12:24:16.000Z'
  },
  {
    id: 4,
    name: 'Tangerang',
    id_city: 4,
    location:
      'Jl. Benteng Betawi, Poris Plawad, Kec. Tangerang, Kota Tangerang, Banten 15141',
    status: 1,
    create_at: '2020-02-16T12:24:16.000Z',
    update_at: '2020-02-16T12:24:16.000Z'
  },
  {
    id: 2,
    name: 'Bandung',
    id_city: 2,
    location:
      'Jl. Leuwi Panjang Gg. Panyileukan, Kopo, Kec. Bojongloa Kaler, Kota Bandung, Jawa Barat 40233',
    status: 1,
    create_at: '2020-02-15T02:27:43.000Z',
    update_at: '2020-02-15T02:27:43.000Z'
  },
  {
    id: 1,
    name: 'Bogor',
    id_city: 1,
    location:
      'Jl. Manggis VI, Baranangsiang, Kec. Bogor Tim., Kota Bogor, Jawa Barat 16143',
    status: 1,
    create_at: '2020-02-15T02:27:43.000Z',
    update_at: '2020-02-15T02:27:43.000Z'
  },
  {
    id: 6,
    name: 'Depok',
    id_city: 6,
    location:
      'Jl. Jatijajar 1 No.04, Jatijajar, Kec. Tapos, Kota Depok, Jawa Barat 16451',
    status: 1,
    create_at: '2020-02-16T12:24:43.000Z',
    update_at: '2020-02-16T12:24:43.000Z'
  },
  {
    id: 5,
    name: 'Bekasi',
    id_city: 5,
    location:
      'Jl. Ir. H. Juanda, Margahayu, Kec. Bekasi Tim., Kota Bks, Jawa Barat',
    status: 1,
    create_at: '2020-02-16T12:24:29.000Z',
    update_at: '2020-02-16T12:24:29.000Z'
  },
  {
    id: 3,
    name: 'Jakarta',
    id_city: 3,
    location:
      ' Jl. Kyai Tapa No.1 RT.1/RW.5, Grogol, Grogol, Kec. Grogol petamburan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11450',
    status: 1,
    create_at: '2020-02-16T12:24:16.000Z',
    update_at: '2020-02-16T12:24:16.000Z'
  },
  {
    id: 4,
    name: 'Tangerang',
    id_city: 4,
    location:
      'Jl. Benteng Betawi, Poris Plawad, Kec. Tangerang, Kota Tangerang, Banten 15141',
    status: 1,
    create_at: '2020-02-16T12:24:16.000Z',
    update_at: '2020-02-16T12:24:16.000Z'
  },
  {
    id: 2,
    name: 'Bandung',
    id_city: 2,
    location:
      'Jl. Leuwi Panjang Gg. Panyileukan, Kopo, Kec. Bojongloa Kaler, Kota Bandung, Jawa Barat 40233',
    status: 1,
    create_at: '2020-02-15T02:27:43.000Z',
    update_at: '2020-02-15T02:27:43.000Z'
  },
  {
    id: 1,
    name: 'Bogor',
    id_city: 1,
    location:
      'Jl. Manggis VI, Baranangsiang, Kec. Bogor Tim., Kota Bogor, Jawa Barat 16143',
    status: 1,
    create_at: '2020-02-15T02:27:43.000Z',
    update_at: '2020-02-15T02:27:43.000Z'
  },
  {
    id: 6,
    name: 'Depok',
    id_city: 6,
    location:
      'Jl. Jatijajar 1 No.04, Jatijajar, Kec. Tapos, Kota Depok, Jawa Barat 16451',
    status: 1,
    create_at: '2020-02-16T12:24:43.000Z',
    update_at: '2020-02-16T12:24:43.000Z'
  },
  {
    id: 5,
    name: 'Bekasi',
    id_city: 5,
    location:
      'Jl. Ir. H. Juanda, Margahayu, Kec. Bekasi Tim., Kota Bks, Jawa Barat',
    status: 1,
    create_at: '2020-02-16T12:24:29.000Z',
    update_at: '2020-02-16T12:24:29.000Z'
  },
  {
    id: 3,
    name: 'Jakarta',
    id_city: 3,
    location:
      ' Jl. Kyai Tapa No.1 RT.1/RW.5, Grogol, Grogol, Kec. Grogol petamburan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11450',
    status: 1,
    create_at: '2020-02-16T12:24:16.000Z',
    update_at: '2020-02-16T12:24:16.000Z'
  },
  {
    id: 4,
    name: 'Tangerang',
    id_city: 4,
    location:
      'Jl. Benteng Betawi, Poris Plawad, Kec. Tangerang, Kota Tangerang, Banten 15141',
    status: 1,
    create_at: '2020-02-16T12:24:16.000Z',
    update_at: '2020-02-16T12:24:16.000Z'
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

          <TextInput
            style={styles.searchBox}
            onChangeText={text => this.updateSearch(text)}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Search..."
            keyboardType="search"
            placeholderTextColor="#484848"
          />
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={datass}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={styles.content}>
                <View style={styles.col}>
                  <View style={styles.iconCity}>
                    <FontAwesomeIcon
                      icon={faCity}
                      color={'#c3c4c6'}
                      size={18}
                    />
                  </View>
                  <View style={styles.terminal}>
                    <Text>{item.name}</Text>
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
  searchBox: {
    padding: 5,
    borderRadius: 15,
    color: '#606060',
    paddingLeft: 20,
    backgroundColor: '#f4f6f8',
    flex: 0.9
  },
  content: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    padding: 15,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 15,
    flexDirection: 'column',
    elevation: 4,
    backgroundColor: '#fff'
  },
  col: {
    flex: 1,
    flexDirection: 'row'
  },
  terminal: {
    flex: 0.92,
    justifyContent: 'center'
  },
  colIcon: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  iconCity: {
    flex: 0.15,
    justifyContent: 'center'
  }
});
