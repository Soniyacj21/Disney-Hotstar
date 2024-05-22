// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

// const NavigationBar = () => {
//   return (
//     <View style={styles.navigationBar}>
//       <Icon name="home" size={30} color="white" style={styles.icon} />
//       <Icon name="search" size={30} color="white" style={styles.icon} />
//       <Icon name="flame" size={30} color="white" style={styles.icon} />
//       <Icon name="download" size={30} color="white" style={styles.icon} />
//       <Icon name="person" size={30} color="white" style={styles.icon} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   navigationBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     backgroundColor: 'black',
//     height: 50,
//     position: 'absolute',
//     bottom:-35,
//     left: 0,
//     right: 0,
    
//   },
//   icon: {
//     marginHorizontal: 15,
//   },
// });

// export default NavigationBar;


// import React, { useState } from 'react';
// import { View, StyleSheet, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

// const NavigationBar = () => {
//   const [activeScreen, setActiveScreen] = useState('home'); // State to manage active screen

//   const navigateToScreen = (screen) => {
//     setActiveScreen(screen);
//   };

//   return (
//     <View style={styles.navigationBar}>
//       <TouchableOpacity onPress={() => navigateToScreen('home')}>
//         <Icon name="home" size={30} color={activeScreen === 'home' ? 'blue' : 'white'} style={styles.icon} />
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigateToScreen('search')}>
//         <Icon name="search" size={30} color={activeScreen === 'search' ? 'blue' : 'white'} style={styles.icon} />
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigateToScreen('flame')}>
//         <Icon name="flame" size={30} color={activeScreen === 'flame' ? 'blue' : 'white'} style={styles.icon} />
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigateToScreen('download')}>
//         <Icon name="download" size={30} color={activeScreen === 'download' ? 'blue' : 'white'} style={styles.icon} />
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigateToScreen('person')}>
//         <Icon name="person" size={30} color={activeScreen === 'person' ? 'blue' : 'white'} style={styles.icon} />
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   navigationBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     backgroundColor: 'black',
//     height: 50,
//     position: 'absolute',
//     bottom: -35,
//     left: 0,
//     right: 0,
//   },
//   icon: {
//     marginHorizontal: 15,
//   },
// });

// export default NavigationBar;


// import React from 'react';
// import { View, StyleSheet, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import Homescreen from '../Screens/Homescreen'; // Importing HomeScreen component

// const NavigationBar = () => {
//   const navigation = useNavigation(); // Hook to access navigation object

//   const navigateToScreen = (Screens) => {
//     switch(Screens) {
//       case 'home':
//         navigation.navigate('Homescreen'); // Navigate to HomeScreen
//         break;
//       case 'search':
//         navigation.navigate('Searchscreen'); // Navigate to Search screen
//         break;
//       // Add cases for other screens here
//       default:
//         break;
//     }
//   };

//   return (
//     <View style={styles.navigationBar}>
//       <TouchableOpacity onPress={() => navigateToScreen('Home')}>
//         <Icon name="home" size={30} color="white" style={styles.icon} />
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigateToScreen('Search')}>
//         <Icon name="search" size={30} color="white" style={styles.icon} />
//       </TouchableOpacity>
//       {/* Add TouchableOpacity components for other screens */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   navigationBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     backgroundColor: 'black',
//     height: 50,
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//   },
//   icon: {
//     marginHorizontal: 15,
//   },
// });

// export default NavigationBar;


import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const NavigationBar = () => {
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.navigationBar}>
      <TouchableOpacity onPress={() => navigateToScreen('Home')}>
        <Icon name="home" size={30} color="white" style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen('Search')}>
        <Icon name="search" size={30} color="white" style={styles.icon} />
      </TouchableOpacity>
      {/* Add more TouchableOpacity components for other screens */}
    </View>
  );
};

const styles = StyleSheet.create({
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'black',
    height: 50,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  icon: {
    marginHorizontal: 15,
  },
});

export default NavigationBar;
