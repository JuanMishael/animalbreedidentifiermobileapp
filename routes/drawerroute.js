import React, {useState} from 'react'
import { 
  StyleSheet, 
  Text, 
  Image,
  View, 
  Button
} 
from 'react-native';
import { NavigationContainer  } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../screens/home';
import About from '../screens/about';
import { SafeAreaView } from 'react-native-safe-area-context';

const Drawer = createDrawerNavigator();

export default function Drawerroute(){
    return(
          <NavigationContainer>
              <Drawer.Navigator 
              initialRouteName="Home"
              screenOptions={{
                headerStyle:{ backgroundColor: "#FF4B4B" },
                headerTitleStyle: { color: "#262730" },
              }}
              >
                  <Drawer.Screen name="Home" component = {Home}/>
                  <Drawer.Screen name="About" component = {About} />
              </Drawer.Navigator>
          </NavigationContainer>
    )
}

const styles = StyleSheet.create({
  container:{
    padding: 24
  },
  appTitle:{
    fontFamily:"poppins-bold",
    fontSize: 24,

  }
})