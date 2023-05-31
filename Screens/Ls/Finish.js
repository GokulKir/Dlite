import { StyleSheet, Text, View  , TouchableOpacity} from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { useNavigation } from '@react-navigation/native';


export default function Finish() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>

      <View style={{alignItems:'center'}}>

        <View style={{alignItems:'center' , marginTop:responsiveHeight(8)}}>

        <Text style={{ color: '#fff', fontWeight: '400', fontSize: 23}}>
            Finish signing up
        </Text>

        <Text style={{color:'#989b9c' , fontWeight:'300' , fontSize:responsiveFontSize(1.6) , marginTop:responsiveHeight(4)}}>Welcome to all users of Dlite social media platform.</Text>

        <Text style={{color:'#989b9c' , fontWeight:'300' , fontSize:responsiveFontSize(1.6) , marginTop:responsiveHeight(4)}}>Dlite allows you to share various types of content</Text>
        <Text style={{color:'#989b9c' , fontWeight:'300' , fontSize:responsiveFontSize(1.6) , marginTop:responsiveHeight(1)}}>such as photos, videos, and text posts. You can also </Text>
        <Text style={{color:'#989b9c' , fontWeight:'300' , fontSize:responsiveFontSize(1.6) , marginTop:responsiveHeight(1)}}>like and comment on other users' posts. </Text>




      <Icon name="shield-checkmark" color="#67f5d4" size={80} style={{top:responsiveHeight(3)}}/>


      <Text style={{color:'#67f5d4' , fontWeight:'300' , fontSize:responsiveFontSize(1.6) , marginTop:responsiveHeight(4)}}>Your profile details are secured! </Text>


        </View>





        <View style={{ alignItems: 'center', marginTop: responsiveHeight(6) }}>


<TouchableOpacity  onPress={() => navigation.navigate('MyTabs')}  style={{ width: wp('90%'), height: hp('4.8%'), backgroundColor: '#67f5d4', borderRadius: 4, alignItems: 'center', justifyContent: 'center' }}>

  <Text style={{ fontSize:responsiveFontSize(1.8), fontWeight: 'bold', color: '#000' }}>Sign Up</Text>

</TouchableOpacity>

</View>

      </View>
    
    </View>
  )
}
const styles = StyleSheet.create({

    container : {
        flex :1 ,
        backgroundColor:'#080712'
    }

})