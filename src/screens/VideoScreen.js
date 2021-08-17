import React, {useEffect, useState} from 'react';
import {View, Text, Dimensions, Image} from 'react-native';
import Video from 'react-native-video';
import Draggable from 'react-native-draggable';
import square from '../assets/images/square1.png';
import {VideoPlayer, ProcessingManager} from 'react-native-video-processing';

const VideoScreen = ({navigation, route}) => {
  const {height, width} = Dimensions.get('window');
  const {uriVideo, videoHeight, videoWidth, cordY} = route.params;
  const [imageCrop, setImageCrop] = useState('');
  console.log('check Y',cordY)
  const cropOptions = () => {
    const aspectRatio = 1 / 1;
    const outputWidth = videoWidth;
    const outputHeight = parseInt(outputWidth * aspectRatio);
    const options = {
      cropWidth: videoWidth,
      cropHeight: outputHeight,
      cropOffsetX: 0,
      // cropOffsetY: parseInt(Math.abs((videoHeight - outputHeight) / 10)),
       cropOffsetY: videoHeight>height? (videoHeight/height)* cordY : (videoHeight/height)*cordY ,
    };
    ProcessingManager.crop(uriVideo, options)
      .then(data => {
        console.log('success', data);
        setImageCrop(data);
      })
      .catch(error => {
        console.log('error', error);
      });
  };

  useEffect(() => {
    cropOptions();
  }, []);
  console.log('videoHeight', videoHeight);
  return (
    <View style={{backgroundColor: 'white', flex: 1, justifyContent: 'center'}}>
      <Video
        source={{uri: imageCrop}}
        resizeMode="cover"
        style={{
          width: width,
          height: height/2,

          // position: 'absolute',
        }}
      />
    </View>
  );
};

export default VideoScreen;
