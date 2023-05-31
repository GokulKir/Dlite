import { StyleSheet, Text, View, Image, TouchableOpacity, Animated, FlatList, VirtualizedList, RefreshControl, ActivityIndicator, Dimensions, Platform } from 'react-native'
import React, { useRef, useSelector, useState } from 'react'
import { responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions'
import Icon from 'react-native-vector-icons/dist/Feather';
import Icon1 from 'react-native-vector-icons/dist/SimpleLineIcons';
import Icon2 from 'react-native-vector-icons/dist/Fontisto';
import Icon3 from 'react-native-vector-icons/dist/FontAwesome';
import Icon4 from 'react-native-vector-icons/dist/Feather';
import { DATA } from '../DATA/data';
import Video from 'react-native-video';
import { VideoPlayer } from 'react-native-video';

import ViewMoreText from 'react-native-view-more-text';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { transformer } from '../../metro.config';
import { useNavigation } from '@react-navigation/native';
import {
  OffsetYProvider,
  IndexProvider,
  InCenterConsumer
} from "@n1ru4l/react-in-center-of-screen";



const { height, width } = Dimensions.get('window');


const TotalScreen = height / width

const Total = height - width / 2

console.log(Total);


console.log("Total", TotalScreen);






export default function Home() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [refreshing, setRefreshing] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [paused, setPaushed] = useState(false)

  const [selectedIndex, setSelectedIndex] = useState(0)

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRefs = useRef([]);

  const navigation = useNavigation()

  const onRefresh = () => {
    setRefreshing(true);

    // Here you can make an API call or fetch some data

    setRefreshing(false);
  };


  const containerHeight = 400; // Replace with your container height



  const videoHeight = Total - 50; // Replace with your video height


  const centerOffset = (containerHeight - videoHeight) / 2;



  //  const renderViewMore = (onPress) =>{
  //     return(
  //       <Text onPress={onPress}>View more</Text>
  //     )
  //   },



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


  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.y;
    const centerPosition = scrollPosition + centerOffset
    const videoIndex = Math.floor(centerPosition / videoHeight); // assuming each video is 300px in height
    console.log(`Current scroll position: ${scrollPosition}}`);
    console.log(`Current center position: ${centerPosition}`);
    console.log(`Current video index: ${videoIndex}`);
    if (videoIndex !== currentVideoIndex) {
      if (videoRefs.current[currentVideoIndex]) {
        const videoRef = videoRefs.current[currentVideoIndex];
        if (videoRef && videoRef.pause) { // check if the videoRef and pause function are defined
          videoRef.pause(); // pause the current video
        }
      }


      setCurrentVideoIndex(videoIndex);
      if (videoRefs.current[videoIndex]) {
        const videoRef = videoRefs.current[videoIndex];
        if (videoRef && videoRef.play) {
          videoRef.play(); // play the new video
        }
      }
    }
  };



  handleFullscreenPlayerWillPresent = () => {
    VideoPlayer.showVideoPlayer({
      videoProps: {
        source: { uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" },
        resizeMode: 'contain',
        // playInBackground: false,
        // playWhenInactive: false,
        paused: false,
      },
      showFullscreenButton: true,
    });
  };

  handleFullscreenPlayerWillDismiss = () => {
    VideoPlayer.dismissFullscreenPlayer();
  };




  const onChangeIndex = ({ index }) => {

    console.log("Props>>>", props);
    setSelectedIndex(index)

  }



  return (
    <View style={styles.container}>



      <View style={{ width: responsiveWidth(100), height: responsiveHeight(6.5), backgroundColor: '#000', borderBottomWidth: 0.3, borderBottomColor: '#000', alignItems: 'center', flexDirection: 'row', alignSelf: 'baseline', justifyContent: 'space-between' }}>

        {/* 
<View style={{ width: responsiveWidth(9), height: responsiveWidth(9), backgroundColor: '#fff', borderWidth: 1, borderColor: '#fff', borderRadius: 100, left: 20, justifyContent: 'center' }}>
  <Image style={{ width: '100%', height: '100%', borderRadius: 100 }} source={require('../../assets/K.jpg')} />

</View> */}


        {/* <Image style={{ width: responsiveWidth(10), height: responsiveWidth(10), }} source={require('../../assets/C.png')} /> */}

        <Icon2 style={{ left: 20 }} name="livestream" color="#fff" size={20} />

        <Image style={{ width: responsiveWidth(10), height: responsiveWidth(10), }} source={require('../../assets/C.png')} />



        <TouchableOpacity>



          <Icon3 name="send" size={23} color="#fff" style={{ right: 20 }} />

        </TouchableOpacity>

      </View>



      <View>

      </View>



      <ScrollView onScroll={handleScroll} refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />


      }>
        {/* Your content here */}
        {refreshing && (
          <ActivityIndicator
            style={{ marginTop: 20 }}
            size="large"
            color="blue"
          />
        )}

        <View style={{ width: responsiveScreenWidth(100), height: responsiveHeight(22), top: 10, left: 0, padding: 0, flexDirection: 'row' }}>
          <ScrollView horizontal={true} >
            {DATA.map((obj, i) => {
              return (

                <View key={i}>

                  <View style={{ width: responsiveWidth(29), height: responsiveHeight(18), backgroundColor: '#080712', top: 4, marginLeft: 14, borderRadius: 10, alignItems: 'center', justifyContent: 'center', padding: 0 }}>

                    <Image style={{ width: '99%', height: '85%', top: 10.4, borderRadius: 10 }} source={{ uri: obj.userImg }} />

                  </View>

                  <View style={{ alignItems: 'center', top: 8, left: 8 }}>

                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>{obj.username}</Text>

                  </View>



                </View>

              )
            })}


          </ScrollView>

        </View>

        <View style={{ width: responsiveWidth(100), height: responsiveHeight(10), top: 30, flexDirection: 'row' }}>

          <View style={{ height: responsiveWidth(12), width: responsiveScreenWidth(12), backgroundColor: '#fff', borderRadius: 100, top: 10, left: 20, alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{ width: '96%', height: '96%', borderRadius: 100 }} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJO4PWBupc9TYsGj77LfHVsh5covggMeCd3w&usqp=CAU' }} />
          </View>

          <TouchableOpacity style={{ width: responsiveWidth(75), height: responsiveHeight(5), backgroundColor: '#09161a', left: responsiveWidth(8), top: 13, borderRadius: 10 }}>


            <Text style={{ color: 'grey', fontWeight: '500', top: 10, left: 8 }}>What's on your mind?</Text>


          </TouchableOpacity>

        </View>

        {DATA.map((obj, index) => {
          return (





            <View key={index} style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between' }}>




              <View style={{ width: responsiveWidth(100), height: responsiveHeight(60), backgroundColor: '#080712', padding: 0, marginTop: 60, borderRadius: 20, elevation: 4, alignItems: 'center' }}>

                <View style={{ width: responsiveWidth(90), height: responsiveHeight(6), top: 15, flexDirection: 'row', justifyContent: 'space-between' }}>


                  <View style={{ flexDirection: 'row' }}>


                    <View style={{ width: responsiveWidth(10), height: responsiveWidth(10), backgroundColor: '#fff', borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                      <Image style={{ width: '95%', height: '95%', borderRadius: 100 }} source={{ uri: obj.userImg }} />


                    </View>


                    <View style={{ left: 10, top: 5 }}>

                      <Text style={{ color: '#fff', fontWeight: 'bold' }}>{obj.username}</Text>

                    </View>

                  </View>


                  <View style={{ right: 10, top: 6 }}>
                    <TouchableOpacity>

                      <Icon1 name="options" color="#fff" size={24} />

                    </TouchableOpacity>

                  </View>

                </View>


                <TouchableOpacity onPress={() => navigation.navigate('Mainpost', { data: obj })} style={{ width: responsiveWidth(99), height: responsiveHeight(50), backgroundColor: '#000', top: 30, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                  {obj.UploadVideo ?

                    <View style={{ alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%' }}>

                      <Video
                        source={{ uri: obj.UploadVideo }}
                        muted={false}
                        playWhenInactive={true}
                        resizeMode="cover"
                        ref={(ref) => (videoRefs.current[index] = ref)}

                        poster="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202205/twitter-sixteen_nine.jpg?size=948:533"
                        paused={currentVideoIndex !== index}
                        repeat={true}

                        filterEnable
                        // onLoad={handleOnLoad}

                        onError={(error) => console.log(error)}

                        style={{ height: '100%', width: '100%', borderRadius: 20, top: 16 }} />
                      <TouchableOpacity>

                        <View style={{ width: 124, height: 44, top: responsiveHeight(-25), borderWidth: 2, borderColor: '#fff', borderRadius: 200, alignItems: 'center', justifyContent: 'center' }}>

                          <Icon4 name="video" color="#fff" size={30} />

                        </View>

                      </TouchableOpacity>

                    </View>





                    : <Image style={{ width: '100%', height: '100%', borderRadius: 20, }} source={{ uri: obj.UploadImg }} />}



                </TouchableOpacity>

              </View>

              <View style={{ width: responsiveWidth(96), height: responsiveHeight(3), top: 10, flexDirection: 'row', justifyContent: "space-between" }}>

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



                <View>


                </View>


              </View>

              <View style={{ alignItems: 'center' }}>

                {obj.Postsub ?

                  <View style={{ width: width - 40, height: responsiveHeight(8), top: 22, }}>

                    <ViewMoreText
                      numberOfLines={1}
                      renderViewMore={renderViewMore}
                      renderViewLess={renderViewLess}
                      textStyle={{ alignItems: 'center' }}
                    >

                      <Text style={{ color: '#fff', fontSize: 14, fontWeight: '300', left: 10, padding: 0, top: 5 }}>{obj.Postsub}</Text>
                    </ViewMoreText>
                  </View>

                  : null}
              </View>

            </View>

          )
        })}

        <View style={{ height: responsiveHeight(17) }}></View>

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