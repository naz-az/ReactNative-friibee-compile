import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {Button} from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';

const Account = props => {
    return (
        <TouchableOpacity style={[styles.container, {backgroundColor: props.color}]}>
            <AntDesign style={styles.accIcon} name={props.icon} />
            <Text style={styles.textTitle}>{props.title}</Text>
        </TouchableOpacity>
    );  
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: 155,
        height: 30,
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 5,
        borderColor:'#ec482f',
        borderWidth: 2,
        shadowOpacity: 0.5,
        shadowColor: "#FCB195",
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 1}, 
        
    },
    accIcon: {
        color: '#ec482f',
        fontSize: 14,
        marginVertical: 7,
        marginHorizontal: 1,
        marginLeft:10
    },
    textTitle: {
        color: '#ec482f',
        fontWeight: 'bold',
        fontSize: 14,
        marginVertical: 3.5,
        marginHorizontal: 12,
    }
});

export default Account;