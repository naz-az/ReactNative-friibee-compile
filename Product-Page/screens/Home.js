import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import Headers from '../components/Home/Headers';
import Content from '../components/Home/Content';

const Home = props => {
    return (
        <View style={styles.container}>
            <Headers />
            <Content onClicks={() => props.navigation.navigate("Detail")} />
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

export default Home;