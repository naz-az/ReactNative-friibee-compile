import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons'; 


const Headers = props => {
    return (
        <View style={styles.container}>
            <Header 
                containerStyle={styles.topHeader}
                leftComponent={
                    <TouchableOpacity style={{padding: '10%'}}>
                        {/* onPress={props.onBackClick} */}
                        <Ionicons name="chevron-back" size={24} color="black" />
                    </TouchableOpacity> 
                }
                rightComponent={<Image source={require('../../assets/icons/menu.png')} />}
            />
            <Image source={require('../../assets/img/nike.jpg')} style={styles.image}/>
        </View>
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