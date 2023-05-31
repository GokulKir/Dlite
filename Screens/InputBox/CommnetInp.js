import { StyleSheet, Text, View, TextInput , TouchableOpacity } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import Icon from 'react-native-vector-icons/dist/Ionicons';

export default function CommnetInp() {
    return (
        <View style={styles.container}>

            <View style={styles.buttonContainer}>

                <TextInput placeholder='Type your message...' placeholderTextColor={"#ddd"} style={styles.InputStyle} />

  <View style={{left:30}}>
    <TouchableOpacity>
        <Icon name="send-sharp" color="#fff" size={24}/>
    </TouchableOpacity>
  </View>
                

            </View>



        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'blue'
    },
    buttonContainer: {
        position: 'absolute',
        width: responsiveWidth(92),
        height: responsiveHeight(5),
        alignItems: 'center',
        justifyContent: 'center',
        right: 16,
        bottom: 16,
        borderRadius: 28,
        backgroundColor: '#09161a',
        elevation: 5, // For Android only
        shadowColor: '#000', // For iOS only
        shadowOffset: { width: 0, height: 2 }, // For iOS only
        shadowOpacity: 0.4, // For iOS only
        shadowRadius: 3, // For iOS only ,
        flexDirection: 'row' , 
        paddingRight : 30
    },
    InputStyle: {

        width: '80%',
        height: '100%' ,
        color : '#ddd' ,


    }
})