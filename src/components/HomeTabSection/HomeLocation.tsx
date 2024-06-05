import React from 'react';
import Cardlg from './Cardlg';
import Cardsm from './Cardsm';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { HomeStyles } from '../../styles/HomeScreen.style';

// Sample Lists for add locations
const PopularPlaces = [
  {
    placeName: 'Alley Palace',
    imageUrl: require('../../assets/images/179270fb2948d683b4d3774909792312.png'),
    ratings: '4.1',
  },
  {
    placeName: 'Coeurdes Alpes',
    imageUrl: require('../../assets/images/4c9c92032b1bd606841783df77f35034.png'),
    ratings: '4.5',
  },
];

const RecommendedPlaces =[
  {
    placeName:'Explore Aspen',
    imageUrl:require('../../assets/images/3729c7c3bed149ba7c2bc5a7e79fd9fc.png'),
    travelPackage:'4N/5D'
  },
  {
    placeName:'Luxurious Aspen',
    imageUrl:require('../../assets/images/3098b354225e9c001d990dc6c08315e8.jpg'),
    travelPackage:'2N/3D'
  }
];

const HomeLocation = () => {
  return (
    <ScrollView style={{ marginHorizontal: 20 }} showsVerticalScrollIndicator={false} scrollEnabled>
      <View style={HomeStyles.inTabLocationHead}>
        <Text style={HomeStyles.inTabLocationHeadText}>Popular</Text>
        <TouchableOpacity>
          <Text style={HomeStyles.inTabLocationHeadBtn}>See all</Text>
        </TouchableOpacity>
      </View>
      <View>
        <ScrollView style={HomeStyles.inTabLocationCardPopular} showsHorizontalScrollIndicator={false} contentContainerStyle={{
          columnGap: 16
        }} horizontal>
          {PopularPlaces.map((place, index) =>(
            <Cardlg imagePath={place.imageUrl} placeName={place.placeName} rating={place.ratings} key={index} />
          ))}
          </ScrollView>
      </View>
      <Text style={HomeStyles.inTabLocationHeadText}>Recommended</Text>
      <View>
        <ScrollView style={HomeStyles.inTabLocationCardPopular} showsHorizontalScrollIndicator={false} contentContainerStyle={{
          columnGap: 16
        }} horizontal>
          {RecommendedPlaces.map((place, index) => (
            <Cardsm imagePath={place.imageUrl} placeName={place.placeName} travelPackage={place.travelPackage} key={index}/>
          ))}
          </ScrollView>
      </View>
    </ScrollView>
  )
}

export default HomeLocation;