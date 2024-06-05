import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screen/HomeScreen';
import BookingScreen from '../../screen/BookingScreen';
import FavoriteScreen from '../../screen/FavoriteScreen';
import ProfileScreen from '../../screen/ProfileScreen';
import ButtomNavBar from './ButtomNavBar';

const SCREENS = {
    HOME: 'HOME',
    BOOKING: 'BOOKING',
    FAVORITE: 'FAVORITE',
    PROFILE: 'PROFILE',
}

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
    return (
        <Stack.Navigator initialRouteName={SCREENS.HOME}>
            <Stack.Screen
                name={SCREENS.HOME}
                component={ButtomNavBar}
                options={{ headerShown: false }}
            /> 
        </Stack.Navigator>
    )
}

export default StackRoutes

