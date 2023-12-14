import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from './src/component/SearchScreen';
import HomeScreen from './src/component/HomeScreen';
import Coba from './src/component/Coba';
import AddScreen from './src/component/AddScreen';
import ProfileScreen from './src/component/ProfileScreen';

const App = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, colour }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search-outline' : 'search';
            } else if (route.name === 'Coba') {
              iconName = focused ? 'time-sharp' : 'time-outline';
            } else if (route.name === 'ProfileScreen') {
              iconName = focused ? 'person-add-sharp' : 'person-add-outline';
            } else if (route.name === 'AddScreen') {
              iconName = focused ? 'add-circle-sharp' : 'add-circle-outline';
            }
            return <Ionic name={iconName} size={size} colour={colour} />
          },
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'black',
          showLabel: false,
          style: {
            backgroundColor: '#ffc125',
            heigh: 60,
          },
        }}>
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Search' component={SearchScreen} />
        <Tab.Screen name='Coba' component={Coba} />
        <Tab.Screen name='ProfileScreen' component={ProfileScreen} />
        <Tab.Screen name='AddScreen' component={AddScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;
