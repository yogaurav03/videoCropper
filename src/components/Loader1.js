import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const Loader1 = () => {
  return (
    <View>
      <View style={{}}>
        <SkeletonPlaceholder>
          <View style={styles.input1} />
        </SkeletonPlaceholder>
      </View>
      <View style={{marginTop: 10}}>
        <SkeletonPlaceholder>
          <View style={styles.input} />
        </SkeletonPlaceholder>
      </View>
      <View style={{marginBottom: 20}}>
      <SkeletonPlaceholder>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <View style={{flexDirection: 'row'}}>
          <View style={styles.skeltonImageView} />
          <View style={styles.skeltonMainView} />
          </View>
          <View style={{flexDirection: 'row'}}>
          <View style={styles.skeltonImageView} />
          <View style={styles.skeltonMainView} />
          </View>
          <View style={{flexDirection: 'row'}}>
          <View style={styles.skeltonImageView} />
          <View style={styles.skeltonMainView} />
          </View>
        </View>
      </SkeletonPlaceholder>
      </View>
      <View style={{marginTop: 10}}>
        <SkeletonPlaceholder>
          <View style={styles.input} />
        </SkeletonPlaceholder>
      </View>
      <View style={{marginTop: 10}}>
        <SkeletonPlaceholder>
          <View style={styles.input} />
        </SkeletonPlaceholder>
      </View>
      <View style={{marginTop: 10}}>
        <SkeletonPlaceholder>
          <View style={styles.input} />
        </SkeletonPlaceholder>
      </View>
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
  input2: {
    height: 10,
    marginLeft: 16,
    width: 50,
    marginTop: 20,
    borderRadius: 8,
  },
  skeltonImageView: {
    width: 18,
    marginLeft: 16,
    borderWidth: 0,
    borderRadius: 18,
    height: 18,
  },
  skeltonMainView: {
    width: 50,
    margin: 5,
    borderWidth: 0,
    height: 10,
    elevation: 5,
    shadowOpacity: 0.6,
    shadowRadius: 5,
    shadowOffset: {height: 0, width: 0},
    borderRadius: 5,
  },
});
