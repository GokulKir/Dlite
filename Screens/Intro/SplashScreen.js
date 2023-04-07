import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React, { useState, useEffect } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import {
  DotIndicator
} from 'react-native-indicators';



export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {

      navigation.navigate('DL');

    }, 2000);
  })
  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center', marginTop: hp('24%') }}>
        <Image style={{ width: wp('20%'), height: hp('36%') }} source={require('../../assets/D.png')} />

      </View>
      <View style={{ alignItems: 'center', marginTop: hp('-11%') }}>
        <DotIndicator size={8} color='white' />

      </View>


       <View style={{alignItems:'center' , marginTop:responsiveHeight(30)}}>

        <Image style={{width:wp('40%') , height:hp('22%')}} source={require('../../assets/D1.png')}/>

       </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  }
})