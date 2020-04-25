import React from 'react';
import { AsyncStorage, StatusBar } from 'react-native';
import Navigation from './components/Navigation/Navigation';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';

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
    <Provider store={ store }>
      <StatusBar barStyle = "light-content" backgroundColor="#d42425"/>
      <PersistGate loading={null} persistor={persistor} >
        <Navigation />
      </PersistGate>
    </Provider>
  )
}

export default App;