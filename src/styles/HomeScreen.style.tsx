import { StyleSheet } from "react-native";
import { FONTS } from "../assets/fonts";

export const HomeStyles = StyleSheet.create({
    header: {
        margin:20,
        flexDirection:"row",
        justifyContent:"space-between",
        height:56,
    },
    hearderLeft: {},
    headerRight: {
        top:0,
        flexDirection:"row",
    },
    headerDropdown: {
        flexDirection:"row",
        height:20,
        alignContent:"center",
        alignItems:"center",
    },
    headerTextsm: {
        fontFamily:FONTS.MONT400,
        fontSize:14,
        color:'#000000',
    },
    headerTextlg: {
        fontFamily:FONTS.MONT500,
        fontSize:32,
        color:'#000000',
    },
    searchBox: {
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:'#F3F8FE',
        margin:20,
        borderRadius:24,
        height:52,
        paddingHorizontal:16  
    },
    mTabBar: {
        marginHorizontal:20,
        backgroundColor:'transparent',
        elevation:0,   
    },
    mTabIndicator:{
        position:"absolute",
        backgroundColor:'#196EEE',
        opacity:0.1,
        height:'100%',
        zIndex:-1,
        borderRadius:24,
        bottom:-4
    },
    mTabBarButton:{
        borderRadius:24,
        width:98,
        height:41
    },
    mTabBarLabel: {
        fontWeight:700,
        textTransform: 'capitalize',
        fontSize:14
    },
    inTabLocationHead: {
        flex:1,
        flexDirection:'row',
        justifyContent:"space-between",
    },
    inTabLocationHeadText: {
        fontFamily:FONTS.MONT600,
        fontSize:18,
        color:'#232323',
        marginTop:32,
        marginBottom:12,
    },
    inTabLocationHeadBtn:{
        color:'blue',
        marginTop:32,
    },
    inTabLocationCardPopular:{},
    inTabLocationButtom:{},
    inTabLocationCardRecommended:{}
    
    
});