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

      navigation.replace('DL')

    }, 2000);
  })
  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center', marginTop: hp('29%') }}>
        <Image style={{ width: wp('25%'), height: hp('21%') }} source={require('../../assets/Lt.png')} />

      </View>
      <View style={{ alignItems: 'center', marginTop: hp('-4%') }}>
        <DotIndicator size={8} color='white' />

      </View>


       <View style={{alignItems:'center' , marginTop:responsiveHeight(35)}}>

        <Image style={{width:wp('26%') , height:hp('7%') , borderRadius:10}} source={require('../../assets/DLi.png')}/>

       </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080712'
  }
})