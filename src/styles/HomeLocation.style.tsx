import { StyleSheet } from "react-native";

export const HomeLocationStyles = StyleSheet.create({
    // large card styles
    CardlgMain: {
        flex: 1,
        justifyContent: 'flex-end',
        borderRadius: 24,
        width: 188,
        height: 240,
        backgroundColor: '#fff',
        overflow: 'hidden',
    },
    CardlgPopularImage: {
        width: '160%',
        height: '160%',
        position: 'absolute',
        top: -80,
        left: -100
    },
    CardlgPopularItems: {
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    CardlgPopularItemsContainer:{
        height: 53, 
        width: 90, 
        left: 12, 
        bottom: 12, 
        gap: 4 
    },
    CardlgPopularItemsNameWrap: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        width: 90, 
        height: 23, 
        backgroundColor: '#4D5652', 
        borderRadius: 59, 
        padding:4
    },
    CardlgPopularItemsText:{
        fontSize: 12, 
        color: '#FFFFFF',
    },
    CardlgPopularItemsRateWrap:{
        flex: 1, 
        flexDirection:'row', 
        alignItems: 'center', 
        width:52, 
        height:23, 
        backgroundColor: '#4D5652', 
        borderRadius: 59, 
        padding:4
    },
    CardlgPopularItemsFavoriteWrap:{
        alignItems: 'flex-end', 
        justifyContent: 'flex-end', 
        right: 12, 
        bottom: 12
    },
// small card styles
    CardsmMain:{
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 30,
        borderRadius: 16,
        width: 174,
        height: 142,
        backgroundColor: '#fff',
        overflow: 'hidden',
    },
    CardsmRecommendedImageWrap:{
        width: 166, 
        height: 96, 
        margin: 4, 
        overflow: 'hidden', 
        borderRadius: 12,
    },
    CardsmRecommendedImage:{
        width: '190%', 
        height: '190%', 
        position: 'absolute',
        top: -60, 
        left: -40,
    },
    CardsmRecommendedMiddleContainer:{
        alignSelf: 'flex-end', 
        justifyContent: 'center', 
        alignItems: 'center', 
        bottom: 16, 
        right: 12, 
        borderColor: 'white', 
        borderWidth: 2, 
        width: 46, 
        height: 22, 
        backgroundColor: '#4D5652', 
        borderRadius: 59,
    },
    CardsmRecommendedMiddleText:{
        fontSize: 10, 
        color: '#FFFFFF', 
        fontWeight:"600",
    },
    CardsmRecommendedBottomContainer:{
        alignSelf: 'flex-start', 
        top: -24, 
        left: 4, 
        width:140, 
        height: 32, 
        borderRadius: 59,
    },
    CardsmRecommendedBottomNameText:{
        fontSize: 14, 
        color: '#232323', 
        fontWeight: "500",
    },
    CardsmRecommendedBottomRow:{
        flexDirection: 'row', 
        gap:4, 
        height: 12,
        left: 5, 
        width:'100%',
        marginTop:3,
    },
    CardsmRecommendedBottomRowText:{
        fontSize:10
    }

});