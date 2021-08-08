import React, {useState} from 'react';
import {View, StyleSheet, Text, } from 'react-native'; 

const SizeButton = props => {
    return (
        <View style={[styles.container, {backgroundColor: props.bgColor || "#FFF"}]}>
            <Text style={[styles.text, {color: props.color || "#C9C"}]}>{props.children}</Text>
        </View>
    );
} 

const styles = StyleSheet.create({
    container: {
        width: 130,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        //marginHorizontal: 5,
        //borderColor: '#E6E6E6',
        //borderWidth: 1
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'FiraSans-Bold',
        textAlign: 'center',
        textAlignVertical: 'center',
    }
}); 

export default SizeButton;