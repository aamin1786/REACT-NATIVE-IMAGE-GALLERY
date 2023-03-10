import React, { useState } from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,Dimensions,TouchableOpacity,ScrollView,
  Image,
  Button,
} from 'react-native';

//import AppIntroSlider to use it
import AppIntroSlider from 'react-native-app-intro-slider';

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;




const App = () => {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };

  const onSkip = () => {
    setShowRealApp(true);
  };

  const RenderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100,
        }}>
        <Text style={styles.introTitleStyle}>{item.title}</Text>
        <Image style={styles.introImageStyle} source={item.image} />
        <Text style={styles.introTextStyle}>{item.text}</Text>
      </View>
    );
  };

  return (
    <>
      {showRealApp ? (
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
          <TouchableOpacity onPress={() => console.log("Image tapped")}>
          
<Image source={{ uri: 'https://img.freepik.com/premium-photo/generic-brandless-modern-sport-car_110488-1758.jpg?w=2000',}}
                      // <Image source={{uri:'https://unsplash.com/photos/0E-HiQaZ9KE',}}
          
style={{
 height:deviceHeight /3-8,
 width: deviceWidth / 1-6,
 borderRadius: 10,margin: 2,
 //backgroundColor: black,
}}
/>

 <Image source={{ uri: 'https://cdn.pixabay.com/photo/2012/11/02/13/02/car-63930__340.jpg',}}
                      
style={{
 height:deviceHeight /3-8,
 width: deviceWidth / 1-6,
 borderRadius: 10,margin: 2,
 //backgroundColor: black,
}}
/>

<Image source={{ uri: 'https://cdn.pixabay.com/photo/2016/03/11/02/08/speedometer-1249610__340.jpg',}}
                      // <Image source={{uri:'https://unsplash.com/photos/0E-HiQaZ9KE',}}
style={{
 height:deviceHeight /3-8,
 width: deviceWidth / 1-6,
 borderRadius: 10,margin: 2,
 //backgroundColor: black,
}}
/>

 </TouchableOpacity>
            <Text style={styles.titleStyle}>
            things just started
            </Text>
            <Text style={styles.paragraphStyle}>
              This will be your screen when you click Skip from any slide or
              Done button at last
            </Text>
            <Button
              title="Show Intro Slider again"
              onPress={() => setShowRealApp(false)}
            />
          </View>
        </SafeAreaView>
        </ScrollView>
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showSkipButton={true}
          onSkip={onSkip}
        />
      )}
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    width: 350,
    height: 350,
  },
  introTextStyle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 30,
  },
  introTitleStyle: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
  },
});

const slides = [

  {
    key: 's1',
    text: 'BEST ALWAYS WINS',
    title: 'RIDER',
    image: {
      uri:
        'https://images.unsplash.com/photo-1591259877480-41047587d1a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJpa2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    backgroundColor: 'black',
  },
  
  {
    key: 's2',
    title: 'DESTINY',
    text: 'KEEP RIDING',
    image: {
      uri:
        'https://images.unsplash.com/photo-1616839273372-a16bca55cc47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJpa2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    backgroundColor: 'black',
  },
  {
    key: 's3',
    title: 'choose road wisiely',
    text: 'enthusiasm',
    image: {
      uri:
        'https://images.unsplash.com/photo-1618695349120-6de4d26c2859?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJpa2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    backgroundColor: 'black',
  },
  {
    key: 's4',
    title: 'drive safe',
    text: 'FOCUS MEANS EVERYTHING',
    image: {
      uri:
        'https://images.unsplash.com/photo-1584588500402-6d9e9e38c50c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGJpa2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    backgroundColor: 'black',
  },
  {
    key: 's5',
    title: 'be persistent',
    text: 'Enjoy Travelling with homies',
    image: {
      uri:
        'https://images.unsplash.com/photo-1508798179027-a00aa5326443?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGJpa2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    backgroundColor: 'black',
  },
  {
    key: 's6',
    title: 'heros',
    text: 'goal is everything',
    image: {
      uri:
        'https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fGJpa2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    backgroundColor: 'black',
  },
];