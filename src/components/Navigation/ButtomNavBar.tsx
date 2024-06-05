import { View, Text, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screen/HomeScreen';
import ICONS from '../../assets/icons';
import BookingScreen from '../../screen/BookingScreen';
import FavoriteScreen from '../../screen/FavoriteScreen';
import ProfileScreen from '../../screen/ProfileScreen';

const ButtomNav = createBottomTabNavigator();


const ButtomNavBar = () => {
    return (
        <ButtomNav.Navigator initialRouteName='home' screenOptions={{tabBarShowLabel:false, tabBarStyle:{ borderTopLeftRadius:32, borderTopRightRadius:32, height:72, paddingHorizontal:36 }}}>
            <ButtomNav.Screen
                name='home'
                component={HomeScreen}
                options={{
                    headerShown: false,
                    title: 'Home', 
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? ICONS.HOMEFOCUSED : ICONS.HOME}
                            style={{ height: 24, width: 24 }} />)
                }}
            />
            <ButtomNav.Screen
                name='booking'
                component={BookingScreen}
                options={{
                    headerShown: false,
                    title: 'booking', 
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? ICONS.BOOKINGFOCUSED : ICONS.BOOKING}
                            style={{ height: 24, width: 24 }} />)
                }}
            />
            <ButtomNav.Screen
                name='favorite'
                component={FavoriteScreen}
                options={{
                    headerShown: false,
                    title: 'Home',
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? ICONS.FAVORITEFOCUSED : ICONS.FAVORITE}
                            style={{ height: 24, width: 24 }} />)
                }}
            />
            <ButtomNav.Screen
                name='profile'
                component={ProfileScreen}
                options={{
                    headerShown: false,
                    title: 'Home', 
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? ICONS.PROFILEFOCUSED : ICONS.PROFILE}
                            style={{ height: 24, width: 24 }} />)
                }}
            />
        </ButtomNav.Navigator>
    )
}

export default ButtomNavBar;


