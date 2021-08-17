import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen1 from './src/screens/HomeScreen';
import VideoScreen from './src/screens/VideoScreen';
import CropScreen from './src/screens/CropScreen';
function HomeScreen({ navigation }) {
  return (
    <HomeScreen1 />
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen options={{headerShown:false}} name="Home" component={HomeScreen} />
        <Stack.Screen options={{headerShown:false}} name="VideoScreen" component={VideoScreen} />
        <Stack.Screen options={{headerShown:false}} name="CropScreen" component={CropScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// import React, { Component } from 'react';
// import { View } from 'react-native';
// import { VideoPlayer, Trimmer } from 'react-native-video-processing';
// import Video from './src/assets/webm.webm'
 
// class App extends Component {
//     trimVideo() {
//         const options = {
//             startTime: 0,
//             endTime: 15,
//             quality: VideoPlayer.Constants.quality.QUALITY_1280x720, // iOS only
//             saveToCameraRoll: true, // default is false // iOS only
//             saveWithCurrentDate: true, // default is false // iOS only
//         };
//         this.videoPlayerRef.trim(options)
//             .then((newSource) => console.log(newSource))
//             .catch(console.warn);
//     }
 
//     compressVideo() {
//         const options = {
//             width: 720,
//             height: 1280,
//             bitrateMultiplier: 3,
//             saveToCameraRoll: true, // default is false, iOS only
//             saveWithCurrentDate: true, // default is false, iOS only
//             minimumBitrate: 300000,
//             removeAudio: true, // default is false
//         };
//         this.videoPlayerRef.compress(options)
//             .then((newSource) => console.log(newSource))
//             .catch(console.warn);
//     }
 
//     getPreviewImageForSecond(second) {
//         const maximumSize = { width: 640, height: 1024 }; // default is { width: 1080, height: 1080 } iOS only
//         this.videoPlayerRef.getPreviewForSecond(second, maximumSize) // maximumSize is iOS only
//         .then((base64String) => console.log('This is BASE64 of image', base64String))
//         .catch(console.warn);
//     }
 
//     getVideoInfo() {
//         this.videoPlayerRef.getVideoInfo()
//         .then((info) => console.log(info))
//         .catch(console.warn);
//     }
 
//     render() {
//         return (
//             <View style={{ flex: 1 }}>
//                 <VideoPlayer
//                     ref={ref => this.videoPlayerRef = ref}
//                     startTime={30}  // seconds
//                     endTime={120}   // seconds
//                     play={true}     // default false
//                     replay={true}   // should player play video again if it's ended
//                     rotate={true}   // use this prop to rotate video if it captured in landscape mode iOS only
//                     source={ 'https://vid.ly/5u4h3e?content=video'} 
//                     playerWidth={300} // iOS only
//                     playerHeight={500} // iOS only
//                     // style={{ backgroundColor: 'black' }}
//                     resizeMode={VideoPlayer.Constants.resizeMode.CONTAIN}
//                     onChange={({ nativeEvent }) => console.log({ nativeEvent })} // get Current time on every second
//                 />
//                 {/* <Trimmer
//                     source={'https://vid.ly/5u4h3e?content=video'}
//                     height={100}
//                     width={300}
//                     onTrackerMove={(e) => console.log(e.currentTime)} // iOS only
//                     currentTime={this.video.currentTime} // use this prop to set tracker position iOS only
//                     themeColor={'white'} // iOS only
//                     thumbWidth={30} // iOS only
//                     trackerColor={'green'} // iOS only
//                     onChange={(e) => console.log(e.startTime, e.endTime)}
//                 /> */}
//             </View>
//         );
//     }
// }

// export default App;