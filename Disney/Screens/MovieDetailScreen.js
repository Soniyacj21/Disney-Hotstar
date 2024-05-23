import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import List2 from '../components/List2';

const MovieDetailScreen = ({ route }) => {
  const { movie } = route.params;
  const navigation = useNavigation();

  const handleBackToHome = () => {
    navigation.navigate('Home');
  };
  const handleWatchNow = () => {
};
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBackToHome} style={styles.backButton}>
      <Text style={[styles.backButtonText, { fontSize: 20, fontWeight: '200' }]}>✖︎</Text>


      </TouchableOpacity>
      <Text style={[styles.backButtonText, { fontSize: 20, fontWeight: '200' }]}>✖︎</Text>

      <Text style={styles.title}>{movie.title}</Text>
      <Image source={{ uri: movie.posterURL }} style={styles.poster} />
      <Text style={styles.Sliderlist}>
          2024 . 5 Seasons .English
         </Text>
      <TouchableOpacity style={styles.WatchNowButton} onPress={handleWatchNow}>  
         <Text style={styles.WatchNowButtonText}>Watch Now</Text>
       </TouchableOpacity>

      <Text style={styles.Sliderlist1}>
           Action  | Adventure |  Drama  |  Animation  |  God Vs EVil 
      </Text>

     <Text style={styles.Slidercontent}>
     Experinece rock and roll royalty with Queen as they take to the stages in an historic and exhilarating live concert from 1992
    </Text>
    
     <List2/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height:300,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor:'black',
    top:-8,
  },
  poster: {
    width: '100%',
    height: '40%',
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: -20,
    color:'white',
  },
  year: {
    fontSize: 18,
    color: '#888',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  backButtonText: {
    color: 'white',
    fontSize: 20,
  },
  WatchNowButton: {
    backgroundColor: 'white', 
    paddingHorizontal: 125,
    paddingVertical: 13,
    borderRadius: 5,
    bottom: -65,
    
  },
  
  WatchNowButtonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize:20,
  },
  Sliderlist:{
    color:'white',
    top:50,
  },
  Sliderlist1:{
    color:'white',
    top:70,
  },
  Slidercontent:{
    color:'white',
    top:100,
  },
  backButtonText:{
    color:'white',
    left:320,
    fontSize:20,
    
  },
});

export default MovieDetailScreen;
