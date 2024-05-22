import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const MovieCard = ({ title, description, year, rating, posterURL }) => {
  return (
    <View style={styles.movieCard}>
      <Image source={{ uri: posterURL }} style={styles.poster} />
      <Text>{title}</Text>
      <Text>{year}</Text>
    </View>
  );
};

const List = () => {
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

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            title={movie.title}
            description={movie.description}
            year={movie.year}
            rating={movie.rating}
            posterURL={movie.posterURL}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   
    top: -145,
     flex: 1,
     padding: 5,
     flexDirection: 'row',
  },
  movieCard: {
    alignItems: 'center',
    marginRight: 5,
  },
  poster: {
    width: 120,
    height: 150,
    marginBottom: 5,
  },
});

export default List;
