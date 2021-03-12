import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { View, StatusBar } from 'react-native';
import store from './services/Redux/actions';

import Routes from './routes';

const App = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#333333" />
    <Provider store={store}>
      <View style={{ flex: 1 }} backgroundColor="#333333">
        <Routes />
      </View>
    </Provider>
  </NavigationContainer>
);

export default App;
