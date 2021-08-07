import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {Image, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const Round = props => {
    return (
        <TouchableOpacity style={[styles.container, {backgroundColor: props.color}]}>
            <Icon style={styles.accIcon} name={props.icon} />
            <Text style={styles.textTitle}>{props.title}</Text>
            <Image source={require('../assets/add.png')} />
        </TouchableOpacity>
    );  
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: 100,
        height: 100,
        justifyContent: 'center',
    alignItems: 'center',
        marginHorizontal: 120,
        //marginVertical: 10,
        borderRadius: 100,
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
        justifyContent: 'center',
    alignItems: 'center',
        //marginVertical: 9,
        //marginHorizontal: 10,
    },
    textTitle: {
        color: '#ec482f',
        fontWeight: 'bold',
        fontSize: 14,
        marginVertical: 10,
        marginHorizontal: 12,
    }
});

export default Round;