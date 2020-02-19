import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';
import NumberFormat from 'react-number-format';
import styles from './styles';
import toast from '../../Public/Component/Toast';
import { API_HOST } from 'react-native-dotenv';
import axios from 'axios';

class Detail extends Component {
  state = {
    detail: this.props.navigation.state.params.detail_bus[0],
    id_schedule: this.props.navigation.state.params.id_schedule
  };

  onPress = () => {
    this.props.navigation.navigate('Booking');
  };

  onPressSubmit = () => {
    let dataAuth = this.props.auth.data;
    if (dataAuth === undefined || dataAuth === null || dataAuth.length === 0) {
      this.props.navigation.navigate('Login');
      toast('Please login !');
    } else {
      const body = {
        id_user: this.props.auth.data.id,
        id_schedule: this.state.id_schedule,
        booking: this.props.booking.data
      };
      axios
        .post(`${API_HOST}/booking`, body)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  onPressDeleteList = item => {
    this.props.deleteBooking(item);
  };

  render() {
    const data = this.props.booking.data;
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
            <Text style={styles.buttonText}>Order Seat</Text>
          </TouchableOpacity>
          <FlatList
            data={data}
            style={{
              paddingHorizontal: 10,
              paddingTop: 10
            }}
            keyExtractor={item => item.no_identity}
            renderItem={({ item, index }) => {
              return (
                <View style={styles.contentList}>
                  <View style={styles.ListContainer}>
                    <Text style={styles.busname}>{item.no_identity}</Text>
                  </View>
                  <View style={styles.ListContainer}>
                    <Text style={styles.busname}>{item.name}</Text>
                  </View>
                  <View style={styles.ListContainer}>
                    <Text style={styles.busname}>Seat: {item.seat}</Text>
                  </View>
                  <View style={styles.ListContainer}>
                    <TouchableOpacity
                      onPress={() => this.onPressDeleteList(item)}>
                      <Icon name="delete" type="material" />
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
          />
          {data.length > 0 ? (
            <TouchableOpacity
              hidden={true}
              style={styles.button2}
              onPress={() => this.onPressSubmit()}>
              <Text style={styles.buttonText}>Booking</Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    booking: state.booking
  };
};
const mapDispatchToProps = dispatch => ({
  deleteBooking: item =>
    dispatch({
      type: 'DELETE_BOOKING_FULFILLED',
      item
    })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);
