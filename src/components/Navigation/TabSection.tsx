import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeLocation from '../HomeTabSection/HomeLocation';
import HomePlaces from '../HomeTabSection/HomeHotels';
import { Styles } from '../../styles/HomeScreen.style';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const TABS = {
    LOCATION: 'Location',
    HOTELS: 'Hotels',
    FOOD: 'Food',
    ADVENTURE: 'Adventure',
    ACTION: 'Action'

}

const MaterialNavigator = createMaterialTopTabNavigator();
const StackNavigator = createNativeStackNavigator();

const TabSection = () => {
    return (
        <MaterialNavigator.Navigator initialRouteName={TABS.LOCATION}
            style={{
                overflow: 'hidden'
            }}
            screenOptions={{
                tabBarStyle: Styles.mTabBar,
                tabBarIndicatorStyle: Styles.mTabIndicator,
                tabBarItemStyle: Styles.mTabBarButton,
                tabBarLabelStyle: Styles.mTabBarLabel,
                tabBarScrollEnabled:true,
                tabBarPressColor:'transparent',
                tabBarInactiveTintColor:'#B8B8B8',
                tabBarActiveTintColor:'#176FF2',
                swipeEnabled:false,
                
            }}
        >
            <MaterialNavigator.Screen name={TABS.LOCATION} component={HomeLocation} options={{ title:'Location' }}/>
            <MaterialNavigator.Screen name={TABS.HOTELS} component={HomePlaces} />
            <MaterialNavigator.Screen name={TABS.FOOD} component={HomePlaces} />
            <MaterialNavigator.Screen name={TABS.ADVENTURE} component={HomePlaces} />
            <MaterialNavigator.Screen name={TABS.ACTION} component={HomePlaces} />

        </MaterialNavigator.Navigator>

    )
}

export default TabSection;