import React from 'react';
import { AsyncStorage, StatusBar } from 'react-native';
import FlashMessage from "react-native-flash-message";
import Navigation from './components/Navigation/Navigation';
import setAuthToken from './components/Reusable_Component/setAuthToken';
import {App_Top_Color} from './components/Reusable_Component/ConstantValues';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';

import { setCurrentUserType, setCustomerUser, setPurohitUser, setCookUser } from './redux/actions/authActions';

AsyncStorage.getItem('SukalpaSeva')
.then(res => {
  if(res) {
    // console.log(res)
    const sukalpaSevaToken = JSON.parse(res);
    const { ss_auth, ss_user } = sukalpaSevaToken;
    setAuthToken(ss_auth)
    store.dispatch(setCurrentUserType(ss_user))
    if(ss_user === 'customer') {
      store.dispatch(setCustomerUser());
    } else if(ss_user === 'purohit') {
      store.dispatch(setPurohitUser());
    } else if(ss_user === 'cook') {
      store.dispatch(setCookUser())
    }
  }
})
.catch(err => {
  console.log(err)
})

function App() {
  return (
    <Provider store={ store }>
      <StatusBar barStyle = "light-content" backgroundColor={App_Top_Color}/>
      <PersistGate loading={null} persistor={persistor} >
        <Navigation />
      </PersistGate>
      <FlashMessage position="top" floating />
    </Provider>
  )
}

export default App;