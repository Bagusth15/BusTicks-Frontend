import React from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import RNPicker from 'rn-modal-picker';
import { faCity } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import SplashScreen from 'react-native-splash-screen';
import styles from './styles';
import { connect } from 'react-redux';
import { getTerminal } from './action';

class Home extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
    this.props.dispatch(getTerminal());
  }
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      departure_id: '',
      arrival_id: '',
      departure_location: '',
      arrival_location: '',
      date: ''
    };
  }
  _selectedValue(index, item) {
    this.setState({ departure_id: item.id, departure_location: item.name });
  }
  _selectedValue2(index, item) {
    this.setState({ arrival_id: item.id, arrival_location: item.name });
  }

  onPress = () => {
    this.props.navigation.navigate('Schedule', { data_booking: this.state });
  };

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
                <RNPicker
                  dataSource={this.props.terminal.dataTerminal.data}
                  dummyDataSource={this.props.terminal.dataTerminal.data}
                  defaultValue={false}
                  showSearchBar={true}
                  disablePicker={false}
                  changeAnimation={'none'}
                  searchBarPlaceHolder={'Search.....'}
                  showPickerTitle={true}
                  searchBarContainerStyle={this.props.searchBarContainerStyle}
                  pickerStyle={Styles.pickerStyle}
                  pickerItemTextStyle={Styles.listTextViewStyle}
                  selectedLabel={this.state.departure_location}
                  placeHolderLabel={'Select from...'}
                  selectLabelTextStyle={Styles.selectLabelTextStyle}
                  placeHolderTextStyle={Styles.placeHolderTextStyle}
                  dropDownImageStyle={Styles.dropDownImageStyle}
                  selectedValue={(index, item) =>
                    this._selectedValue(index, item)
                  }
                />
              </View>
            </View>
            <View style={styles.itemList}>
              <View style={styles.itemListChild}>
                <FontAwesomeIcon icon={faCity} color={'#c3c4c6'} size={22} />
              </View>
              <View style={styles.itemListChild2}>
                <RNPicker
                  dataSource={this.props.terminal.dataTerminal.data}
                  dummyDataSource={this.props.terminal.dataTerminal.data}
                  defaultValue={false}
                  showSearchBar={true}
                  disablePicker={false}
                  changeAnimation={'none'}
                  searchBarPlaceHolder={'Search.....'}
                  showPickerTitle={true}
                  searchBarContainerStyle={this.props.searchBarContainerStyle}
                  pickerStyle={Styles.pickerStyle}
                  pickerItemTextStyle={Styles.listTextViewStyle}
                  selectedLabel={this.state.arrival_location}
                  placeHolderLabel={'Select to...'}
                  selectLabelTextStyle={Styles.selectLabelTextStyle}
                  placeHolderTextStyle={Styles.placeHolderTextStyle}
                  dropDownImageStyle={Styles.dropDownImageStyle}
                  selectedValue={(index, item) =>
                    this._selectedValue2(index, item)
                  }
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
                <DatePicker
                  style={styles.datePicker}
                  date={this.state.date} //initial date from state
                  mode="date" //The enum of date, datetime and time
                  placeholder="Select date"
                  format="YYYY-MM-DD"
                  minDate={new Date()}
                  // maxDate="01-01-2019"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    dateIcon: {
                      display: 'none'
                    },
                    dateInput: {
                      paddingLeft: 20,
                      borderWidth: 0,
                      alignItems: 'flex-start'
                    }
                  }}
                  onDateChange={date => {
                    this.setState({ date: date });
                  }}
                />
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

const mapStateToProps = state => {
  return {
    auth: state.auth,
    terminal: state.terminal
  };
};
export default connect(mapStateToProps)(Home);

const Styles = StyleSheet.create({
  searchBarContainerStyle: {
    marginBottom: 10,
    flexDirection: 'row',
    height: 40,
    shadowOpacity: 1.0,
    shadowRadius: 5,
    shadowOffset: {
      width: 1,
      height: 1
    },
    backgroundColor: 'rgba(255,255,255,1)',
    shadowColor: '#d3d3d3',
    borderRadius: 10,
    elevation: 3,
    marginLeft: 10,
    marginRight: 10
  },

  selectLabelTextStyle: {
    textAlign: 'left',
    width: '99%',
    padding: 10,
    flexDirection: 'row'
  },
  placeHolderTextStyle: {
    color: '#D3D3D3',
    padding: 10,
    textAlign: 'left',
    width: '99%',
    flexDirection: 'row',
    fontSize: 14
  },
  dropDownImageStyle: {
    marginLeft: 10,
    width: 10,
    height: 10,
    alignSelf: 'center'
  },
  listTextViewStyle: {
    color: '#000',
    marginVertical: 10,
    flex: 0.9,
    marginLeft: 20,
    marginHorizontal: 10,
    textAlign: 'left'
  },
  pickerStyle: {
    marginLeft: 18,
    paddingRight: 25,
    marginRight: 10,
    marginBottom: 2,
    shadowOpacity: 1.0,
    shadowOffset: {
      width: 1,
      height: 1
    },
    flexDirection: 'row'
  }
});
