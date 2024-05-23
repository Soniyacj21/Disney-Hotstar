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
    }, 3000); 

    return () => clearInterval(interval); 
  }, [currentIndex]);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.imagePath} style={styles.image} />
      </View>
    );
  };

  const handleWatchNow = () => {
  };

  const handlePlus = () => {
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
    height:760,
  },
  sliderlist:{
    backgroundColor:'black',
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
    backgroundColor: 'rgba(250,247,251,0.1)', 
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
