import React, { ReactNode, useRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated, TouchableWithoutFeedback } from 'react-native';
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
    <Animated.View style={[styles.card, { transform: [{ scale }] }]}>
      <Image source={imagePath} resizeMode='cover' style={{ width: '160%', height: '160%', position: 'absolute', top: -80, left: -100 }} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ height: 53, width: 90, left: 12, bottom: 12, gap: 4 }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: 90, height: 23, backgroundColor: '#4D5652', borderRadius: 59, padding:4 }}>
            <Text style={{ fontSize: 12, color: '#FFFFFF' }}>{placeName}</Text>
          </View>

          <View style={{ flex: 1, flexDirection:'row', alignItems: 'center', width:52, height:23, backgroundColor: '#4D5652', borderRadius: 59, padding:4 }}>
            <Image source={ICONS.STAR} />
            <Text style={{ fontSize: 12, color: '#FFFFFF' }}>{rating}</Text>
          </View>
        </View>
        <View style={{ alignItems: 'flex-end', justifyContent: 'flex-end', right: 12, bottom: 12 }}>
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

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'flex-end',
    borderRadius: 24,
    width: 188,
    height: 240,
    backgroundColor: '#fff',
    overflow: 'hidden',

  },
});
