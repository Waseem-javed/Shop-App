import React, {useState, useEffect, useMemo} from 'react';
import { View, ActivityIndicator } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import TabsNavigation from './navigations/MainNavigation';
import RootStackScreen from './navigations/RootStackScreen';

import {AuthContext} from './components/Context';
import Colors from './constants/Colors';


//import reducers 
import productReducer from './store/reducers/products'
import cartReducer from './store/reducers/cart'

//customContentForDrawer
import DrawerContent from './screens/DrawerContent';
const Drawer = createDrawerNavigator();

//rootReducers
const RootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
});

const store = createStore(RootReducer);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const authContext = useMemo(()=>({
    signIn: () => {
      setUserToken('waseem');
      setIsLoading(false);
    },
    Verify: () => {
      setUserToken('waseem');
      setIsLoading(false);
    },
    signOut: () => {
      setUserToken(null);
      setIsLoading(false);
    },
  }));

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  // if (isLoading) {
  //   return (
  //     <View
  //       style={{
  //         flex: 1,
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //         backgroundColor: Colors.acient,
  //       }}>
  //       <ActivityIndicator size="large" color="#FFF" animating={true} />
  //     </View>
  //   );
  // }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => <DrawerContent {...props} />}>
          <Drawer.Screen name="home" component={TabsNavigation} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
