import React from "react";
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View
}
from 'react-native';

export default function FlatButton({text, onPress}){
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttontext}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: "#FF4B4B"
    },
    buttontext:{
        color: 'white',
        fontFamily: 'poppins-regular',
        textTransform: 'uppercase', 
        fontSize: 16,
        textAlign: 'center'
    }
})