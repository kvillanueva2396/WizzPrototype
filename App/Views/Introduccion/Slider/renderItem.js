import React from 'react';
import {Text, Image, View} from 'react-native';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  image: {
    height: 430,
    width: 430,
  },
  title: {
    marginTop: 40,
    marginBottom: 20,
    fontWeight: 'bold',
    fontSize: 22,
  },
  text: {
    flex: 2,
    textAlign: 'center',
    fontSize: 16,
  },
});

export const renderItem = ({item}) => (
  <View
    style={{
      flex: 1,
      backgroundColor: item.backgroundColor,
      alignItems: 'center',
      justifyContent: 'space-around',
    }}>
    <Image style={styles.image} source={item.image} />
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.text}>{item.text}</Text>
  </View>
);
