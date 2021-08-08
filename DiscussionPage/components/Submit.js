import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

const Submit = props => {
    return (
        

        <TouchableOpacity style={[styles.container]}>
            
            <LinearGradient colors={['#f26530', '#e1522b', '#d03f26', '#be2a21', '#ac0e1c']}>
                <Text style={styles.submitText}>{props.title}</Text>

            </LinearGradient>
            </TouchableOpacity>
    );
};



const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 50,
        borderColor: 'black',
        borderRadius: 10,
        marginVertical: 50,
        borderWidth: 0,
    },
    submitText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center',
        marginVertical: 10
        
    }
});

export default Submit;