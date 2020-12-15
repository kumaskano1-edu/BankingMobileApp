import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React, {Component} from "react";
import {FontAwesome5} from "@expo/vector-icons";
import {setCustomText} from "react-native-global-props"
//custom imports
import {DashboardHeader, ReportHeader, CreditsHeader, ProfileHeader} from "./src/navigation/headerStackNavi";
import * as Font from "expo-font";

const Tab = createMaterialBottomTabNavigator();

export default class App extends Component{ 
  constructor() {
    super()
    this.state = {
      fontloaded: false
    }
  }
  componentDidMount() {
    Font.loadAsync({
      'PopinsLight':require('./assets/fonts/Poppins-Light.ttf'),
      'PopinsBlack':require('./assets/fonts/Poppins-Black.ttf'),
      'PopinsMedium':require('./assets/fonts/Poppins-Medium.ttf')
  }).then(() => {
    const customTextProps = {
      style: {
        fontFamily: 'PopinsMedium',
      }
    }; 
    setCustomText(customTextProps); 
  })
  }
  render() {
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
}
