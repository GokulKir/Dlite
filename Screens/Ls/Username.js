import { StyleSheet, Text, View , TouchableOpacity , TextInput } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Icon1 from 'react-native-vector-icons/dist/FontAwesome5';
import Icon2 from 'react-native-vector-icons/dist/Entypo';
import Icon3 from 'react-native-vector-icons/dist/Fontisto';
import Icon4 from 'react-native-vector-icons/dist/Entypo';
import { useNavigation } from '@react-navigation/native';

export default function Username() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>


<View style={{ width: wp('100%'), height: hp('7%'), backgroundColor: '#000', justifyContent: "space-between", left: wp('4%'), top: hp('2%') }}>

<TouchableOpacity onPress={() => navigation.goBack()}>


  <Icon name="arrowleft" color="#fff" size={34} />


</TouchableOpacity>


</View>


<View style={{alignItems:'center'}}>

  <View style={{marginTop:responsiveHeight(4) , color:"#fff" , alignItems:'center'}}>

  <Text style={{color:'#fff' , fontSize:responsiveFontSize(2.6) , fontWeight:'400'}}>What's your name?</Text>


  <Text style={{color:'#fff' , fontSize:responsiveFontSize(1.7) , fontWeight:'300' , top:responsiveHeight(1)}}>Enter the name you use in real life.</Text>


  </View>


  <View style={{top:responsiveHeight(4)  , justifyContent:'space-between' , marginTop:responsiveHeight(6)}}>

<View style={{width:responsiveWidth(90) , height:responsiveHeight(5) , backgroundColor:'#282929' , borderRadius:5 , borderRadius:3 , flexDirection:'row'}}>



<TextInput style={{width:'80%' , height:'100%' , paddingLeft:12 ,}} placeholder="First name" placeholderTextColor="#989b9c" color="#989b9c"/>


<View style={{ justifyContent: 'center', paddingLeft: 27 }}>

<Icon1 name="user-circle" size={23} color="#8c8f8f" />

</View>

</View>




<View style={{width:responsiveWidth(90) , height:responsiveHeight(5) , backgroundColor:'#282929' , borderRadius:5 , borderRadius:3 , marginTop:responsiveHeight(3) , flexDirection:'row'}}>


<TextInput style={{width:'80%' , height:'100%' , paddingLeft:12 ,}} placeholder="Surname" placeholderTextColor="#989b9c" color="#989b9c"/>


<View style={{ justifyContent: 'center', paddingLeft: 27 }}>

<Icon1 name="user-circle" size={23} color="#8c8f8f" />

</View>

</View>



  </View>




  <View style={{ alignItems: 'center', marginTop: hp('9%') }}>


<TouchableOpacity onPress={() => navigation.navigate('Signup')} style={{ width: wp('90%'), height: hp('4.8%'), backgroundColor: '#67f5d4', borderRadius: 4, alignItems: 'center', justifyContent: 'center' }}>

  <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#000' }}>Next</Text>

</TouchableOpacity>

</View>





</View>



<View style={{ top: responsiveHeight(37), alignItems: 'center' }} >

<View style={{ flexDirection: 'row', justifyContent: 'flex-start', right: wp('2%') }}>
    <Text style={{ color: '#fff' }}>Have an account already?</Text>


    <TouchableOpacity onPress={() => navigation.navigate('Login')}>

        <Text style={{ color: '#67f5d4', fontWeight: '600', marginLeft: wp('2%') }}>Login</Text>


    </TouchableOpacity>







</View>
</View>

      
   

    </View>
  )
}

const styles = StyleSheet.create({

  container : {
    flex : 1 ,
    backgroundColor:'#000'
  }

})