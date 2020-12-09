import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React from "react";
import { View, Text } from 'react-native';

import {FontAwesome5} from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

//custom imports
import Dashboard from "./src/screens/Dashboard";
import Report from "./src/screens/Report";
import Credits from "./src/screens/Credits";
import Profile from "./src/screens/Profile";


const Tab = createMaterialBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Dashboard" labeled={false} activeColor="#30beb2" barStyle={{height: 65, backgroundColor: "white"}}>
        <Tab.Screen name="Dashboard" component={Dashboard} options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="home" light color={color} size={20} />
          ), }
        } />
        <Tab.Screen name="Report" component={Report} options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="chart-line" color={color} size={20} />
          ), }
        } />
        <Tab.Screen name="Credits" component={Credits} options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="credit-card" color={color} size={20} />
          ), }
        } />
        <Tab.Screen name="Profile" component={Profile} options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-alt" color={color} size={20} />
          ), }
        } />      
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}
