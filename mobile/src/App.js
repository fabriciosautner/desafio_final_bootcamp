import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import '~/config/ReactotronConfig';
import '~/config/DevToolsConfig';
import '~/config/StatusBarConfig';

import store from './store';

import createNavigator from '~/routes';
import { setNavigator } from './services/navigation';

export default class App extends Component {
  state = {
    userChecked: false,
    userLogged: false,
  };

  async componentDidMount() {
    const token = await AsyncStorage.getItem('@Pizza:token');

    this.setState({
      userChecked: true,
      userLogged: !!token,
    });
  }

  render() {
    const { userChecked, userLogged } = this.state;

    if (!userChecked) return null;

    const Routes = createNavigator(userLogged);

    return (
      <Provider store={store}>
        <Routes ref={setNavigator} />
      </Provider>
    );
  }
}
