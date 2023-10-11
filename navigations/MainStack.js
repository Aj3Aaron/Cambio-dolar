import React from 'react';
import Home from '../screens/Home';
import Tasas from '../screens/Tasas';
import {Image} from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


const MainStack = () => {
    
    return (

       <Tab.Navigator>
        
        <Tab.Screen 
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Entypo name="home" size={24} color="black" /> // icono home
            ),
          }}
        />
        
        <Tab.Screen 
          name="Tasas"
          component={Tasas}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Image
                source={require('../assets/tasas.png')}
                style={{height: 30, width: 30}}
              />
              ),
            }}
        />
    
      </Tab.Navigator>
        
          
    )
}

export default MainStack;