import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import MainStack from './navigations/MainStack';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DefaultTheme} from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

export default function App() {

  const STYLES = ['default', 'dark-content', 'light-content'];
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[1]);


  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'rgb(255, 45, 85)',
      background: '#fff',
    },
  };
 

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
        animated={true}
        backgroundColor="#fff" //191414
        style="dark"
        barStyle={statusBarStyle} // es para que la barra de notificacion, tenga el color de la app o cualquiera
      />

      <NavigationContainer theme={MyTheme}>
        <MainStack />
      </NavigationContainer>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff', // 191414
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
