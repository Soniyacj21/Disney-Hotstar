import {StyleSheet,View,Image} from 'react-native'
import React from 'react'
 export default function Homepage(){
  // const carousel=()=>{
  //   const carousel=[

  //     {
  //       image:require("../assets/img1.webp"),

  //     },
  //     {
  //       image:require("../assets/img2.webp"),

  //     }

  //   ]
  
    return(

      <View style={styles.container}>
      <Image source={require("../assets/Logo.png")} style= {styles.image} />

      {/* <View><Image source={require("../assets/img1.webp")} style={styles.img1}/></View>
      <View><Image source={require("../assets/img2.webp")} style={styles.img2}/></View>
      <View><Image source={require("../assets/img3.webp")} style={styles.img3}/></View>
       */}
    </View>
    );
 }
 const styles = StyleSheet.create({
    container: {  
    },
    image: {
      top:30,
      width: 100,
      height: 50,
    },
    img1:{
      height:200,
      width:400,
    },
    img2:{
      height:200,
      width:400,
    },
    img3:{
      height:200,
      width:400,
    },
  });
