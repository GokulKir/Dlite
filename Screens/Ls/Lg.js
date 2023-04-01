import { StyleSheet, Text, View, Image, ImageBackground, TouchableHighlight, TouchableOpacity } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

export default function Lg() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>

        <ImageBackground style={{ width: wp('100%'), height: hp('32%'), alignItems: 'center' }} source={require('../../assets/enj.png')}>

          <Image style={{ width: wp('30%'), height: hp('30%'), marginTop: hp('13%') }} source={require('../../assets/D.png')} />

        </ImageBackground>


       <View style={{alignItem:'center' , top:hp('6%')}}>

        {/* <Text style={{color:'#fff' , fontSize:15 , fontWeight:'bold' ,}}>
       Sign in with a Dlite account
        </Text> */}

        <Image style={{width:wp('42%') , height:hp('2.1%')}} source={require('../../assets/Wl.png')}/>
        
        </View> 

        <View style={{ alignItems: 'center', marginTop: hp('35%') }}>

          <TouchableOpacity onPress={() => navigation.navigate('Signup') } underlayColor="#DDD" style={{ width: wp('90%'), height: hp('7%'), borderWidth: 1, borderColor: '#fff', borderRadius: 20, alignItems: 'center', justifyContent: 'center' }} >

            <View style={{ alignItems: 'center', justifyContent: 'center' }}>

              <Image style={{ width: wp('9%'), height: hp('4%') }} source={require('../../assets/gmail.png')} />

            </View>


          </TouchableOpacity>





        </View>


        <View style={{ alignItems: 'center', marginTop: hp('5%') }}>

          <TouchableOpacity onPress={() => navigation.navigate('Signup') } underlayColor="#DDD" style={{ width: wp('90%'), height: hp('7%'), borderWidth: 1, borderColor: '#42eff5', borderRadius: 20, alignItems: 'center', justifyContent: 'center' }} >

            <View style={{ alignItems: 'center', justifyContent: 'center' }}>

              <Image style={{ width: wp('10%'), height: hp('5%') }} source={require('../../assets/google.png')} />

            </View>

          </TouchableOpacity>





        </View>

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