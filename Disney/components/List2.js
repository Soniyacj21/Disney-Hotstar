import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MovieCard = ({ movie, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(movie)}>
      <View style={styles.movieCard}>
        <Image source={{ uri: movie.posterURL }} style={styles.poster} />
       
      </View>
    </TouchableOpacity>
  );
};

const List = () => {
  const navigation = useNavigation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch('https://api.sampleapis.com/movies/drama');
        const data = await resp.json();
        setMovies(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleMoviePress = (movie) => {
    navigation.navigate('MovieDetail', { movie });
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} onPress={handleMoviePress} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    flexDirection: 'row',
    bottom:-100,
  },
  movieCard: {
    
    height:80,
    alignItems: 'center',
    marginRight: 5,
  },
  poster: {
    width: 130,
    height: 150,
    marginBottom: 5,
  },
});

export default List;
