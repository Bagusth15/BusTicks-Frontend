import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Moment from 'moment';
import NumberFormat from 'react-number-format';
import historybooks from './action';

class History extends Component {
  componentDidMount() {
    this.props.dispatch(historybooks(this.props.auth.data.id));
  }
  state = {
    filterModal: false,
    sortModal: false
  };
  render() {
    let data = [];
    if (this.props.historybook.data.data === undefined) {
      data = [];
    } else {
      data = this.props.historybook.data.data.data;
    }
    return (
      <ScrollView>
        <View style={styles.wrapper}>
          <View style={styles.header} />
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={({ item }) => {
              return (
                <View style={styles.content}>
                  <View style={styles.row}>
                    <Text style={styles.nameBus}> No:{item.invoice}</Text>
                    <NumberFormat
                      value={item.total_price}
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'Rp'}
                      renderText={value => (
                        <Text style={styles.price}>{value}</Text>
                      )}
                    />
                  </View>
                  <View>
                    <Text>{item.email}</Text>
                    <Text>payment: {item.payment_status}</Text>
                    <Text>
                      Booking date: {Moment(item.create_at).format('D/MM/Y')}
                    </Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    historybook: state.history
  };
};

export default connect(mapStateToProps)(History);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#f4f6f8'
  },
  textmodal: {
    color: 'black',
    fontSize: 14
  },
  textmodalsort: {
    fontSize: 16,
    color: 'black'
  },
  arrivalmodal: {
    marginTop: 15
  },
  reset: {
    marginTop: 5,
    marginBottom: 5
  },
  texttitlemodal: {
    color: 'black',
    fontSize: 16,
    alignSelf: 'center'
  },
  modallistitem: {
    marginTop: 5
  },
  modalfilter: {
    height: 40
  },
  headcontentmodals: {
    height: 30,
    marginTop: 10
  },
  headtitle: {
    padding: 3,
    flex: 0.3,
    marginRight: 5
  },
  iconfilter: {
    position: 'absolute',
    right: 15
  },
  iconsort: {
    position: 'absolute',
    right: 50
  },
  iconsearch: {
    position: 'absolute',
    top: 8,
    left: 8
  },
  titletext: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold'
  },
  textinput: {
    borderRadius: 30,
    paddingLeft: 30,
    fontSize: 15,
    backgroundColor: '#f4f6f8',
    color: 'black'
  },
  containerinput: {
    flex: 0.8,
    marginHorizontal: 10,
    margin: 3,
    marginLeft: 5
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
