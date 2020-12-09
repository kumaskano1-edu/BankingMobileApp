import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React from "react";
import {FontAwesome5} from "@expo/vector-icons";

//custom imports
import {DashboardHeader, ReportHeader, CreditsHeader, ProfileHeader} from "./src/navigation/headerStackNavi";


const Tab = createMaterialBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Dashboard" labeled={false} activeColor="#30beb2" barStyle={{height: 65, backgroundColor: "white"}}>
        <Tab.Screen name="Dashboard" component={DashboardHeader} options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="home" light color={color} size={20} />
          ), }
        } />
        <Tab.Screen name="Report" component={ReportHeader} options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="chart-line" color={color} size={20} />
          ), }
        } />
        <Tab.Screen name="Credits" component={CreditsHeader} options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="credit-card" color={color} size={20} />
          ), }
        } />
        <Tab.Screen name="Profile" component={ProfileHeader} options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-alt" color={color} size={20} />
          ), }
        } />      
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}
