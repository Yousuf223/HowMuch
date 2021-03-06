import React from 'react'
import Home from '../screens/Home/Home.screen'
import Profile from '../screens/Profile/Profile.screen'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import {CustomerAuth} from './customerNavigation'
import {CustomeAppStack} from './customerNavigation'
const Stack = createStackNavigator()
const AuthStack = createStackNavigator()
const AppStack = createStackNavigator()


function AuthStackNavigator() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="CustomerAuth">
      <AuthStack.Screen name="Profile" component={Profile} />
      {/* <AuthStack.Screen name="Profile" component={Profile} /> */}
      <AuthStack.Screen name="CustomerAuth" component={CustomerAuth} />
    </AuthStack.Navigator>
  );
}


function AppStackNavigator() {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="CustomeAppStack">
      <AppStack.Screen name="CustomeAppStack" component={CustomeAppStack} />
    </AppStack.Navigator>
  )
}
const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
          name="AuthStackNavigator"
          options={{ headerShown: false }}
          component={AuthStackNavigator}
        />
        <Stack.Screen
          name="AppStackNavigator"
          options={{ headerShown: false }}
          component={AppStackNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation
