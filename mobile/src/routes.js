import { createAppContainer, createStackNavigator } from 'react-navigation';

import Login from './pages/Login';
import Main from './pages/Main';
import Type from './pages/Type';
import Size from './pages/Size';
import Cart from './pages/Cart';
import Order from './pages/Order';
import History from './pages/History';
import Signup from './pages/Signup';

const Routes = (userLogged = false) => createAppContainer(
  createStackNavigator(
    {
      Login,
      Main,
      Type,
      Size,
      Cart,
      Order,
      History,
      Signup,
    },
    {
      defaultNavigationOptions: {
        header: null,
      },
      initialRouteName: userLogged ? 'Main' : 'Login',
    },
  ),
);

export default Routes;
