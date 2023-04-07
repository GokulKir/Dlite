import { StyleSheet, Text, View, Button, TouchableOpacity , Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import DatePicker from 'react-native-date-picker'
import Icon from 'react-native-vector-icons/dist/AntDesign';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';

export default function Birth() {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false)
  const [day, setday] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [text, setText] = React.useState('');
  

  const navigation = useNavigation()




  return (
    <View style={styles.container}>



      {/* <View style={{ width: wp('100%'), height: hp('7%'), backgroundColor: '#000', justifyContent: "space-between", left: wp('4%'), top: hp('2%') }}>

        <TouchableOpacity onPress={() => navigation.goBack()}>


          <Icon name="arrowleft" color="#fff" size={34} />


        </TouchableOpacity>


      </View> */}

      <View style={{ alignItems: 'center'  , marginTop:hp('9%')}}>


        <View style={{ alignItems: 'center', marginTop: hp('2%') }}>

          <Text style={{ color: '#fff', fontWeight: '300', fontSize: 23 }}>What's your date of birth?</Text>


        </View>


        <View style={{ alignItems: 'center', marginTop: hp('2%') }}>

          <Text style={{ color: '#fff', fontWeight: '200', fontSize: 13  }}>Choose your date of birth. You can always make this private</Text>
          <Text style={{ color: '#fff', fontWeight: '200', fontSize: 13 , top:1 }}>later.</Text>
        </View>




        <TextInput style={{width:wp('90%') , top:hp('3%') , height:hp('6%') , borderRadius:5 , backgroundColor:'#2e3030' ,}}
      label="DD/MM/YYYY"
      right={<TextInput.Icon icon="eye" />}
    />






        <View style={{ alignItems: 'center', marginTop: hp('8%') }}>






          <TouchableOpacity  onPress={() => navigation.navigate('Gender')} style={{ width: wp('85%'), height: hp('6%'), backgroundColor: '#67f5d4', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>

            <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#000' }}>Next</Text>

          </TouchableOpacity>

        </View>


        <View style={{alignItems:'center'}}>
        <Text style={{ color: '#fff', fontWeight: '200', fontSize: 13 , top:25 }}>confirm your age for you</Text>

     

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