import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
  TextInput
} from 'react-native';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { getScheduled } from './action';
import { connect } from 'react-redux';
import Moment from 'moment';
import NumberFormat from 'react-number-format';
import { Icon, ListItem } from 'react-native-elements';
import Modal, { ModalContent, ModalTitle } from 'react-native-modals';

class Terminal extends Component {
  componentDidMount() {
    this.props.dispatch(getScheduled());
  }
  state = {
    filterModal: false,
    sortModal: false,
    dataBooking: this.props.navigation.state.params.data_booking
  };

  changeSearch = text => {
    const config = {
      params: {
        searcNameBus: text
      }
    };
    this.props.dispatch(getScheduled(config));
  };

  handleReset = () => {
    this.props.dispatch(getScheduled());
  };

  handlehome = () => {
    this.props.navigation.navigate('Home');
  };

  handledeparturefilter = id => {
    const config = {
      params: {
        searchTimeDeparture: id
      }
    };
    this.props.dispatch(getScheduled(config));
  };

  handlearrivalfilter = id => {
    const config = {
      params: {
        searchTimeArrival: id
      }
    };
    this.props.dispatch(getScheduled(config));
  };

  handlesort = query => {
    const config = {
      params: {
        sort: query
      }
    };
    this.props.dispatch(getScheduled(config));
  };

  handleSchedule = () => {
    this.props.navigation.navigate('SeatBus');
  };

  render() {
    let data = [];
    if (this.props.getSchedule.data.data === undefined) {
      data = [];
    } else {
      data = this.props.getSchedule.data.data.data.result;
    }
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <View style={styles.iconfilter}>
            <TouchableOpacity
              onPress={() => this.setState({ filterModal: true })}>
              <Icon name="ios-funnel" type="ionicon" color="white" />
            </TouchableOpacity>
          </View>
          <Modal.BottomModal
            visible={this.state.filterModal}
            onTouchOutside={() => {
              this.setState({ filterModal: false });
            }}
            height={0.6}
            width={1}
            onSwipeOut={() => this.setState({ filterModal: false })}
            modalTitle={<ModalTitle title="Filter" hasTitleBar />}>
            <ModalContent style={styles.modalfilter}>
              <View style={styles.reset}>
                <TouchableOpacity onPress={() => this.handleReset()}>
                  <ListItem
                    subtitle={'Show All'}
                    subtitleStyle={styles.texttitlemodal}
                    bottomDivider
                  />
                </TouchableOpacity>
              </View>
              <ListItem
                subtitle={'Departure Time'}
                subtitleStyle={styles.texttitlemodal}
              />
              <View style={styles.headcontentmodals}>
                <TouchableOpacity
                  onPress={() => this.handledeparturefilter('1')}>
                  <View>
                    <ListItem
                      subtitle={'00:00 - 06:00'}
                      bottomDivider
                      subtitleStyle={styles.textmodal}
                    />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.handledeparturefilter('2')}>
                  <View style={styles.modallistitem}>
                    <ListItem
                      subtitle={'00:06 - 12:00'}
                      bottomDivider
                      subtitleStyle={styles.textmodal}
                    />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.handledeparturefilter('3')}>
                  <View style={styles.modallistitem}>
                    <ListItem
                      subtitle={'12:00 - 18:00'}
                      bottomDivider
                      subtitleStyle={styles.textmodal}
                    />
                  </View>
                </TouchableOpacity>
                <View style={styles.arrivalmodal}>
                  <ListItem
                    subtitle={'Arrival Time'}
                    subtitleStyle={styles.texttitlemodal}
                  />
                </View>
                <TouchableOpacity onPress={() => this.handlearrivalfilter('1')}>
                  <View>
                    <ListItem
                      subtitle={'00:00 - 06:00'}
                      bottomDivider
                      subtitleStyle={styles.textmodal}
                    />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.handlearrivalfilter('2')}>
                  <View style={styles.modallistitem}>
                    <ListItem
                      subtitle={'00:06 - 12:00'}
                      bottomDivider
                      subtitleStyle={styles.textmodal}
                    />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.handlearrivalfilter('3')}>
                  <View style={styles.modallistitem}>
                    <ListItem
                      subtitle={'12:00 - 18:00'}
                      bottomDivider
                      subtitleStyle={styles.textmodal}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </ModalContent>
          </Modal.BottomModal>

          <View style={styles.iconsort}>
            <TouchableOpacity
              onPress={() => {
                this.setState({ sortModal: true });
              }}>
              <Icon name="sort" type="material" color="white" />
            </TouchableOpacity>
          </View>

          <Modal.BottomModal
            visible={this.state.sortModal}
            onTouchOutside={() => {
              this.setState({ sortModal: false });
            }}
            height={0.6}
            width={1}
            onSwipeOut={() => this.setState({ sortModal: false })}
            modalTitle={<ModalTitle title="Sort By" hasTitleBar />}>
            <ModalContent>
              <View>
                <TouchableOpacity onPress={() => this.handlesort('price')}>
                  <View>
                    <ListItem
                      subtitle={'Lowest Price'}
                      bottomDivider
                      subtitleStyle={styles.textmodalsort}
                    />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.handlesort('departure_time')}>
                  <View style={styles.modallistitem}>
                    <ListItem
                      subtitle={'Earliest departure time'}
                      bottomDivider
                      subtitleStyle={styles.textmodalsort}
                    />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.handlesort('arrival_time')}>
                  <View style={styles.modallistitem}>
                    <ListItem
                      subtitle={'Earliest arrival time'}
                      bottomDivider
                      subtitleStyle={styles.textmodalsort}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </ModalContent>
          </Modal.BottomModal>

          <View style={styles.containerinput}>
            <TextInput
              placeholder="Search Bus..."
              style={styles.textinput}
              onChangeText={text => this.changeSearch(text)}
            />
            <View style={styles.iconsearch}>
              <Icon name="ios-search" type="ionicon" />
            </View>
          </View>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => this.handleSchedule()}
                style={styles.content}>
                <View style={styles.row}>
                  <Text style={styles.nameBus}>{item.name}</Text>
                  <NumberFormat
                    value={item.price}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'Rp'}
                    renderText={value => (
                      <Text style={styles.price}>{value}</Text>
                    )}
                  />
                </View>
                <View style={styles.col}>
                  <View style={styles.roadLabel}>
                    <Image
                      style={styles.roadImg}
                      source={require('../../Public/Assets/Image/road_min.png')}
                    />
                  </View>
                  <View style={styles.timeCol}>
                    <View style={styles.time}>
                      <Text style={styles.itemTime}>
                        {Moment(item.departure_time).format('HH:mm')}
                      </Text>
                      <Text style={styles.itemTime}>
                        {Moment(item.arrival_time).format('HH:mm')}
                      </Text>
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

const mapStateToProps = state => {
  return {
    auth: state.auth,
    getSchedule: state.schedule
  };
};

export default connect(mapStateToProps)(Terminal);

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
