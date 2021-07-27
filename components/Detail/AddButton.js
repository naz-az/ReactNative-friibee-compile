import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import { AntDesign } from '@expo/vector-icons';


const AddButton = () => {
    return (
        <TouchableOpacity style={styles.container}>
            
            <Text style={styles.title}>GO TO DEAL  </Text>

            <AntDesign name="export"
                          size={20}
                          color="white"/>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 50,
        //backgroundColor: '#F26530',
        borderRadius: 5,
        marginVertical: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    title: {
        color: '#FFF',
        fontFamily: 'FiraSans-Bold',
        fontSize: 16
    }
});

export default AddButton;