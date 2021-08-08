import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

import Headers from '../components/Detail/Headers';
import Content  from '../components/Detail/Content';
 
const Name = props => {
    return (
        <View style={styles.container}>
            <Headers onBackClick={() => props.navigation.navigate("Home")} />
            <Content />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFF'
    }
});

export default Name;