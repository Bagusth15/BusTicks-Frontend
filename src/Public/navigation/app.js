import { createStackNavigator } from 'react-navigation-stack';
import Home from '../../App/Home';
import Account from '../../App/Account';
import Login from '../../Auth/Login';
import Regis from '../../Auth/Regis/Regis';
import Editprofile from '../../App/Editprofile';
import Changepassword from '../../Auth/ChangePassword';
import forget from '../../Auth/ForgetPassword/forgetpassword';
import verification from '../../Auth/ForgetPassword//verificationpassword';

export default createStackNavigator({
  Home,
  Account,
  Editprofile,
  Changepassword,
  Login,
  Regis,
  forget,
  verification
});
