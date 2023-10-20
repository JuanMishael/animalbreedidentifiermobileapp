import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import React, {useState} from 'react'
import { 
  StyleSheet, View, Text
} 
from 'react-native';
import Drawer from './routes/drawerroute'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [loaded] = useFonts({
      'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
      'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
      'poppins-thin': require('./assets/fonts/Poppins-Thin.ttf'),
  });

  if(!loaded){
      return null;
  }
    return(
      <View style={styles.container}>
          <Drawer />
      </View>

    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFF',
  },

});

