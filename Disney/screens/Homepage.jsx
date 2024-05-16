import {StyleSheet,View, Text } from 'react-native'
import React from 'react'


 export default function Homepage(){
    return(
      
            <View style={styles.container}>
            <Text style={styles.p}> hotstar</Text>
            </View>
    );
 }


 const styles = StyleSheet.create({
    container: {
      
    },
    p:{
        color:'red',
        fontSize:30,

    },
  });
