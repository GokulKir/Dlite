import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef , useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Icon1 from 'react-native-vector-icons/dist/FontAwesome5';
import Icon2 from 'react-native-vector-icons/dist/Entypo';
import Icon3 from 'react-native-vector-icons/dist/Fontisto';
import Icon4 from 'react-native-vector-icons/dist/Entypo';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

export default function Code(props) {
  const [otpValue, setOtpValue] = useState('');
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);
  const inputRef5 = useRef(null);
  const inputRef6 = useRef(null);


const {number , country} = props.route.params

useEffect(() => {
    inputRef1.current.focus();
  }, []);

  const handleOTPChange = (index, value) => {
    setOtpValue((prev) => {
      const otp = prev.split('');
      otp[index] = value;
      return otp.join('');
    });
    if (value && index < 5) {
      switch (index) {
        case 0:
          inputRef2.current.focus();
          break;
        case 1:
          inputRef3.current.focus();
          break;
        case 2:
          inputRef4.current.focus();
          break;
        case 3:
          inputRef5.current.focus();
          break;
        case 4:
          inputRef6.current.focus();
          break;
        default:
          break;
      }
    }
  };



  return (
    <View style={styles.container}>

<ScrollView>

<View style={{alignItems:'center'}}>




<View style={{ alignItems: 'center', top: hp('12%') }}>

<Text style={{ color: '#fff', fontWeight: '300', fontSize: 23 }}>Verification code</Text>


</View>


<View style={{ alignItems: 'center', top: hp('15%') }}>

<Text style={{ color: '#fff', fontWeight: '200', fontSize: 13 }}>We have sent the code verification to</Text>
<Text style={{ color: '#fff', fontWeight: '200', fontSize: 13 , top:hp('1%') }}>Your Mobile Number</Text>


</View>


<View style={{alignItems:'center'}}>

  <Text style={{color:'#67f5d4' , top:hp('20%') , fontStyle:"normal" , fontWeight:'300' }}>+{country?.callingCode} {number}</Text>


</View>





 

  <View style={{alignItems:'center' , flexDirection:'row' , justifyContent:'center' , justifyContent:'space-evenly' , marginTop:hp('45%') }}>

  <TextInput style={{width:45 , height:45, borderWidth:2 , borderColor:'#2e3030'  , borderRadius:5  , color:'#fff' , paddingLeft:15 , fontSize:24 }}
     
        ref={inputRef1}
        maxLength={1}
        keyboardType="numeric"
        onChangeText={(text) => handleOTPChange(0, text)}
        value={otpValue[0]}
      />
      <TextInput style={{width:45 , height:45 , borderWidth:2 , borderColor: '#2e3030'  ,  borderRadius:5  , color:'#fff' , paddingLeft:15 , fontSize:24 }}
      
        ref={inputRef2}
        maxLength={1}
        keyboardType="numeric"
        onChangeText={(text) => handleOTPChange(1, text)}
        value={otpValue[1]}
      />
      <TextInput
      style={{width:45 , height:45 , borderWidth:2 , borderColor:'#2e3030'  ,  borderRadius:5  , color:'#fff' , paddingLeft:15 , fontSize:24  }}
      
        ref={inputRef3}
        maxLength={1}
        keyboardType="numeric"
        onChangeText={(text) => handleOTPChange(2, text)}
        value={otpValue[2]}
      />
      <TextInput
style={{width:45 , height:45 , borderWidth:2 , borderColor:'#2e3030' ,  borderRadius:5  , color:'#fff' , paddingLeft:15 , fontSize:24   }}
        ref={inputRef4}
        maxLength={1}
        keyboardType="numeric"
        onChangeText={(text) => handleOTPChange(3, text)}
        value={otpValue[3]}
      />
      <TextInput
    style={{width:45 , height:45 , borderWidth:2 , borderColor:'#2e3030'   ,  borderRadius:5 , color:'#fff' , paddingLeft:15 , fontSize:24    }}
      
        ref={inputRef5}
        maxLength={1}
        keyboardType="numeric"
        onChangeText={(text) => handleOTPChange(4, text)}
        value={otpValue[4]}
      />
      <TextInput
style={{width:45 , height:45 , borderWidth:2 , borderColor:'#2e3030'  ,  borderRadius:5  , color:'#fff' , paddingLeft:15 , fontSize:24  }}
        ref={inputRef6}
        maxLength={1}
        keyboardType="numeric"
        onChangeText={(text) => handleOTPChange(5, text)}
        value={otpValue[5]}
      />

  


  </View>


  <View style={{alignItems:'center' , marginTop:hp('5%')}}>

    <Text style={{color:'#fff' , fontSize:13}}>Didn't not recive OTP code?</Text>

    
    <TouchableOpacity>
    <Text style={{color:'#67f5d4' , fontSize:13 , marginTop:hp('1%')}}>Resend Code</Text>
    </TouchableOpacity>



  </View>


  <View style={{ alignItems: 'center', marginTop: hp('9%') }}>


<TouchableOpacity style={{ width: wp('85%'), height: hp('7%'), backgroundColor: '#67f5d4', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>

  <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#000' }}>Confirm</Text>

</TouchableOpacity>

</View>




</View>


</ScrollView>


    </View>
  )
}

const styles = StyleSheet.create({

  container : {
    flex : 1 ,
    backgroundColor:'#000'
  } ,

})