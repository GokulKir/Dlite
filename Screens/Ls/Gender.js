import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function Gender(props) {
  const [isSelected, setIsSelected] = useState(0)
  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>


        <View style={{ alignItems: 'center', marginTop: hp('7%') }}>

          <Text style={{ color: '#fff', fontWeight: '300', fontSize: 23 }}>What is Your Gender?</Text>

        </View>


        <View style={{ alignItems: 'center', marginTop: hp('2%') }}>

          <Text style={{ color: '#fff', fontWeight: '200', fontSize: 13 }}>Select your gender </Text>

        </View>



        <View style={{ alignItems: 'center', top: hp('12%'), flexDirection: 'row', justifyContent: "space-between" }}>

          <View style={{ alignItems: 'center', left: wp('-4%') }}>

            <TouchableOpacity onPress={() => setIsSelected(1)} style={{ width: wp('25%'), height: hp('13%'), borderRadius: 10, borderWidth: 1, borderColor: isSelected === 1 ? '#67f5d4' : '#2e3030', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="male" color="#2e3030" size={54} />
            </TouchableOpacity>

            <Text style={{ color: '#989b9c', top: 12 }}>Male</Text>

          </View>

          <View style={{ alignItems: 'center' }}>

            <TouchableOpacity onPress={() => setIsSelected(2)} style={{ width: wp('25%'), height: hp('13%'), borderRadius: 10, borderWidth: 1, borderColor: isSelected === 2 ? '#67f5d4' : '#2e3030', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="female" color="#2e3030" size={54} />
            </TouchableOpacity>

            <Text style={{ color: '#989b9c', top: 12 }}>Female</Text>

          </View>


          <View style={{ alignItems: 'center', left: wp('4%') }}>

            <TouchableOpacity onPress={() => setIsSelected(3)} style={{ width: wp('25%'), height: hp('13%'), borderRadius: 10, borderWidth: 1, borderColor: isSelected === 3 ? '#67f5d4' : '#2e3030', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="male-female" color="#2e3030" size={54} />
            </TouchableOpacity>

            <Text style={{ color: '#989b9c', top: 12 }}>Others</Text>

          </View>

        </View>

        <View style={{ alignItems: 'center' }}>


          <Text style={{ color: '#2e3030', fontWeight: '400', marginTop: hp('25%') }}>Gender is only used for verification purposes.</Text>


        </View>


        <View style={{ flexDirection: 'row', marginTop: hp('2%') }}>

          <Text style={{ color: '#67f5d4', fontWeight: '300' }}>Accept terms and conditions</Text>

          <BouncyCheckbox style={{ left: 12, top: -2 }}
            size={25}
            fillColor="blue"
            unfillColor="#FFFFFF"

            iconStyle={{ borderColor: "" }}
            innerIconStyle={{ borderWidth: 2 }}
            textStyle={{ fontFamily: "JosefinSans-Regular" }}

          />


        </View>



        <View style={{ alignItems: 'center', marginTop: hp('16%') }}>


          <TouchableOpacity style={{ width: wp('85%'), height: hp('7%'), backgroundColor: '#67f5d4', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>

            <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#000' }}>Continue</Text>

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