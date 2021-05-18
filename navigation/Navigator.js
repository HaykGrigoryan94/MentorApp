import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ConfigurationFirstStep from '../src/components/ConfigurationFirstStep';
import ConfigurationSecondStep from '../src/components/ConfigurationSecondStep';
import GroupManagement from '../src/components/GroupManagement'
import React from 'react';
import CameraTurnOn from '../src/components/CameraTurnOn'
import Home from '../src/components/Home'
import Settings from '../src/components/Settings'

const Navigator = () => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  const BottomTabNavigator = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Step1'>
        <Stack.Screen name="Step1" component={ConfigurationFirstStep} />
        <Stack.Screen name="Camera" component={CameraTurnOn} />
        <Stack.Screen name="Step2" component={ConfigurationSecondStep} />
        <Stack.Screen name="GroupManagement" component={GroupManagement} />
        <Stack.Screen name="Home" component={BottomTabNavigator} options={{ headerMode: false, headerLeft: null }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator;