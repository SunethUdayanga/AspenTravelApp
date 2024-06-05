import React, { ReactNode, useRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated, TouchableWithoutFeedback } from 'react-native';
import ICONS from '../../assets/icons';

type CardsmProps = {
    children?: ReactNode;
    imagePath: any;
    placeName: string;
    travelPackage?: string;

};

const Cardsm: React.FC<CardsmProps> = ({ imagePath, placeName, travelPackage }: CardsmProps) => {
    const scale = useRef(new Animated.Value(1)).current;

    const handlePressIn = () => {
        Animated.spring(scale, {
            toValue: 1.5,
            useNativeDriver: true,
        }).start();
    };

    const handlePressOut = () => {
        Animated.spring(scale, {
            toValue: 1,
            useNativeDriver: true,
        }).start();
    };

    return (
        <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={handlePressOut}>
            <Animated.View style={[styles.card, { transform: [{ scale }] }]}>
                <View style={{ width: 166, height: 96, margin: 4, overflow: 'hidden', borderRadius: 12, backgroundColor: 'red' }}>
                    <Image source={imagePath} resizeMode='cover' style={{ width: '190%', height: '190%', position: 'absolute', top: -60, left: -40 }} />
                </View>
                <View style={{ alignSelf: 'flex-end', justifyContent: 'center', alignItems: 'center', bottom: 16, right: 12, borderColor: 'white', borderWidth: 2, width: 46, height: 22, backgroundColor: '#4D5652', borderRadius: 59 }}>
                    <Text style={{ fontSize: 10, color: '#FFFFFF', fontWeight: 600 }}>{travelPackage}</Text>
                </View>
                <View style={{ alignSelf: 'flex-start', top: -24, left: 4, width:140, height: 32, borderRadius: 59 }}>
                    <Text style={{ fontSize: 14, color: '#232323', fontWeight: 500 }}>{placeName}</Text>
                    <View style={{ flexDirection: 'row', gap:4, height: 12,left: 5, width:'100%',marginTop:3, }}>
                        <Image source={ICONS.TRENDING} /><Text style={{fontSize:10}}>Hot Deal</Text>
                    </View>
                </View>

                {/* <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ height: 53, width: 90, left: 12, bottom: 12, gap: 4 }}>

                    </View>
                    <View style={{ alignItems: 'flex-end', justifyContent: 'flex-end', right: 12, bottom: 12 }}>

                        <TouchableOpacity>
                            <Image source={ICONS.HEART} />
                        </TouchableOpacity>
                    </View>
                </View> */}
            </Animated.View>
        </TouchableWithoutFeedback>
    );
};

export default Cardsm;

const styles = StyleSheet.create({
    card: {

        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 30,
        borderRadius: 16,
        width: 174,
        height: 142,
        backgroundColor: '#fff',
        overflow: 'hidden',

    },
});
