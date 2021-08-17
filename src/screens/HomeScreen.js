import React, {useState} from 'react';
// Import required components
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Video from 'react-native-video';
import { useNavigation } from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';


const HomeScreen = () => {
  const navigation = useNavigation();
  const [filePath, setFilePath] = useState('');
  const [state, setState] = useState({
      height: '',
      width: ''
  })

  const pickVideo = () => {
    ImagePicker.openPicker({
        mediaType: "video",
      }).then((video) => {
        console.log('video path check',video);
        setFilePath(video.path);
        setState({
          height: video.height,
          width: video.width
        })
      });
  }

  const chooseFile = (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, (response) => {
      console.log('Response = ', response.assets);
      // setFilePath(response.assets);
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        {/* {filePath.map((item)=>{
          return ( */}
            <Video
            source={{uri:filePath }}
            resizeMode="cover"
            style={styles.imageStyle}
          />
          {/* )
        })
        } */}
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('VideoScreen', {
              uriVideo: filePath,
              videoHeight: state.height,
              videoWidth: state.width
          })}>
          <Text style={styles.textStyle}>Video Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('CropScreen', {
              uriVideo: filePath,
              videoHeight: state.height,
              videoWidth: state.width
          })}>
          <Text style={styles.textStyle}>Crop Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          // onPress={() => chooseFile('video')}
        onPress={pickVideo}
          >
          <Text style={styles.textStyle}>Choose Video</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    padding: 10,
    color: 'black',
    textAlign: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 5,
    marginVertical: 10,
    width: 250,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    // margin: 5,
    position: 'absolute',
  },
});