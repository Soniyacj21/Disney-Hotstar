import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Homepage from './components/Homepage.js';
import Carousel from './components/Carousel.js';
export default function App() {
  return (
    <View>
      <Homepage/>
      <Carousel/>
    </View>
  );
}

