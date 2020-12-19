import React from 'react'
import {createStackNavigator, useHeaderHeight} from "@react-navigation/stack";
import Dashboard from "../screens/Dashboard";
import Report from "../screens/Report";
import Credits from "../screens/Credits";
import Profile from "../screens/Profile";
import Theme from "../../config/MainTheme";
import MyLinearGradient from "../components/styling/LinearGradient"
const Stack = createStackNavigator();

//gradient color header


const DashboardHeader = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerBackground: () => (
                <MyLinearGradient/>
            ),
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontSize: 25,
              padding: 15,
              letterSpacing: 2,
              fontFamily: 'PopinsMedium',
              fontWeight: "700"
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