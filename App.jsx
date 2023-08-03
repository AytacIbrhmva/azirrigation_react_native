import 'react-native-gesture-handler';
import React, {createRef} from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, StatusBar, Platform } from 'react-native';
import { useCallback, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LinearGradient from 'react-native-linear-gradient';
import Home from './components/home/Home';
import Statistics from './components/statistics/Statistics';
import Notifications from './components/notifications/Notifications';
import Settings from './components/settings/Settings';
import FooterNav from './layout/footer/FooterNav';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const navigationRef = createRef()

const App = () => {
  return (
    <NavigationContainer ref={navigationRef} >
      <SafeAreaView style={{flex: 1}}>
        <StatusBar
          backgroundColor="transparent"
          translucent={true}
        />
        <LinearGradient 
          colors={['#219BD3', '#0C588A']}
          locations={[0, 1]}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={{flex: 1}}
        >
            <Tab.Navigator tabBar={props => <FooterNav {...props} />}>
              <Tab.Screen 
                name="Home" 
                component={Home}  
                options={{
                  title: '',
                  headerStyle: {backgroundColor: 'red', height: 0},
                  gestureEnabled: false,
                }}
              />
              <Tab.Screen 
                name="Statistics"
                component={Statistics}  
                options={{
                  title: '',
                  headerStyle: {backgroundColor: 'red', height: 0},
                  headerLeft: null,
                }}
              />
              <Tab.Screen 
                name="Notifications"
                component={Notifications}  
                options={{
                  title: '',
                  headerStyle: {backgroundColor: 'red', height: 0},
                  headerLeft: null,
                }}
              />
              <Tab.Screen 
                name="Settings"
                component={Settings}  
                options={{
                  title: '',
                  headerStyle: {backgroundColor: 'red', height: 0},
                  headerLeft: null,
                }}
              />
            </Tab.Navigator>
        </LinearGradient>
      </SafeAreaView>
    </NavigationContainer>
  )
}


export default App