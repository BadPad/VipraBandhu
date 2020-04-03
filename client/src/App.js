import React from 'react';
import { AsyncStorage, StatusBar } from 'react-native';
import Navigation from './components/Navigation/Navigation';

import { Provider } from 'react-redux';
import store from './store';

import { setCurrentUser } from './redux/actions/authActions';

AsyncStorage.getItem('SukalpaSeva')
.then(res => {
  store.dispatch(setCurrentUser(parseInt(res)));
})
.catch(err => {
  console.log(err)
})

function App() {
  return (
    <>
    <StatusBar barStyle = "light-content" backgroundColor="#d42425"/>
    <Provider store={ store }>
      <Navigation />
    </Provider>
      </>    

  )
}

export default App;