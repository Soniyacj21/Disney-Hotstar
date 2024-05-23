

import React from 'react';
import { View, Text } from 'react-native';
import Carousel from '../components/Carousel';

export default function Homescreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Carousel />
    </View>
  );
}
