import React, {useEffect} from 'react';
import {
  View,
  Text,
  Dimensions,
  Animated,
  Easing,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const {width} = Dimensions.get('window');
const AnimatedLG = Animated.createAnimatedComponent(LinearGradient);

const Loader = () => {
  const animatedValue = new Animated.Value(0);

  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear.inOut,
        useNativeDriver: true,
      }),
    ).start();
  });

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-width, width],
  });
  return (
    <View>
      <View
        style={styles.input}>
        <AnimatedLG
          colors={['#a0a0a0', '#b0b0b0', '#b0b0b0', '#a0a0a0']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{
            ...StyleSheet.absoluteFill,
            transform: [{translateX: translateX}],
          }}
        />
      </View>
      <View
        style={styles.input}>
        <AnimatedLG
          colors={['#a0a0a0', '#b0b0b0', '#b0b0b0', '#a0a0a0']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{
            ...StyleSheet.absoluteFill,
            transform: [{translateX: translateX}],
          }}
        />
      </View>
      <View
        style={styles.input}>
        <AnimatedLG
          colors={['#a0a0a0', '#b0b0b0', '#b0b0b0', '#a0a0a0']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{
            ...StyleSheet.absoluteFill,
            transform: [{translateX: translateX}],
          }}
        />
      </View>
      <View
        style={styles.input}>
        <AnimatedLG
          colors={['#a0a0a0', '#b0b0b0', '#b0b0b0', '#a0a0a0']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{
            ...StyleSheet.absoluteFill,
            transform: [{translateX: translateX}],
          }}
        />
      </View>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#a0a0a0',
    borderColor: '#b0b0b0',
    height: 56,
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 12,
    marginHorizontal: 16,
    marginTop: 16,
  },
});
