import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';

export default function Gender(props) {
  const [isSelected, setIsSelected] = useState(0)
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>


        <View style={{ alignItems: 'center', marginTop: hp('7%') }}>

          <Text style={{ color: '#fff', fontWeight: '300', fontSize: 23 }}>What's your gender?</Text>

        </View>


        <View style={{ alignItems: 'center', marginTop: hp('2%') }}>

          <Text style={{ color: '#fff', fontWeight: '200', fontSize: 13 }}>You can change who seen your gender on your profile later.</Text>

        </View>


        <View style={{ alignItems: 'center', marginTop: responsiveHeight(8) }}>

          <TouchableOpacity onPress={() => setIsSelected(1)} style={{ width: responsiveScreenWidth(90), height: responsiveHeight(5), borderBottomColor: '#282929', borderBottomWidth: 3 }}>

            <View style={{ flexDirection: 'row', alignItems: 'center', top: 6, left: 5, justifyContent: 'space-between' }}>

              <Text style={{ color: '#989b9c', fontWeight: "400", fontSize: responsiveFontSize(1.9) }}>Female</Text>


              <View style={{ width: responsiveWidth(4), height: responsiveWidth(4), borderWidth: 1, borderColor: isSelected == 1 ? '#67f5d4' : "#fff", borderRadius: responsiveScreenWidth(100), left: responsiveWidth(-6), alignItems: 'center', justifyContent: 'center' }}>

                {isSelected == 1 ?

                  <View style={{ width: responsiveWidth(2), height: responsiveWidth(2), backgroundColor: '#67f5d4', borderRadius: responsiveWidth(100) }}>

                  </View>


                  : null}

              </View>

            </View>

          </TouchableOpacity>

        </View>



        <View style={{ alignItems: 'center', marginTop: responsiveHeight(3) }}>

          <TouchableOpacity onPress={() => setIsSelected(2)} style={{ width: responsiveScreenWidth(90), height: responsiveHeight(5), borderBottomColor: '#282929', borderBottomWidth: 3 }}>

            <View style={{ flexDirection: 'row', alignItems: 'center', top: 6, left: 5, justifyContent: 'space-between' }}>

              <Text style={{ color: '#989b9c', fontWeight: "400", fontSize: responsiveFontSize(1.9) }}>Male</Text>


              <View style={{ width: responsiveWidth(4), height: responsiveWidth(4), borderWidth: 1, borderColor: isSelected == 2 ? '#67f5d4' : "#fff", borderRadius: responsiveScreenWidth(100), left: responsiveWidth(-6), alignItems: 'center', justifyContent: 'center' }}>

                {isSelected == 2 ?

                  <View style={{ width: responsiveWidth(2), height: responsiveWidth(2), backgroundColor: '#67f5d4', borderRadius: responsiveWidth(100) }}>

                  </View>


                  : null}

              </View>



            </View>

          </TouchableOpacity>

        </View>




        <View style={{ alignItems: 'center', marginTop: responsiveHeight(3) }}>

          <TouchableOpacity onPress={() => setIsSelected(3)} style={{ width: responsiveScreenWidth(90), height: responsiveHeight(5), borderBottomColor: '#282929', borderBottomWidth: 3 }}>

            <View style={{ flexDirection: 'row', alignItems: 'center', top: 6, left: 5, justifyContent: 'space-between' }}>

              <Text style={{ color: '#989b9c', fontWeight: "400", fontSize: responsiveFontSize(1.9) }}>Custom</Text>


              <View style={{ width: responsiveWidth(4), height: responsiveWidth(4), borderWidth: 1, borderColor: isSelected == 3 ? '#67f5d4' : "#fff", borderRadius: responsiveScreenWidth(100), left: responsiveWidth(-6), alignItems: 'center', justifyContent: 'center' }}>

                {isSelected == 3 ?

                  <View style={{ width: responsiveWidth(2), height: responsiveWidth(2), backgroundColor: '#67f5d4', borderRadius: responsiveWidth(100) }}>

                  </View>


                  : null}

              </View>

            </View>

          </TouchableOpacity>

        </View>




        <View style={{ alignItems: 'center', marginTop: hp('5%') }}>


          <TouchableOpacity onPress={() => navigation.navigate('Finish')} style={{ width: wp('90%'), height: hp('4.8%'), backgroundColor: '#67f5d4', borderRadius: 4, alignItems: 'center', justifyContent: 'center' }}>

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




    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080712'
  }
})