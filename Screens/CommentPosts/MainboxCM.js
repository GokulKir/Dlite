import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { Image } from 'react-native-svg'

export default function MainboxCM() {
    const Dimensions = useWindowDimensions()
    return (
        <View style={{ flex: 1 }}>

            <View style={{ width: Dimensions.width / 1.5, flexDirection: 'row' }}>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: '#fff', fontSize: responsiveFontSize(2), fontWeight: "400" }}>345</Text>
                    <Text style={{ color: '#fff', fontSize: responsiveFontSize(2), fontWeight: "200", marginLeft: 5 }}>Lites </Text>


                </View>

                <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                    <Text style={{ color: '#fff', fontSize: responsiveFontSize(2), fontWeight: "400" }}>20K</Text>
                    <Text style={{ color: '#fff', fontSize: responsiveFontSize(2), fontWeight: "200", marginLeft: 5 }}>Likes </Text>


                </View>

                <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                    <Text style={{ color: '#fff', fontSize: responsiveFontSize(2), fontWeight: "400" }}>10K</Text>
                    <Text style={{ color: '#fff', fontSize: responsiveFontSize(2), fontWeight: "200", marginLeft: 5 }}>Comments </Text>


                </View>
            </View>



            <View style={{ flex: 1, }}>

                <View style={{width : Dimensions.width /1.2  , height : Dimensions.height  / 20 ,  left:10 , marginTop : 20  }}>

                    <View style={{ flexDirection:'row'}}>

                        <View style={{width : responsiveWidth(8) , height : responsiveWidth(8) , borderRadius:100 , alignItems:'center' , justifyContent : 'center' , backgroundColor:'blue'}}>

                            <Image source={{uri : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVQc5FGpSgp2cW91J5DVTsEia38YBurAr4kw&usqp=CAU"}} style={{width : '100%' , height : '100%'}}/>

                        </View>

                        <View > 
                            <Text style={{color:'#fff' , fontSize :responsiveFontSize(1.9) , top : 4 , left:10 , fontWeight : "100"}}>Gokulkrishna.S</Text>
                        </View>



                    </View>

                </View>

                <View style={{ width: Dimensions.width / 1.3, height: Dimensions.height / 8, backgroundColor: '#080712', left: 5, right: 5, top: 10, bottom: 5 , borderRadius : 20 }}>



                </View>

            </View>

            <View style={{height : Dimensions.height  /4}}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({})