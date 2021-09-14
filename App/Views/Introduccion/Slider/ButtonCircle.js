import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 20,
    height: 20,
  },
});

export const RenderButton = () => {
  const renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Image
          style={styles.image}
          source={require('../../../Assets/Icons/right-arrow.png')}
        />
      </View>
    );
  };

  const renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Image
          style={styles.image}
          source={require('../../../Assets/Icons/tick.png')}
        />
      </View>
    );
  };

  return {
    renderNextButton,
    renderDoneButton,
  };
};
