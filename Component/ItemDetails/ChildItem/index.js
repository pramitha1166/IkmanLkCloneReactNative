import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import adds from '../../HomeScreen/AddList/adds';

export default (ChildItem = ({
  item,
  style,
  onPress,
  index,
  imageKey,
  local,
  height
}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.container}
      onPress={() => onPress(index)}>
      <Image
        style={[styles.images, style, {height: 300}]}
        source={item}
      />
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
  },
  image: {
    height: 230,
    resizeMode: 'stretch',
  },
});