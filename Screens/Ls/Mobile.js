import { StyleSheet, Text, View  , TouchableOpacity} from 'react-native'
import React,{useState , useEffect , useRef} from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Icon1 from 'react-native-vector-icons/dist/FontAwesome5';
import Icon2 from 'react-native-vector-icons/dist/Entypo';
import Icon3 from 'react-native-vector-icons/dist/Fontisto';
import Icon4 from 'react-native-vector-icons/dist/Entypo';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';
import {Picker} from '@react-native-picker/picker';
import CountryPicker ,{DARK_THEME} from 'react-native-country-picker-modal';
import { forModalPresentationIOS } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';




export default function Mobile() {
    const navigation = useNavigation()
    const [number , setNumber] = useState()
    const [countryCode, setCountryCode] = useState('FR')
    const [Page , setPage] = useState(false)
    const [country, setCountry] = useState(null)
    const [withCountryNameButton, setWithCountryNameButton] = useState()
    const [withFlag, setWithFlag] = useState(true)
    const [withEmoji, setWithEmoji] = useState(true)
    const [withFilter, setWithFilter] = useState(true)
    const [withAlphaFilter, setWithAlphaFilter] = useState(false)
    const [withCallingCode, setWithCallingCode] = useState(false)
    const onSelect = (country: Country) => {
      setCountryCode(country.cca2)
      setCountry(country)
    }
    const pickerRef = useRef();


    function open() {
        pickerRef.current.focus();
      }
      
      function close() {
        pickerRef.current.blur();
      }

      

  return (

  
    
    <View style={styles.container}>

     <View>


      




<View style={{ width: wp('100%'), height: hp('7%'), backgroundColor: '#000', justifyContent: "space-between", left: wp('4%'), top: hp('2%') }}>

<TouchableOpacity onPress={() => navigation.goBack()}>


  <Icon name="arrowleft" color="#fff" size={34} />


</TouchableOpacity>


</View>


<View style={{alignItems:'center'}}>


<View style={{ alignItems: 'center', marginTop: hp('7%') }}>

<Text style={{ color: '#fff', fontWeight: '300', fontSize: 23 }}>Enter your phone number</Text>


</View>



<View style={{ alignItems: 'center', marginTop: hp('2%') }}>

<Text style={{ color: '#fff', fontWeight: '200', fontSize: 13 }}>Forgot password?</Text>

</View>




<View style={{alignItems:'center' ,  flexDirection:'row' , justifyContent:'space-between' , marginTop:hp('4%') }}>


<View style={{ width: wp('25%'), height: hp('6%'), backgroundColor: '#2e3030', marginTop: hp('12%'), borderRadius: 10, flexDirection: 'row'  , marginLeft:wp('-1%') , justifyContent:'center' , }} >


     
      <CountryPicker containerButtonStyle={{alignItems:'center' , top:9}}  theme={DARK_THEME}
        {...{
          countryCode,
          withFilter,
          withFlag,
          withCountryNameButton,
          withAlphaFilter,
          withCallingCode,
          withEmoji,
          onSelect,
        }}
        visible
      />
      {country !== null && (
        <Text style={styles.data}>+{country?.callingCode}</Text>
      )}
  

</View>




<View style={{ width: wp('70%'), height: hp('6%'), backgroundColor: '#2e3030', marginTop: hp('12%'), borderRadius: 10, flexDirection: 'row' ,  left:wp('1%') }} >

<TextInput maxLength={10}  keyboardType = 'numeric' style={{ width: "80%", height: '100%', paddingLeft: 12, color: "#989b9c" }} placeholder="Your mobile" placeholderTextColor={"#989b9c"} onChangeText={setNumber} />


<View style={{ justifyContent: 'center', paddingLeft: 15 }}>

  <Icon name="phone" size={25} color="#8c8f8f" />

</View>



</View>











</View>




<View style={{ alignItems: 'center', marginTop: hp('19%') }}>


<TouchableOpacity onPress={()=> navigation.navigate('Code',{number , country})} style={{ width: wp('85%'), height: hp('7%'), backgroundColor: '#67f5d4', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>

  <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#000' }}>Send</Text>

</TouchableOpacity>

</View>




</View> 


</View>





    </View>


  )
}

const styles = StyleSheet.create({
    container : {
        flex : 1, 
        backgroundColor:'#000'
    } ,
    data : {
      color:'#989b9c' ,
      top:13

    }
})