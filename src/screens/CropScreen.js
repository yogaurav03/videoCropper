import React, {useEffect, useState} from 'react';
import {View, Text, Dimensions, Image} from 'react-native';
import Video from 'react-native-video';
import Draggable from 'react-native-draggable';
import square from '../assets/images/square1.png';
import {VideoPlayer, ProcessingManager} from 'react-native-video-processing';

const CropScreen = ({navigation, route}) => {
  const {height, width} = Dimensions.get('window');
  const {uriVideo, videoHeight, videoWidth} = route.params;
  console.log('Check video', videoWidth)
  const [state, setState] = useState({
    cordY: '',
  });
  console.log('check Y ', state.cordY);
  return (
    <View style={{backgroundColor: 'white', flex: 1, justifyContent: 'center'}}>
      {/* {uriVideo.map(item => {
        return (
          <> */}
      <Draggable
        minX={5}
        minY={5}
        maxX={width - 5}
        maxY={height - 5}
        x={5}
        y={height / 4}
        onDragRelease={e => {
          let diff = e.nativeEvent.pageY - e.nativeEvent.locationY;
          if (diff === 0 && e.nativeEvent.locationY >= 0) {
            setState({
              cordY: height / 2,
            });
          } else if (diff === 0 && e.nativeEvent.locationY <= 0) {
            setState({
              cordY: 0,
            });
          } else {
            setState({
              cordY: diff,
            });
          }

          console.log(
            'pageX, pageY = ' +
              e.nativeEvent.pageX +
              ', ' +
              e.nativeEvent.pageY,
          );
          console.log(
            'locX, locY = ' +
              e.nativeEvent.locationX +
              ', ' +
              e.nativeEvent.locationY,
          );
          console.log('X', e.nativeEvent.pageX - e.nativeEvent.locationX);
          console.log('Y', e.nativeEvent.pageY - e.nativeEvent.locationY);
        }}>
        <View
          onLayout={event => {
            const layout = event.nativeEvent.layout;
            console.log('layoutx, layouty = ' + layout.x + ', ' + layout.y);
            // console.log('height:', layout.height);
            // console.log('width:', layout.width);
            // console.log('x:', layout.x);
            // console.log('y:', layout.y);
          }}
          style={{
            width: width - 10,
            height: width - 10,
            borderWidth: 5,
            borderColor: 'white',
            borderRadius: 10,
          }}
        />
      </Draggable>

      <Video
        source={{uri: uriVideo}}
        resizeMode="contain"
        style={{
          width: width,
          height: height,

          position: 'absolute',
        }}
      />
      <Text
        onPress={() =>
          navigation.navigate('VideoScreen', {
            uriVideo: uriVideo,
            videoHeight: videoHeight,
            videoWidth: videoWidth,
            cordY: state.cordY,
          })
        }
        style={{color: 'white', position: 'absolute', top: 10}}>
        Continue
      </Text>
    </View>
  );
};

export default CropScreen;
