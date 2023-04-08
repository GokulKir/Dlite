import { StyleSheet, Text, View, Button, TouchableOpacity, Platform, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import DatePicker from 'react-native-date-picker'
import Icon from 'react-native-vector-icons/dist/Entypo';
import Icon1 from 'react-native-vector-icons/dist/FontAwesome';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

export default function Birth() {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false)
  const [day, setday] = useState()
  const [month, setMonth] = useState()
  const [year, setYear] = useState()
  const [text, setText] = React.useState('');
  const [val, setVal] = useState()

  useEffect(() => {
    setMonth(date.getMonth() + 1)
    setday(date.getDate())
    setYear(date.getFullYear())
      setVal(month < 10 ?  0 : '')
  })


  const navigation = useNavigation()




  return (
    <View style={styles.container}>



      {/* <View style={{ width: wp('100%'), height: hp('7%'), backgroundColor: '#000', justifyContent: "space-between", left: wp('4%'), top: hp('2%') }}>

        <TouchableOpacity onPress={() => navigation.goBack()}>


          <Icon name="arrowleft" color="#fff" size={34} />


        </TouchableOpacity>


      </View> */}


      <View style={{ alignItems: "center", top: responsiveHeight(8) }}>

        <Icon1 name="birthday-cake" size={35} color="#fff" />


      </View>

      <View style={{ alignItems: 'center', marginTop: hp('9%') }}>


        <View style={{ alignItems: 'center', marginTop: hp('2%') }}>

          <Text style={{ color: '#fff', fontWeight: '300', fontSize: 23 }}>What's your date of birth?</Text>


        </View>


        <View style={{ alignItems: 'center', marginTop: hp('2%') }}>

          <Text style={{ color: '#fff', fontWeight: '200', fontSize: 13 }}>Choose your date of birth. You can always make this private</Text>
          <Text style={{ color: '#fff', fontWeight: '200', fontSize: 13, top: 1 }}>later.</Text>
        </View>



        <View style={{ width: responsiveWidth(90), height: responsiveHeight(5), backgroundColor: '#282929', borderRadius: 5, borderRadius: 3, flexDirection: 'row', marginTop: responsiveHeight(7), left: responsiveWidth(1) }} >

          {open ? <TextInput keyboardType='numeric' style={{ width: "80%", height: '100%', paddingLeft: 12, color: "#989b9c" }} placeholder="DD / MM / YYYY" placeholderTextColor={"#989b9c"} value={'DD / MM / YYYY '} /> :


            <TextInput keyboardType='numeric' style={{ width: "80%", height: '100%', paddingLeft: 12, color: "#989b9c" }} placeholder="DD / MM / YYYY" placeholderTextColor={"#989b9c"} value={day + ' / ' + val+month + ' / ' + year} />

          }

          <TouchableOpacity onPress={() => setOpen(true)} style={{ justifyContent: 'center', paddingLeft: 15 }}>

            <DatePicker
              modal
              open={open}
              date={date}
              textColor="#67f5d4"
              theme="dark"
              mode="date"
              onConfirm={(date) => {
                setOpen(false)
                setDate(date)
              }}
              onCancel={() => {
                setOpen(false)
              }}
            />

            <Icon name="calendar" size={23} color="#8c8f8f" />

          </TouchableOpacity>



        </View>





        <View style={{ alignItems: 'center', marginTop: hp('5%') }}>






          <TouchableOpacity onPress={() => navigation.navigate('Gender')} style={{ width: wp('90%'), height: hp('4.8%'), backgroundColor: '#67f5d4', borderRadius: 4, alignItems: 'center', justifyContent: 'center' }}>

            <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#000' }}>Next</Text>

          </TouchableOpacity>

        </View>


        <View style={{ alignItems: 'center' }}>
          <Text style={{ color: '#fff', fontWeight: '200', fontSize: 13, top: 25 }}>confirm your age for you</Text>



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