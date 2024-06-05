import React, { ReactNode, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, Animated, TouchableWithoutFeedback } from 'react-native';
import { HomeLocationStyles } from '../../styles/HomeLocation.style';
import ICONS from '../../assets/icons';

type CardlgProps = {
  children?: ReactNode;
  imagePath: any;
  placeName: string;
  rating?: string;
};

const Cardlg: React.FC<CardlgProps> = ({ imagePath, placeName, rating } : CardlgProps ) => {
  const scale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 1.2,
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
    <Animated.View style={[HomeLocationStyles.CardlgMain, { transform: [{ scale }] }]}>
      <Image source={imagePath} resizeMode='cover' style={HomeLocationStyles.CardlgPopularImage} />
      <View style={HomeLocationStyles.CardlgPopularItems}>
        <View style={HomeLocationStyles.CardlgPopularItemsContainer}>
          <View style={HomeLocationStyles.CardlgPopularItemsNameWrap}>
            <Text style={HomeLocationStyles.CardlgPopularItemsText}>{placeName}</Text>
          </View>

          <View style={HomeLocationStyles.CardlgPopularItemsRateWrap}>
            <Image source={ICONS.STAR} />
            <Text style={HomeLocationStyles.CardlgPopularItemsText}>{rating}</Text>
          </View>
        </View>
        <View style={HomeLocationStyles.CardlgPopularItemsFavoriteWrap}>
          <TouchableOpacity>
            <Image source={ICONS.HEART} />
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default Cardlg;

