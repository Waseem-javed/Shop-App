import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import  Icon  from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ExploreScreen from '../screens/ExploreScreen';

import ShopNavigation from  './ShopNavigation';

import Colors from '../constants/Colors';
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const screenCommonOptions = props => ({
    headerStyle: { backgroundColor: Colors.acient },
    headerTitleAlign: 'center',
    headerTintColor: "#FFF",
});

const StackNavigation = ({navigation}) => (
  <Stack.Navigator
    initialRouteName="Home"
        mode="card"
        headerMode="screen"
        screenOptions={screenCommonOptions}>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
            options={{
                headerTitle: 'DashBoard',
                headerLeft: () => (
                    <Icon.Button name="ios-menu" color="white" backgroundColor={Colors.acient} onPress={()=>navigation.toggleDrawer()}/>
                )
            }}
    />
    <Stack.Screen
      name="Details"
      component={DetailScreen}
      options={{headerShown:true,headerTitle: 'Details',headerStyle:{ backgroundColor:Colors.acient}}}
    />
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{headerTitle: 'Profile'}}
    />
    <Stack.Screen
      name="Explore"
      component={ExploreScreen}
      options={{headerTitle: 'Explore'}}
    />
  </Stack.Navigator>
);



const TabsNavigation = (props) => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#fff"
    barStyle={{backgroundColor: Colors.acient}}>
    <Tab.Screen
      name="Home"
      component={StackNavigation}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({color}) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Products"
      component={ShopNavigation}
      options={{
        tabBarLabel: 'Products',
        tabBarIcon: ({color}) => (
          <Icon name="ios-notification" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({color}) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Explore"
      component={ExploreScreen}
      options={{
        tabBarLabel: 'Explore',
        tabBarIcon: ({color}) => (
          <Icon name="ios-aperture" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);



export default TabsNavigation;