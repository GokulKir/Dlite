import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Icon1 from 'react-native-vector-icons/dist/FontAwesome5';
import Icon2 from 'react-native-vector-icons/dist/Entypo';
import Icon3 from 'react-native-vector-icons/dist/Fontisto';
import Icon4 from 'react-native-vector-icons/dist/Entypo';
import { useNavigation } from '@react-navigation/native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

export default function Login() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>

      <ScrollView>

        <View style={{ alignItems: 'center' }}>


          <View style={{ width: wp('100%'), height: hp('7%'), backgroundColor: '#080712', justifyContent: "space-between", left: wp('4%'), top: hp('2%') }}>

            <TouchableOpacity onPress={() => navigation.goBack()}>


              <Icon name="arrowleft" color="#fff" size={34} />


            </TouchableOpacity>





          </View>


          <View>



            <View style={{ alignItems: 'center', marginTop:responsiveHeight(2) }}>

              <Text style={{ color: '#fff', fontWeight: '400', fontSize:responsiveFontSize(2.6) }}>Welcome  Back!</Text>


            </View>


            <View style={{ alignItems: 'center', marginTop: responsiveHeight(1) }}>

              <Text style={{ color: '#fff', fontWeight: '200', fontSize: 13 }}>Login to continue</Text>

            </View>





            <View style={{  width: responsiveWidth(90) , height: responsiveHeight(5), backgroundColor: '#282929', borderRadius: 5, borderRadius: 3, flexDirection: 'row', marginTop: responsiveHeight(9)}} >

              <TextInput style={{ width: "80%", height: '100%', paddingLeft: 12, color: "#989b9c" }} placeholder="Your email" placeholderTextColor={"#989b9c"} />


              <View style={{ justifyContent: 'center', paddingLeft: 27 }}>

                <Icon2 name="email" size={23} color="#8c8f8f" />

              </View>



            </View>



            <View style={{  width: responsiveWidth(90) , height: responsiveHeight(5), backgroundColor: '#282929', borderRadius: 5, borderRadius: 3, flexDirection: 'row', marginTop: responsiveHeight(3) }} >

              <TextInput secureTextEntry={true} style={{ width: "80%", height: '100%', paddingLeft: 12, color: "#989b9c" }} placeholder="Your password" placeholderTextColor={"#989b9c"} />

              <View style={{ justifyContent: 'center', paddingLeft: 27 }}>

                <Icon3 name="locked" size={23} color="#8c8f8f" />

              </View>



            </View>







          </View>

          <View style={{ justifyContent: 'space-evenly' }}>

            <TouchableOpacity onPress={() => navigation.navigate('Mobile')}>

              <Text style={{ color: '#575c5c', marginLeft: wp('50%'), marginTop: hp('2%'), }}>Forgot Password?</Text>

            </TouchableOpacity>




          </View>



      
          <View style={{ alignItems: 'center', marginTop: hp('5%') }}>


            <TouchableOpacity onPress={() => navigation.navigate('Signup')} style={{ width: wp('90%'), height: hp('4.8%'), backgroundColor: '#67f5d4', borderRadius: 4, alignItems: 'center', justifyContent: 'center' }}>

              <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#000' }}>Login</Text>

            </TouchableOpacity>

          </View>



        </View>



        <View style={{ alignItems: 'center', marginTop: responsiveHeight(3) }}>


          <TouchableOpacity style={{width:responsiveWidth(80) , height:responsiveHeight(7) , alignItems:'center' , justifyContent:'center'}} onPress={() => navigation.navigate('Username')}>


            <Text style={{ color: '#fff' }}>Create new account </Text>



          </TouchableOpacity>



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