// import React from 'react';
// import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';

// const { width } = Dimensions.get('window');

// const data = [
//   { id: 1, text: 'Slide 1' },
//   { id: 2, text: 'Slide 2' },
//   { id: 3, text: 'Slide 3' },
// ];

// const Carousel = () => {
//   const renderItem = ({ item }) => {
//     return (
//       <View style={styles.slide}>
//         <Text style={styles.text}>{item.text}</Text>
//       </View>
//     );
//   };

//   return (
//     <FlatList
//       data={data}
//       renderItem={renderItem}
//       keyExtractor={(item) => item.id.toString()}
//       horizontal
//       pagingEnabled
//       showsHorizontalScrollIndicator={false}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   slide: {
//     width,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'skyblue',
//     height: 200,
//   },
//   text: {
//     fontSize: 24,
//     color: 'white',
//   },
// });

// export default Carousel;

// import React from 'react';
// import { View, Image, FlatList, StyleSheet, Dimensions } from 'react-native';

// const { width } = Dimensions.get('window');

// const data = [
//   { id: 1, image: require('../assets/img1.webp') },
//   { id: 2, image: require('../assets/img2.webp') },
//   { id: 3, image: require('../assets/img3.webp') },

// ];

// const Carousel = () => {
//   const renderItem = ({ item }) => {
//     return (
//       <View style={styles.slide}>
//         <Image source={item.image} style={styles.image} />
//       </View>
//     );
//   };

//   return (
//     <FlatList
//       data={data}
//       renderItem={renderItem}
//       keyExtractor={(item) => item.id.toString()}
//       horizontal
//       pagingEnabled
//       showsHorizontalScrollIndicator={false}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   slide: {
//     width,
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: 200,
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'cover',
//   },
// });

// export default Carousel;
// import React, { useRef, useEffect, useState } from 'react';
// import { View, Image, FlatList, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';

// const { width } = Dimensions.get('window');

// const data = [
//   { id: 1, image: require('../assets/img1.webp') },
//   { id: 2, image: require('../assets/img2.webp') },
//   { id: 3, image: require('../assets/img3.webp') },
// ];

// const Carousel = () => {
//   const flatListRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
//     }, 3000); // Change the interval time as per your requirement (in milliseconds)

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     if (flatListRef.current) {
//       flatListRef.current.scrollToIndex({
//         index: currentIndex,
//         animated: true,
//       });
//     }
//   }, [currentIndex]);

//   const renderItem = ({ item }) => {
//     return (
//       <View style={styles.slide}>
//         <Image source={item.image} style={styles.image} />
//         <TouchableOpacity style={styles.watchNowButton}>
//           <Text style={styles.watchNowText}>Watch Now</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   };

//   const renderDots = () => {
//     return (
//       <View style={styles.dotsContainer}>
//         {data.map((_, index) => (
//           <View
//             key={index}
//             style={[styles.dot, index === currentIndex % data.length ? styles.activeDot : null]}
//           />
//         ))}
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <FlatList
//         ref={flatListRef}
//         data={[...data, ...data, ...data]} // Repeat data for looping
//         renderItem={renderItem}
//         keyExtractor={(item, index) => `${item.id}-${index}`}
//         horizontal
//         pagingEnabled
//         showsHorizontalScrollIndicator={false}
//         onMomentumScrollEnd={(event) => {
//           const index = Math.round(event.nativeEvent.contentOffset.x / width);
//           setCurrentIndex(index);
//         }}
//       />
//       {renderDots()}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   slide: {
//     width,
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: 200,
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'cover',
//   },
//   watchNowButton: {
//     position: 'absolute',
//     bottom: -20,
//     zIndex: 1, // Set the zIndex to a higher value
//     backgroundColor: 'rgba(0, 0, 0, 0.7)',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 20,
//   },
//   watchNowText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   dotsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginVertical: 10,
//   },
//   dot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: '#ccc',
//     marginHorizontal: 5,
//   },
//   activeDot: {
//     backgroundColor: 'blue', // Change color as per your requirement
//   },
// });

// export default Carousel;
  

// import React, { useRef, useEffect, useState } from 'react';
// import { View, Image, FlatList, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';

// const { width } = Dimensions.get('window');

// const data = [
//   { id: 1, image: require('../assets/img1.webp') },
//   { id: 2, image: require('../assets/img2.webp') },
//   { id: 3, image: require('../assets/img3.webp') },
// ];

// const Carousel = () => {
//   const flatListRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
//     }, 3000); // Change the interval time as per your requirement (in milliseconds)

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     if (flatListRef.current) {
//       flatListRef.current.scrollToIndex({
//         index: currentIndex,
//         animated: true,
//       });
//     }
//   }, [currentIndex]);

//   const renderItem = ({ item }) => {
//     return (
//       <View style={styles.slide}>
//         <Image source={item.image} style={styles.image} />
//         <TouchableOpacity style={styles.watchNowButton}>
//           <Text style={styles.watchNowText}>Watch Now</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   };

//   const renderDots = () => {
//     return (
//       <View style={styles.dotsContainer}>
//         {data.map((_, index) => (
//           <View
//             key={index}
//             style={[styles.dot, index === currentIndex % data.length ? styles.activeDot : null]}
//           />
//         ))}
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <FlatList
//         ref={flatListRef}
//         data={[...data, ...data, ...data]} // Repeat data for looping
//         renderItem={renderItem}
//         keyExtractor={(item, index) => `${item.id}-${index}`}
//         horizontal
//         pagingEnabled
//         showsHorizontalScrollIndicator={false}
//         onMomentumScrollEnd={(event) => {
//           const index = Math.round(event.nativeEvent.contentOffset.x / width);
//           setCurrentIndex(index);
//         }}
//       />
//       {renderDots()}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   slide: {
//     width,
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: 200,
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'cover',
//   },
//   watchNowButton: {
//     position: 'absolute',
//     bottom: -20,
//     zIndex: 1, // Set the zIndex to a higher value
//     backgroundColor: 'rgba(0, 0, 0, 0.7)',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 20,
//   },
//   watchNowText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   dotsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginVertical: 10,
//   },
//   dot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: '#ccc',
//     marginHorizontal: 5,
//   },
//   activeDot: {
//     backgroundColor: 'blue', // Change color as per your requirement
//   },
// });

// export default Carousel;
// import React, { useRef, useEffect, useState } from 'react';
// import { View, Image, FlatList, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';

// const { width } = Dimensions.get('window');

// const data = [
//   { id: 1, image: require('../assets/img1.webp') },
//   { id: 2, image: require('../assets/img2.webp') },
//   { id: 3, image: require('../assets/img3.webp') },
// ];

// const Carousel = () => {
//   const flatListRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
//     }, 3000); // Change the interval time as per your requirement (in milliseconds)

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     if (flatListRef.current) {
//       flatListRef.current.scrollToIndex({
//         index: currentIndex,
//         animated: true,
//       });
//     }
//   }, [currentIndex]);

//   const renderItem = ({ item }) => {
//     return (
//       <View style={styles.slide}>
//         <Image source={item.image} style={styles.image} />
//         <TouchableOpacity style={styles.watchNowButton}>
//           <Text style={styles.watchNowText}>Watch Now</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <FlatList
//         ref={flatListRef}
//         data={[...data, ...data, ...data]} // Repeat data for looping
//         renderItem={renderItem}
//         keyExtractor={(item, index) => `${item.id}-${index}`}
//         horizontal
//         pagingEnabled
//         showsHorizontalScrollIndicator={false}
//         onMomentumScrollEnd={(event) => {
//           const index = Math.round(event.nativeEvent.contentOffset.x / width);
//           setCurrentIndex(index);
//         }}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   slide: {
//     width,
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: 200,
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'cover',
//   },
//   watchNowButton: {
//     position: 'absolute',
//     bottom: -20,
//     zIndex: 1, // Set the zIndex to a higher value
//     backgroundColor: 'rgba(0, 0, 0, 0.7)',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 20,
//   },
//   watchNowText: {
//     color: '#fff',
//     fontSize: 16,
//   },
// });

// export default Carousel;

// import React from 'react';
// import { View, Image, FlatList, StyleSheet, Dimensions } from 'react-native';

// const { width } = Dimensions.get('window');

// const data = [
//   { id: 1, imagePath: require('../assets/img1.webp') },
//   { id: 2, imagePath: require('../assets/img2.webp') },
//   { id: 3, imagePath: require('../assets/img3.webp') },
// ];

// const Carousel = () => {
//   const renderItem = ({ item }) => {
//     return (
//       <View style={styles.slide}>
//         <Image source={item.imagePath} style={styles.image} />
//       </View>
//     );
//   };

//   return (
//     <FlatList
//       data={data}
//       renderItem={renderItem}
//       keyExtractor={(item) => item.id.toString()}
//       horizontal
//       pagingEnabled
//       showsHorizontalScrollIndicator={false}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   slide: {
//     width,
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: 200,
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'cover',
//   },
// });

// export default Carousel;

// import React, { useRef, useEffect, useState } from 'react';
// import { View, Image, FlatList, StyleSheet, Dimensions } from 'react-native';

// const { width } = Dimensions.get('window');

// const data = [
//   { id: 1, imagePath: require('../assets/img1.webp') },
//   { id: 2, imagePath: require('../assets/img2.webp') },
//   { id: 3, imagePath: require('../assets/img3.webp') },
// ];

// const Carousel = () => {
//   const flatListRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const nextIndex = (currentIndex + 1) % data.length;
//       flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
//       setCurrentIndex(nextIndex);
//     }, 3000); // Adjust the interval as needed

//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, [currentIndex]);

//   const renderItem = ({ item }) => {
//     return (
//       <View style={styles.slide}>
//         <Image source={item.imagePath} style={styles.image} />
//       </View>
//     );
//   };

//   return (
//     <View>
//       <FlatList
//         ref={flatListRef}
//         data={data}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id.toString()}
//         horizontal
//         pagingEnabled
//         showsHorizontalScrollIndicator={false}
//       />
//       <View style={styles.dotsContainer}>
//         {data.map((_, index) => (
//           <View key={index} style={[styles.dot, index === currentIndex && styles.activeDot]} />
//         ))}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   slide: {
//     width,
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: 200,
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'cover',
//   },
//   dotsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   dot: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     backgroundColor: 'gray',
//     marginHorizontal: 5,
//   },
//   activeDot: {
//     backgroundColor: 'white',
//   },
// });



// export default Carousel;

// import React, { useRef, useEffect, useState } from 'react';
// import { View, Image, FlatList, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';

// const { width } = Dimensions.get('window');

// const data = [
//   { id: 1, imagePath: require('../assets/img1.webp') },
//   { id: 2, imagePath: require('../assets/img2.webp') },
//   { id: 3, imagePath: require('../assets/img3.webp') },
// ];

// const Carousel = () => {
//   const flatListRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const nextIndex = (currentIndex + 1) % data.length;
//       flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
//       setCurrentIndex(nextIndex);
//     }, 3000); // Adjust the interval as needed

//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, [currentIndex]);

//   const renderItem = ({ item }) => {
//     return (
//       <View style={styles.slide}>
//         <Image source={item.imagePath} style={styles.image} />
//       </View>
//     );
//   };

//   const handleWatchNow = () => {
//     // Handle "Watch Now" button press
//     console.log("Watch Now button pressed");
//   };

//   return (
//     <View>
//       <FlatList
//         ref={flatListRef}
//         data={data}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id.toString()}
//         horizontal
//         pagingEnabled
//         showsHorizontalScrollIndicator={false}
//       />
//       <TouchableOpacity style={styles.watchNowButton} onPress={handleWatchNow}>
//         <Text style={styles.watchNowButtonText}>Watch Now</Text>
//       </TouchableOpacity>
//       <View style={styles.dotsContainer}>
//         {data.map((_, index) => (
//           <View key={index} style={[styles.dot, index === currentIndex && styles.activeDot]} />
//         ))}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   slide: {
//     width,
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: 200,
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'cover',
//   },
//   dotsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   dot: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     backgroundColor: 'gray',
//     marginHorizontal: 5,
//   },
//   activeDot: {
//     backgroundColor: 'white',
//   },
//   watchNowButton: {
//     alignSelf: 'center',
//     marginTop: 10,
//     backgroundColor: 'black',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//   },
//   watchNowButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });

// export default Carousel;

import React, { useRef, useEffect, useState } from 'react';
import { View, Image, FlatList, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
import List from './List';

const { width } = Dimensions.get('window');

const data = [
  { id: 1, imagePath: require('../assets/img1.webp') },
  { id: 2, imagePath: require('../assets/img2.webp') },
  { id: 3, imagePath: require('../assets/img3.webp') },
];

const Carousel = () => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % data.length;
      flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }, 3000); // Adjust the interval as needed

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex]);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.imagePath} style={styles.image} />
      </View>
    );
  };

  const handleWatchNow = () => {

    console.log("Watch Now button pressed");
  };

  const handlePlus = () => {

    console.log("Plus button pressed");
  };

  return (
    <View style={styles.imagecontainer}>
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.buttonContainer}>
         <Text style={styles.sliderlist}>
          Tamil . Romance .Crime
         </Text>
        <TouchableOpacity style={styles.watchNowButton} onPress={handleWatchNow}>
         
          <Text style={styles.watchNowButtonText}>Watch Now</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.plusButton} onPress={handlePlus}>
          <Text style={styles.plusButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.dotsContainer}>
        {data.map((_, index) => (
          <View key={index} style={[styles.dot, index === currentIndex && styles.activeDot]} />
        ))}
      </View>
      <Text style={styles.listhead}>
          Latest Release
         </Text>
      <List/>
    </View>
  );
};

const styles = StyleSheet.create({
  imagecontainer:{
    backgroundColor:'black',
    height:750,
  },
  sliderlist:{
   color:'white',
   top:-220,
   left:90,
  },
  listhead:{
    color:'white',
    top:-150,
    left:15,
   },
  slide: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height:15,
    
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 5,
    backgroundColor: 'gray',
    marginHorizontal: 10,
    bottom:165,
    
  },
  activeDot: {
    backgroundColor: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  watchNowButton: {
    backgroundColor: 'rgba(250,247,251,0.1)', // Updated background color to #d3d3d3
    paddingHorizontal: 25,
    paddingVertical: 6,
    borderRadius: 5,
    bottom: 175,
    left: -75,
  },
  
  watchNowButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize:20,
  },
  plusButton: {
    backgroundColor: 'rgba(250,247,251,0.1)',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 5,
    bottom:175,
    left:-50,
    
  },
  plusButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize:20,
  },
});

export default Carousel;
