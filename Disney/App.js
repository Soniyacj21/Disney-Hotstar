// import {View} from 'react-native';
// import Carousel from './components/Carousel.js';
// import NavigationBar from './components/NavigationBar.js';




// export default function App() {
//   return (
//       <View >
//       <Carousel/>
//       <NavigationBar/>
     
//       </View>
//   );
// }

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import Carousel from './components/Carousel.js';
import NavigationBar from './components/NavigationBar.js';
import HomeScreen from './Screens/Homescreen.js'; // Importing HomeScreen component

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* Add other screens here */}
      </Stack.Navigator>
      <View>
        <Carousel />
        <NavigationBar />
      </View>
    </NavigationContainer>
  );
}




// import 'react-native-gesture-handler';
// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import HomePage from './components/HomePage'; // Import your HomePage component
// import NavigationBar from './components/NavigationBar'; // Import your NavigationBar component

// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomePage} />
//         {/* Add other screens here if needed */}
//       </Stack.Navigator>
//       <NavigationBar />
//     </NavigationContainer>
//   );
// }

// export default App;
