import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

export default function Dl() {

    const navigation = useNavigation()
    return (
        <View style={styles.container}>


            <View style={{ alignItems: 'center' }}>

                {/* <Image style={{height:responsiveHeight(10) , width:responsiveWidth(20) , top:responsiveHeight(10)}} source={require('../../assets/Lt.png')}/> */}

                {/* <ImageBackground style={{ width: wp('100%'), height: hp('32%') }} source={require('../../assets/enj.png')}>

                </ImageBackground> */}

            </View>

            <View style={{ alignItems: 'center', marginBottom: hp('5%') , marginTop:responsiveHeight(10) }}>
                <Text style={{ color: '#fff', fontSize: wp('6.8%'), fontWeight: '200' }}>What happened, guys? </Text>
                <Text style={{ color: '#fff', fontSize: wp('6.8%'), left: wp('-13%'), fontWeight: '100' }}> Let's start now.</Text>
            </View>

            <View style={{ alignItems: 'center', top: hp('12%') , marginTop:responsiveHeight(15) }}>

                <TouchableOpacity onPress={()=> navigation.navigate('MyTabs')} style={{ width: wp('80%'), height: hp('5%'), backgroundColor: '#fff', borderRadius: 20, alignItems: 'center', justifyContent: "center" }}>

                    <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', left: wp('-2%') }}>

                        <Image style={{ width: wp('8%'), height: hp('4%') }} source={require('../../assets/google.png')} />
                        <Text style={{ color: '#000', fontSize: wp('4%'), left: wp('2%'), fontWeight: '800' }}>Continue with Google</Text>

                    </View>



                </TouchableOpacity>


                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', top: hp('2.5%'), alignSelf: 'center' }}>

                    <View style={{ width: wp('30%'), height: hp('0.1%'), backgroundColor: '#DDD', left: wp('-2%') }}>

                    </View>

                    <Text style={{ color: '#fff' }}>or</Text>

                    <View style={{ width: wp('30%'), height: hp('0.1%'), backgroundColor: '#DDD', left: wp('2%') }}>

                    </View>

                </View>

                <TouchableOpacity onPress={() => navigation.navigate('Username')} style={{ width: wp('80%'), height: hp('5%'), backgroundColor: '#67f5d4', borderRadius: 20, top: hp('5%'), justifyContent: 'center' ,  }}>

                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>

                        <Text style={{ fontWeight: '800', color: '#000', fontSize: wp('4%') }}>Create account</Text>

                    </View>

                </TouchableOpacity>






            </View>


            <View style={{ top: hp('32%'), alignItems: 'center' , }} >

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
    container: {
        flex: 1,
        backgroundColor: '#080712'
    }
})