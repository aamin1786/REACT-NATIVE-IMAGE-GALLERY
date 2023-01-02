import React from 'react';
import { StyleSheet,closeIcon,deleteIcon
, Text
, SafeAreaView
, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

function ViewImageScreen(props){
    return 
    <TouchableOpacity>
        <View style={styles.container}>
        <View style={styles.closeIcon}></View>
        <View style={styles.deleteIcon}></View>
        <Image
        resizeMode="contain" 
        style ={styles.image} source={require("../assets/icon.png")} />;
        </View>
        </TouchableOpacity>   
}
const styles = StyleSheet.create({
    closeIcon: {
        width: 50,
        height:50,
        backgroundColor: "#fc5c65",
        position:"absolute",
        top:40,
        left:30,
    },
    container:{
           backgroundColor:"#000",
           flex:1,
    },
    deleteIcon:{
        width: 50,
        height:50,
        backgroundColor: "#4ecdc4",
        position:"absolute",
        top:40,
        rigth:30,
},
    image:{
        width:"100%",
        height:"100%",
    },
});
export default ViewImageScreen;