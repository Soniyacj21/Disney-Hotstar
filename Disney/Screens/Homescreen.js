// // HomeScreen.js
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const Homescreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text> hi Home Screen</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default Homescreen;

// // HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
function Homescreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }

 export default Homescreen;