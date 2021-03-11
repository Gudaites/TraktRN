import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import React from 'react';
import {View, StatusBar} from 'react-native';
import Trending from './pages/Trending';
import store from './services/Redux/actions';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#333333" />
      <View style={{flex: 1, backgroundColor: '#333333'}}>
        <Trending />
      </View>
    </Provider>
  );
};

export default App;
