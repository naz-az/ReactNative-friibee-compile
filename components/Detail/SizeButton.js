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
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        marginHorizontal: 10,
        borderColor: '#E6E6E6',
        borderWidth: 3
    },
    text: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'FiraSans-Bold',
        textAlign: 'center',
        textAlignVertical: 'center',
    }
}); 

export default SizeButton;