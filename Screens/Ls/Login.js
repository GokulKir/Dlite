import { StyleSheet, Text, View , TouchableOpacity , TextInput } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Icon1 from 'react-native-vector-icons/dist/FontAwesome5';
import Icon2 from 'react-native-vector-icons/dist/Entypo';
import Icon3 from 'react-native-vector-icons/dist/Fontisto';
import Icon4 from 'react-native-vector-icons/dist/Entypo';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation =  useNavigation()
  return (
    <View style={styles.container}>

      <ScrollView>
      
    <View style={{alignItems:'center'}}>


    <View style={{ width: wp('100%'), height: hp('7%'), backgroundColor: '#000', justifyContent: "space-between", left: wp('4%'), top: hp('2%') }}>

<TouchableOpacity onPress={() => navigation.goBack()}>


  <Icon name="arrowleft" color="#fff" size={34} />


</TouchableOpacity>





</View>


<View>



<View style={{ alignItems: 'center', marginTop: hp('7%') }}>

<Text style={{ color: '#fff', fontWeight: '300', fontSize: 23 }}>Welcome  Back!</Text>


</View>


<View style={{ alignItems: 'center', marginTop: hp('2%') }}>

<Text style={{ color: '#fff', fontWeight: '200', fontSize: 13 }}>Login to continue</Text>

</View>





<View style={{ width: wp('90%'), height: hp('6%'), backgroundColor: '#2e3030', marginTop: hp('15%'), borderRadius: 10, flexDirection: 'row' }} >

<TextInput style={{ width: "80%", height: '100%', paddingLeft: 12, color: "#989b9c" }} placeholder="Your email" placeholderTextColor={"#989b9c"} />


<View style={{ justifyContent: 'center', paddingLeft: 27 }}>

  <Icon2 name="email" size={25} color="#8c8f8f" />

</View>



</View>



<View style={{ width: wp('90%'), height: hp('6%'), backgroundColor: '#2e3030', marginTop: hp('5%'), borderRadius: 10, flexDirection: 'row' }} >

<TextInput  secureTextEntry={true}  style={{ width: "80%", height: '100%', paddingLeft: 12, color: "#989b9c" }} placeholder="Your password" placeholderTextColor={"#989b9c"} />

<View style={{ justifyContent: 'center', paddingLeft: 27 }}>

  <Icon3 name="locked" size={25} color="#8c8f8f" />

</View>



</View>







</View>

<View style={{justifyContent:'space-evenly'}}>

  <TouchableOpacity onPress={()=> navigation.navigate('Mobile')}>

  <Text style={{color:'#575c5c' , marginLeft:wp('50%') , marginTop:hp('2%') ,}}>Forgot Password?</Text>

  </TouchableOpacity>




</View>



<View style={{ alignItems: 'center', marginTop: hp('14%') }}>


<TouchableOpacity style={{ width: wp('85%'), height: hp('7%'), backgroundColor: '#67f5d4', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>

  <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#000' }}>Login</Text>

</TouchableOpacity>

</View>


</View>



<View style={{alignItems:'center' , marginTop:hp('12%')}}>


  <TouchableOpacity onPress={() => navigation.navigate('Signup')}>


  <Text style={{color:'#fff'}}>Create new account </Text>

    
    
  </TouchableOpacity>



</View>



   

    </ScrollView>


    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1 ,
    backgroundColor:'#000'
  }
})