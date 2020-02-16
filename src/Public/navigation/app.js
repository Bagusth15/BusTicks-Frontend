import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { MultiBar, MultiBarToggle } from 'react-native-multibar';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faTicketAlt,
  faUserCircle,
  faListAlt,
  faInbox,
  faEnvelope,
  faEnvelopeSquare,
  faEnvelopeOpen,
  faEnvelopeOpenText
} from '@fortawesome/free-solid-svg-icons';

import Icon from 'react-native-vector-icons/FontAwesome';

import Home from '../../App/Home';
class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
        <Icon name="area-chart" size={20} color={'#0091FF'} />
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <FontAwesomeIcon icon={faHome} color={tintColor} size={22} />
        )
      })
    },
    Booking: {
      screen: SettingsScreen,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <FontAwesomeIcon icon={faListAlt} color={tintColor} size={22} />
        )
      })
    },
    Inbox: {
      screen: SettingsScreen,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <FontAwesomeIcon
            icon={faEnvelopeOpenText}
            color={tintColor}
            size={22}
          />
        )
      })
    },
    Account: {
      screen: SettingsScreen,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <FontAwesomeIcon icon={faUserCircle} color={tintColor} size={22} />
        )
      })
    }
  },
  {
    tabBarOptions: {
      showLabel: false, // hide labels
      activeTintColor: '#0091FF', // active icon color
      inactiveTintColor: '#c3c4c6', // inactive icon color
      style: {
        backgroundColor: '#FFFFFF' // TabBar background
      }
    }
  }
);
export default createAppContainer(TabNavigator);
