import React from 'react';

import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faUserCircle,
  faEnvelopeOpenText
} from '@fortawesome/free-solid-svg-icons';
import Regis from '../../Auth/Regis/Regis';
import Home from '../../App/Home';
import Account from '../../App/Account';
import Login from '../../Auth/Login';
import Schedule from '../../App/Schedule/SchedulePicker';
import SeatBus from '../Component/SeatPicker';
import History from '../../App/History/history';
import Detail from '../../App/Detail/Detail';

import Editprofile from '../../App/Editprofile/Editprofile';
import Changepassword from '../../Auth/ChangePassword/changepassword';
import Forgetpassword from '../../Auth/ForgetPassword/forgetpassword';
import Verification from '../../Auth/ForgetPassword/verificationpassword';

const AccountScreen = createStackNavigator({
  Account: {
    screen: Account
  },
  Login: {
    screen: Login
  },
  Regis: {
    screen: Regis
  },
  Editprofile: {
    screen: Editprofile
  },
  Changepassword: {
    screen: Changepassword
  },
  Forgetpassword: {
    screen: Forgetpassword
  },
  Verification: {
    screen: Verification
  }
});

const HistoryScreen = createStackNavigator({
  History: {
    screen: History
  }
});

const HomeScreen = createStackNavigator({
  Home: {
    screen: Home
  },
  Schedule: {
    screen: Schedule,
    navigationOptions: {
      headerShown: false
    }
  },
  Detail: {
    screen: Detail
  }
});

AccountScreen.navigationOptions = ({ navigation }) => {
  let tabBarVisible;
  if (navigation.state.routes.length > 1) {
    navigation.state.routes.map(route => {
      if (
        route.routeName === 'Login' ||
        route.routeName === 'Regis' ||
        route.routeName === 'Forgetpassword' ||
        route.routeName === 'Verification'
      ) {
        tabBarVisible = false;
      } else {
        tabBarVisible = true;
      }
    });
  }
  return {
    tabBarVisible
  };
};

export default createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <FontAwesomeIcon icon={faHome} color={tintColor} size={22} />
        )
      })
    },
    // Booking: {
    //   screen: SettingsScreen,
    //   navigationOptions: () => ({
    //     tabBarIcon: ({ tintColor }) => (
    //       <FontAwesomeIcon icon={faListAlt} color={tintColor} size={22} />
    //     )
    //   })
    // },
    Inbox: {
      screen: HistoryScreen,
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
