import { View, Text, Image, TouchableOpacity, TextInput, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { Styles } from '../styles/HomeScreen.style'
import TabSection from '../components/Navigation/TabSection';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const HomeScreen = () => {
    return (
        <View style={{ flex: 1, top: 24, }}>
            <View id='header' style={Styles.header}>
                <View style={Styles.hearderLeft}>
                    <Text style={Styles.headerTextsm}>Explore</Text>
                    <Text style={Styles.headerTextlg}>Aspen</Text>
                </View>
                <View style={Styles.headerRight}>
                    <TouchableOpacity style={Styles.headerDropdown}>
                        <Image style={{ width: 16, height: 16, marginRight: 4 }} source={require('../assets/icons/location-1.png')} />
                        <Text style={{ fontWeight:400, fontSize:12 }}>Aspen, USA</Text>
                        <Image style={{ width: 16, height: 16, marginLeft: 6 }} source={require('../assets/icons/ArrowDown.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <View id='search' style={Styles.searchBox}>
                <Image style={{ width: 20, height: 20 }} source={require('../assets/icons/Search.png')} />
                <TextInput placeholder='Find things to do' />

            </View>
            <View id='Tab' style={{height:'70%',}}>
                <TabSection />
            </View>
        </View>
    )
}

export default HomeScreen;


