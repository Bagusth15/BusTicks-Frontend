import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faUserCircle,
  faListAlt,
  faEnvelopeOpenText
} from '@fortawesome/free-solid-svg-icons';

import Regis from '../../Auth/Regis/Regis';
import Home from '../../App/Home';
import Account from '../../App/Account';
import Login from '../../Auth/Login';
import SchedulePicker from '../Component/SchedulePicker';
import TerminalPicker from '../Component/TerminalPicker';
class SettingsScreen extends React.Component {
  render() {
    return <SchedulePicker />;
  }
}
class TerminalScreen extends React.Component {
  render() {
    return <TerminalPicker />;
  }
}

const AccountScreen = createStackNavigator({
  Account: {
    screen: Account
  },
  Login: {
    screen: Login,
    navigationOptions: () => ({
      tabBarVisible: false
    })
  },
  Regis: {
    screen: Regis
  }
});

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
      screen: TerminalScreen,
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
    Accounts: {
      screen: AccountScreen,
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

export default createAppContainer(TabNavigator, AccountScreen);
