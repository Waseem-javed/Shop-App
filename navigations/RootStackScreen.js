import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../screens/auth/SplashScreen';
import SignInScreen from '../screens/auth/SignInScreen';
import VerfiyOtpScreen from '../screens/auth/VerifyOtpScreen';

const Stack = createStackNavigator();

const stackOptions = {
  headerShown: false,
};

const RootStackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Splash"
      component={SplashScreen}
      options={stackOptions}
    />
    <Stack.Screen
      name="Signin"
      component={SignInScreen}
      options={stackOptions}
    />
    <Stack.Screen
      name="verfiyOtp"
      component={VerfiyOtpScreen}
      options={stackOptions}
    />
  </Stack.Navigator>
);

export default RootStackScreen;
