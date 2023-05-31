import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Icon1 from 'react-native-vector-icons/dist/FontAwesome5';
import Icon2 from 'react-native-vector-icons/dist/Entypo';
import Icon3 from 'react-native-vector-icons/dist/Fontisto';
import Icon4 from 'react-native-vector-icons/dist/Entypo';


import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

export default function Signup() {
  const [eye, setEye] = useState(false)
  const navigation = useNavigation()


  const Show = () => {
    setEye(!eye)
  }
  return (
    <View style={styles.container}>

      <ScrollView>

        <View>






          <View style={{ width: wp('100%'), height: hp('7%'), backgroundColor: '#080712', justifyContent: "space-between", left: wp('4%'), top: hp('2%') }}>

            <TouchableOpacity onPress={() => navigation.goBack()}>


              <Icon name="arrowleft" color="#fff" size={34} />


            </TouchableOpacity>





          </View>



          <View style={{ alignItems: 'center' }}>

            <View style={{ marginTop: responsiveHeight(4), color: "#fff", alignItems: 'center' }}>

              <Text style={{ color: '#fff', fontSize: responsiveFontSize(2.6), fontWeight: '400' }}>Sign up your account</Text>


              <Text style={{ color: '#fff', fontSize: responsiveFontSize(1.6), fontWeight: '200', top: responsiveHeight(1) }}>Enter your email and password.</Text>
              <Text style={{ color: '#fff', fontSize: responsiveFontSize(1.6), fontWeight: '200', top: responsiveHeight(1.2) }}>You can hide this from your profile later.</Text>

            </View>

          </View>


          <View style={{ alignItems: 'center' }}>








            <View style={{ width: responsiveWidth(90), height: responsiveHeight(5), backgroundColor: '#282929', borderRadius: 5, borderRadius: 3, flexDirection: 'row', marginTop: responsiveHeight(9) }} >

              <TextInput style={{ width: "80%", height: '100%', paddingLeft: 12, color: "#989b9c" }} placeholder="Your email" placeholderTextColor={"#989b9c"} />


              <View style={{ justifyContent: 'center', paddingLeft: 27 }}>

                <Icon2 name="email" size={23} color="#8c8f8f" />

              </View>



            </View>


            <View style={{ width: responsiveWidth(90), height: responsiveHeight(5), backgroundColor: '#282929', borderRadius: 5, borderRadius: 3, flexDirection: 'row', marginTop: responsiveHeight(3) }} >


              {eye == true ? <TextInput secureTextEntry={false} style={{ width: "80%", height: '100%', paddingLeft: 12, color: "#989b9c" }} placeholder="Your password" placeholderTextColor={"#989b9c"} />
                : <TextInput secureTextEntry={true} style={{ width: "80%", height: '100%', paddingLeft: 12, color: "#989b9c" }} placeholder="Your password" placeholderTextColor={"#989b9c"} />
              }


              <View style={{ justifyContent: 'center', paddingLeft: 27 }}>

                <TouchableOpacity onPress={() => Show()}>


                  {eye ? <Icon4 name="eye" size={23} color="#8c8f8f" /> : <Icon4 name="eye-with-line" size={23} color="#8c8f8f" />}



                </TouchableOpacity>

              </View>















            </View>


          </View>



          <View style={{ alignItems: 'center', marginTop: hp('5%') }}>


            <TouchableOpacity onPress={() => navigation.navigate('Birth')} style={{ width: wp('90%'), height: hp('4.8%'), backgroundColor: '#67f5d4', borderRadius: 4, alignItems: 'center', justifyContent: 'center' }}>

              <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#000' }}>Next</Text>

            </TouchableOpacity>

          </View>





          <View style={{ marginTop: responsiveHeight(34.5), alignItems: 'center' }} >

            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', right: wp('2%') }}>
              <Text style={{ color: '#fff' }}>Have an account already?</Text>


              <TouchableOpacity onPress={() => navigation.navigate('Login')}>

                <Text style={{ color: '#67f5d4', fontWeight: '600', marginLeft: wp('2%') }}>Login</Text>


              </TouchableOpacity>







            </View>
          </View>


        </View>

      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#080712'
  }

})


