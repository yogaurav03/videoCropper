import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const {height} = Dimensions.get("window");

const Loader1 = () => {
  return (
    <View style={{}}>
      <View style={{marginBottom: 20}}>
        <SkeletonPlaceholder>
          <View style={styles.input1} />
        </SkeletonPlaceholder>
        <SkeletonPlaceholder>
          <View style={styles.input1} />
        </SkeletonPlaceholder>
      </View>
      <>
      <SkeletonPlaceholder>
        <View style={{flexDirection: 'row', marginHorizontal: 16,}}>
        <View style={styles.skeltonMainView} />
        <View style={styles.skeltonMainView} />
        <View style={styles.skeltonMainView} />
        <View style={styles.skeltonMainView} />
        </View>
      </SkeletonPlaceholder>
      <SkeletonPlaceholder>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 10}}>
        <View style={styles.skeltonMainView1} />
        <View style={styles.skeltonMainView1} />
        </View>
      </SkeletonPlaceholder>
      </>
    </View>
  );
};

export default Loader1;

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#a0a0a0',
    borderColor: '#b0b0b0',
    height: 56,
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 12,
    marginHorizontal: 16,
  },
  input1: {
    height: 10,
    marginLeft: 16,
    width: 200,
    borderRadius: 8,
    marginTop: 30,
  },
  skeltonMainView: {
    width: 76.75,
    margin: 5,
    height: 56,
    borderRadius: 8,
    marginHorizontal: 6
  },
  skeltonMainView1: {
    width: 76.75,
    margin: 5,
    height: 10,
    borderRadius: 8,
    marginHorizontal: 6
  },
});
