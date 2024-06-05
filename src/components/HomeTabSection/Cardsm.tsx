import React, { ReactNode, useRef } from 'react';
import { View, Text, Image, Animated, TouchableWithoutFeedback } from 'react-native';
import ICONS from '../../assets/icons';
import { HomeLocationStyles } from '../../styles/HomeLocation.style';

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
            <Animated.View style={[HomeLocationStyles.CardsmMain, { transform: [{ scale }] }]}>
                <View style={HomeLocationStyles.CardsmRecommendedImageWrap}>
                    <Image source={imagePath} resizeMode='cover' style={HomeLocationStyles.CardsmRecommendedImage} />
                </View>
                <View style={HomeLocationStyles.CardsmRecommendedMiddleContainer}>
                    <Text style={HomeLocationStyles.CardsmRecommendedMiddleText}>{travelPackage}</Text>
                </View>
                <View style={HomeLocationStyles.CardsmRecommendedBottomContainer}>
                    <Text style={HomeLocationStyles.CardsmRecommendedBottomNameText}>{placeName}</Text>
                    <View style={HomeLocationStyles.CardsmRecommendedBottomRow}>
                        <Image source={ICONS.TRENDING} /><Text style={HomeLocationStyles.CardsmRecommendedBottomRowText}>Hot Deal</Text>
                    </View>
                </View>
            </Animated.View>
        </TouchableWithoutFeedback>
    );
};

export default Cardsm;
