import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import App from './app';
import Auth from './auth';
import Main from '../main';

const switchNavigator = createSwitchNavigator(
  {
    Auth,
    Main,
    App
  },
  {
    initialRouteName: 'Auth'
  }
);

export default createAppContainer(switchNavigator);
