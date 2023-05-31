import { Dimensions, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Icon1 from 'react-native-vector-icons/dist/SimpleLineIcons';
import Icon2 from 'react-native-vector-icons/dist/MaterialIcons';
import Icon3 from 'react-native-vector-icons/dist/FontAwesome';
import Icon4 from 'react-native-vector-icons/dist/Feather';
import Icon5 from 'react-native-vector-icons/SimpleLineIcons';

//Comment component //

import MainboxCM from '../CommentPosts/MainboxCM';
import CommnetInp from '../InputBox/CommnetInp';

//Comment component //


import { useNavigation } from '@react-navigation/native';
const { height, width } = Dimensions.get('window')
import Video from 'react-native-video';
import ViewMoreText from 'react-native-view-more-text';
import { CommentD } from '../DATA/data';

export default function Mainpost(props) {

    const { data } = props?.route?.params;
    const navigation = useNavigation()





    const renderViewMore = (onPress) => {
        return (
            <Text onPress={onPress} style={{ color: 'grey' }}>..More</Text>
        )

    }

    const renderViewLess = (onPress) => {
        return (
            <Text onPress={onPress} style={{ color: 'grey' }}>..Less</Text>
        )
    }



    return (
        <View style={styles.container}>
            <ScrollView>

                <View style={{ alignItems: 'center' }}>

                    <View style={{ width: responsiveWidth(100), height: responsiveHeight(80), backgroundColor: '#080712', borderBottomLeftRadius: 40, borderBottomRightRadius: 40, elevation: 4, }}>

                        <View style={{ width: width, height: height / 9, backgroundColor: '#080712', marginTop: 14 }}>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                                <TouchableOpacity style={{ top: 10, left: 10 }} onPress={() => navigation.goBack()}>


                                    <Icon name="arrowleft" color="#fff" size={34} />


                                </TouchableOpacity>


                                <View style={{ width: responsiveWidth(9), height: responsiveWidth(9), backgroundColor: 'blue', borderRadius: 200, top: 10, alignItems: 'center', justifyContent: 'center' }}>

                                    <Image style={{ width: '95%', height: '95%', borderRadius: 200 }} source={{ uri: data.userImg }} />

                                </View>



                                <TouchableOpacity>

                                    <Icon1 name="options" color="#fff" size={24} style={{ top: 15, right: 15 }} />

                                </TouchableOpacity>


                            </View>


                        </View>
                        <View style={{ alignItems: 'center' }}>





                            <View style={{ width: width - 30, height: height - 370, backgroundColor: '#000', top: 10, borderRadius: 20, elevation: 5 }}>

                                {data.UploadVideo ? <Video style={{ width: '100%', height: '100%', borderRadius: 20 }} resizeMode="cover" source={{ uri: data.UploadVideo }} /> : <Image style={{ width: '100%', height: '100%', borderRadius: 20 }} source={{ uri: data.UploadImg }} />
                                }


                            </View>





                        </View>

                        <View style={{ alignItems: 'center' }}>

                            <View style={{ width: responsiveWidth(96), height: responsiveHeight(3), top: responsiveHeight(4), flexDirection: 'row', justifyContent: "space-between" }}>

                                <View style={{ flexDirection: 'row' }}>

                                    <View style={{ top: 3, left: responsiveWidth(5) }}>
                                        <TouchableOpacity>
                                            <Icon3 name="heart-o" color="#fff" size={20} />
                                        </TouchableOpacity>
                                    </View>


                                    <View style={{ top: 3, left: responsiveWidth(20) }}>
                                        <TouchableOpacity>
                                            <Icon4 name="message-circle" color="#fff" size={21} />
                                        </TouchableOpacity>
                                    </View>


                                    <View style={{ top: 3, left: responsiveWidth(35) }}>
                                        <TouchableOpacity>
                                            <Icon4 name="share-2" color="#fff" size={20} />
                                        </TouchableOpacity>
                                    </View>



                                    <View style={{ top: 3, left: responsiveWidth(56), top: 5 }}>

                                        <Text style={{ color: 'grey', fontWeight: '400' }}>9 hours ago</Text>

                                    </View>


                                </View>


                            </View>

                        </View>


                    </View>


                    <View style={{ flex : 1 , backgroundColor: '#000', top: 20 }}>
                        <ViewMoreText
                        
                            numberOfLines={1}
                            renderViewMore={renderViewMore}
                            renderViewLess={renderViewLess}
                            textStyle={{ alignItems: 'center'  }}
                        >

                            <Text style={{ fontWeight: '300', fontSize: 16, color: '#DDD', left: 4, top: 3, padding: 7, }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.   </Text>

                        </ViewMoreText>
                    </View>




                </View>


                

        <View style={{marginTop : 40 , alignSelf :'flex-start' , marginLeft:17}}>
                <MainboxCM/>


                </View>


                {/* <View style={{ width: width, height: responsiveHeight(7), backgroundColor: '#080712', borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
                    <TouchableOpacity>

                        <View style={{ flex: 1 }}>


                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'stretch', top: 20 }}>

                                <View style={{ width: responsiveWidth(54), height: responsiveHeight(4), flexDirection: 'row' }}>




                                    <Text style={{ color: '#fff', fontSize: responsiveFontSize(2.3), marginLeft: 24 }}>Comments</Text>



                                </View>

                                <View style={{ right: 24, bottom: 7 }}>
                                    <TouchableOpacity style={{ width: 40, height: 40, backgroundColor: '#000', borderRadius: 200, alignItems: 'center', justifyContent: 'center' }}>
                                        <Icon5 name="arrow-up" color="#fff" size={20} />
                                    </TouchableOpacity>
                                </View>



                            </View>







                        </View>

                    </TouchableOpacity>
                </View> */}

            </ScrollView>


            <View>
      <CommnetInp/>
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