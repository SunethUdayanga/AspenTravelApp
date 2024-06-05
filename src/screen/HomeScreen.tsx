import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { HomeStyles } from '../styles/HomeScreen.style'
import TabSection from '../components/Navigation/TabSection';
import ICONS from '../assets/icons';

const HomeScreen = () => {
    return (
        <View style={{ flex: 1, top: 24 }}>
            <View id='header' style={HomeStyles.header}>
                <View style={HomeStyles.hearderLeft}>
                    <Text style={HomeStyles.headerTextsm}>Explore</Text>
                    <Text style={HomeStyles.headerTextlg}>Aspen</Text>
                </View>
                <View style={HomeStyles.headerRight}>
                    <TouchableOpacity style={HomeStyles.headerDropdown}>
                        <Image style={{ width: 16, height: 16, marginRight: 4 }} source={ICONS.LOCATION} />
                        <Text style={{ fontWeight: 400, fontSize: 12 }}>Aspen, USA</Text>
                        <Image style={{ width: 16, height: 16, marginLeft: 6 }} source={ICONS.ARROW} />
                    </TouchableOpacity>
                </View>
            </View>
            <View id='search' style={HomeStyles.searchBox}>
                <Image style={{ width: 20, height: 20 }} source={ICONS.SEARCH} />
                <TextInput placeholder='Find things to do' />
            </View>
            <View id='Tab' style={{ height: '74%' }}>
                <TabSection />
            </View>
        </View>
    )
}

export default HomeScreen;


