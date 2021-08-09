import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

const Dot = props => {
    return (
        <View elevation={0.5} style={[styles.container, {backgroundColor: props.color}]}>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width * 0.045,
        height: Dimensions.get('window').width * 0.045,
        borderRadius: Dimensions.get('window').width * 0.045 / 2,
        elevation: 5,
        marginHorizontal: '2.5%'
    }
});

export default Dot;