import { createStackNavigator } from 'react-navigation-stack';
import Home from '../../App/Home';
import Account from '../../App/Account';
import Login from '../../Auth/Login';
import Regis from '../../Auth/Regis/Regis';
import Editprofile from '../../App/Editprofile';
import Changepassword from '../../Auth/ChangePassword';

export default createStackNavigator({
  Home,
  Account,
  Editprofile,
  Changepassword,
  Login,
  Regis
});
