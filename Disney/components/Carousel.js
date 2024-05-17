import {StyleSheet,View,Image, Dimensions,Animated} from 'react-native'
import React, { useState } from 'react'
import Carousel from 'react-native-reanimated-carousel'
 export default function AppCarousel(){
  const [pagingEnabled,setPageEnabled]=useState(true)
  const width = Dimensions.get('window').width
  const list=[
    {
            image:require("../assets/img1.webp"),
           },
          {
            image:require("../assets/img2.webp"),
    
           }
  ]
    return(
      <View style={{ flex:1}}>
        <Carousel
        width={width}
        height={width/2}
        data={list}
        autoPlay={true}
        pagingEnabled={pagingEnabled}
        scrollAnimationDuration={1000}
        renderItem={({item})=>(
          <View style={styles.CarouselItem}>
            <Image style={styles.img} source={item.image}/>
          </View>
        )}
        />
      </View>
    );
 }
 const styles = StyleSheet.create({
    CarouselItem:{
      flex1,
      justifyContent:'center',
      overflow:'hidden',
    },
    img1:{
      height:'100%',
      width:'100%',
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
