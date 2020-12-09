import React from 'react'
import {createStackNavigator, useHeaderHeight} from "@react-navigation/stack";
import Dashboard from "../screens/Dashboard";
import Report from "../screens/Report";
import Credits from "../screens/Credits";
import Profile from "../screens/Profile";
import { LinearGradient } from 'expo-linear-gradient';
const Stack = createStackNavigator();

//gradient color header


const DashboardHeader = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerBackground: () => (
                <LinearGradient
                  colors={[ '#17f9f2', '#b0f9a9']}
                  style={{ flex: 1 }}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                />
            ),
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 25,
              padding: 15,
            }
            }}>
            <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
    );
}

const ReportHeader = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Report" component={Report} />
        </Stack.Navigator>
    );
}
const CreditsHeader = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Credits" component={Credits} />
        </Stack.Navigator>
    );
}
const ProfileHeader = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    );
}

export {DashboardHeader, ReportHeader, CreditsHeader, ProfileHeader}