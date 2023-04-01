import { StyleSheet, Text, TextInput, View } from 'react-native'
import React ,{useState , useEffect} from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Icon1 from 'react-native-vector-icons/dist/FontAwesome5';
import Icon2 from 'react-native-vector-icons/dist/Entypo';
import Icon3 from 'react-native-vector-icons/dist/Fontisto';
import Icon4 from 'react-native-vector-icons/dist/Entypo';



import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function Signup() {
const [eye, setEye] = useState(false)
  const navigation = useNavigation()


  const Show = () => {
    setEye(!eye)
  }
  return (
    <View style={styles.container}>

      <ScrollView>

        <View>






          <View style={{ width: wp('100%'), height: hp('7%'), backgroundColor: '#000', justifyContent: "space-between", left: wp('4%'), top: hp('2%') }}>

            <TouchableOpacity onPress={() => navigation.goBack()}>


              <Icon name="arrowleft" color="#fff" size={34} />


            </TouchableOpacity>





          </View>


          <View style={{ alignItems: 'center' }}>




            <View style={{ alignItems: 'center', marginTop: hp('6%') }}>

              <Text style={{ color: '#fff', fontWeight: '300', fontSize: 23 }}>Welcome to User</Text>


            </View>


            <View style={{ alignItems: 'center', marginTop: hp('2%') }}>

              <Text style={{ color: '#fff', fontWeight: '200', fontSize: 13 }}>Sign up to continue</Text>

            </View>



            <View style={{ width: wp('90%'), height: hp('6%'), backgroundColor: '#2e3030', marginTop: hp('12%'), borderRadius: 10, flexDirection: 'row', }} >



              <TextInput style={{ width: "80%", height: '100%', paddingLeft: 12, color: "#989b9c" }} placeholder="Username" placeholderTextColor={"#989b9c"} />


              <View style={{ justifyContent: 'center', paddingLeft: 27 }}>

                <Icon1 name="user-circle" size={25} color="#8c8f8f" />

              </View>


            </View>


            <View style={{ width: wp('90%'), height: hp('6%'), backgroundColor: '#2e3030', marginTop: hp('5%'), borderRadius: 10, flexDirection: 'row' }} >

              <TextInput style={{ width: "80%", height: '100%', paddingLeft: 12, color: "#989b9c" }} placeholder="Your email" placeholderTextColor={"#989b9c"} />


              <View style={{ justifyContent: 'center', paddingLeft: 27 }}>

                <Icon2 name="email" size={25} color="#8c8f8f" />

              </View>



            </View>


            <View style={{ width: wp('90%'), height: hp('6%'), backgroundColor: '#2e3030', marginTop: hp('5%'), borderRadius: 10, flexDirection: 'row' }} >


              {eye == true ?               <TextInput secureTextEntry={false} style={{ width: "80%", height: '100%', paddingLeft: 12, color: "#989b9c" }} placeholder="Your password" placeholderTextColor={"#989b9c"} />
  :               <TextInput secureTextEntry={true} style={{ width: "80%", height: '100%', paddingLeft: 12, color: "#989b9c" }} placeholder="Your password" placeholderTextColor={"#989b9c"} />
}


              <View style={{ justifyContent: 'center', paddingLeft: 27 }}>

                <TouchableOpacity onPress={() => Show()}>


               {eye ?   <Icon4 name="eye" size={25} color="#8c8f8f" /> :  <Icon4 name="eye-with-line" size={25} color="#8c8f8f" />}

               

                </TouchableOpacity>

              </View>







  
            </View>



            <View style={{ width: wp('90%'), height: hp('6%'), backgroundColor: '#2e3030', marginTop: hp('5%'), borderRadius: 10, flexDirection: 'row' }} >

              <TextInput  secureTextEntry={true}  style={{ width: "80%", height: '100%', paddingLeft: 12, color: "#989b9c" }} placeholder="Confirm password" placeholderTextColor={"#989b9c"} />

              <View style={{ justifyContent: 'center', paddingLeft: 27 }}>

                <Icon3 name="locked" size={25} color="#8c8f8f" />

              </View>







  
            </View>


          </View>



          <View style={{ alignItems: 'center', marginTop: hp('8%') }}>


            <TouchableOpacity style={{ width: wp('85%'), height: hp('7%'), backgroundColor: '#67f5d4', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>

              <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#000' }}>Sign up</Text>

            </TouchableOpacity>

          </View>




          <View style={{ alignItems: 'center', marginTop: hp('5%') }}>

            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>

              <Text style={{ color: '#fff' }}>Already have an account ? </Text>

              <TouchableOpacity onPress={() => navigation.navigate('Login')}>


                <Text style={{ color: '#fff', marginLeft: wp('1%'), color: '#67f5d4' }}>Login</Text>


              </TouchableOpacity>



            </View>




          </View>


        </View>

      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#000'
  }

})


