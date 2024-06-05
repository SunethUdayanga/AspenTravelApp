import React from 'react'
import HomeLocation from '../HomeTabSection/HomeLocation';
import HomePlaces from '../HomeTabSection/HomeHotels';
import { HomeStyles } from '../../styles/HomeScreen.style';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const TABS = {
    LOCATION: 'Location',
    HOTELS: 'Hotels',
    FOOD: 'Food',
    ADVENTURE: 'Adventure',
    ACTION: 'Action',
}

const MaterialNavigator = createMaterialTopTabNavigator();

const TabSection = () => {
    return (
        <MaterialNavigator.Navigator initialRouteName={TABS.LOCATION}
            style={{
                overflow: 'hidden'
            }}
            screenOptions={{
                tabBarStyle: HomeStyles.mTabBar,
                tabBarIndicatorStyle: HomeStyles.mTabIndicator,
                tabBarItemStyle: HomeStyles.mTabBarButton,
                tabBarLabelStyle: HomeStyles.mTabBarLabel,
                tabBarScrollEnabled: true,
                tabBarPressColor: 'transparent',
                tabBarInactiveTintColor: '#B8B8B8',
                tabBarActiveTintColor: '#176FF2',
                swipeEnabled: false,
            }}>
            <MaterialNavigator.Screen name={TABS.LOCATION} component={HomeLocation} />
            <MaterialNavigator.Screen name={TABS.HOTELS} component={HomePlaces} />
            <MaterialNavigator.Screen name={TABS.FOOD} component={HomePlaces} />
            <MaterialNavigator.Screen name={TABS.ADVENTURE} component={HomePlaces} />
            <MaterialNavigator.Screen name={TABS.ACTION} component={HomePlaces} />
        </MaterialNavigator.Navigator>
    )
}

export default TabSection;