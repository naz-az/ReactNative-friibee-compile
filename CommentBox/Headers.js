import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import {Header} from 'react-native-elements';

const Headers = props => {
    return (
        <SafeAreaView style={styles.container}>
            <Header 
                containerStyle={styles.topHeader}
                leftComponent={
                    <TouchableOpacity onPress={props.onBackClick} style={{padding: '10%'}}>
                        <Image source={require('../../assets/icons/back.png')} />
                    </TouchableOpacity> 
                }
                rightComponent={<Image source={require('../../assets/icons/menu.png')} />}
            />
            <Image source={require('../../assets/img/detail.png')} style={styles.image}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '50%',
        
    },
    topHeader: {
        height: '10%',
        backgroundColor: '#F6F6F6'
    },
    image: {
        width: '100%',
        height: '85%'
    }
});

export default Headers;