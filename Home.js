import react from 'react';
import { View,TouchableOpacity,Image } from 'react-native';
import Images from './Images';

const Home = (props) => {
   return (
    
    <View style={{ display: 'flex',flexdirection:'row',flexWrap:"wrap"}}>
    {
     Images.map((image, index) => (
        <TouchableOpacity key={index} onPress={() => props.navigation.navigate("showImage",{
            url: 'image.uri',
        })}>
            <Image source={image.uri} style={
                {
                    height:deviceHeight / 3-8,
                    width: deviceWidth / 1-6,
                    borderRadius: 10,margin: 2
                }}/>
        </TouchableOpacity>
     ))
     }
  </View>

   );
    }