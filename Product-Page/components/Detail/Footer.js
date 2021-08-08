import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image, ScrollView} from 'react-native';

const Shoes = props => {
    return (
        <TouchableOpacity style={styles.shoesContainer} onPress={props.onClick}>
            <Image source={props.img} style={styles.shoesImg} />
            <Text style={styles.shoesText}>{props.children}</Text>
            <View opacity={0.4}>
                <Text style={styles.shoesText}>{props.cost}</Text>
            </View>    
        </TouchableOpacity>   
    );
};
const Footer = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>YOU MIGHT ALSO LIKE</Text>
            <View style={{flexDirection: 'row'}}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <Shoes img={require('../../assets/img/3.png')} cost="$110">Nike Air Max Dia</Shoes>
                    <Shoes img={require('../../assets/img/5.png')} cost="$150">Nike Epic React Flyknit 2</Shoes>
                    <Shoes img={require('../../assets/img/1.png')} cost="$180">Nike Joyride Run Flyknit</Shoes>
                </ScrollView>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: '5%'
    },
    shoesContainer: {
        marginHorizontal: 10
    },
    shoesImg: {
        width: 175,
        height: 175
    },
    shoesText: {
        fontFamily: 'FiraSans-Bold',
        fontSize: 16
        
    },
    title: {
        fontSize: 24,
        fontFamily: 'Anton-Regular',
        marginVertical: '2%'
    }
});

export default Footer;