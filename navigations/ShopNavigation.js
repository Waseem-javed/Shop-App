import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';

import Colors from '../constants/Colors'
const Stack = createStackNavigator();

const ShopNavigation = ({navigation}) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: Colors.acient},
      headerTitleAlign: 'center',
      headerTintColor: '#FFF',
    }}>
    <Stack.Screen
      name="Products"
      component={ProductOverviewScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="arrow-back-outline"
            color="white"
            backgroundColor={Colors.acient}
            onPress={() => navigation.goBack()}
          />
        ),
      }}
    />
    <Stack.Screen
      name="ProductDetail"
      component={ProductDetailScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="arrow-back-outline"
            color="white"
            backgroundColor={Colors.acient}
            onPress={() => navigation.goBack()}
          />
        ),
      }}
    />
    <Stack.Screen
      name="Cart"
      component={CartScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="arrow-back-outline"
            color="white"
            backgroundColor={Colors.acient}
            onPress={() => navigation.navigate('ProductDetail')}
          />
        ),
      }}
    />
  </Stack.Navigator>
);

export default ShopNavigation;