import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView, TouchableOpacity} from 'react-native';

const Shoes = props => {
    return (
        <TouchableOpacity style={styles.shoesContainer} onPress={props.onClick}>
            <Image source={props.img} style={styles.shoesImg} />
            <Text style={styles.shoesText}>{props.children}</Text>
            <View opacity={0.4}>
                <Text style={styles.shoesText}>{props.cost}</Text>
            </View>    
        </TouchableOpacity>        
    )
}

const Content = props => {
    return (
        <ScrollView>
            <Text style={styles.text}>NEW SHOES</Text>
            <View style={{flexDirection: 'row'}}>
                <Shoes img={require('../../assets/img/2.png')} cost="$150" onClick={props.onClicks}>Nike Air Max 270 Bauhaus</Shoes>
                <Shoes img={require('../../assets/img/1.png')} cost="$180">Nike Joyride Run Flyknit</Shoes>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Shoes img={require('../../assets/img/3.png')} cost="$110">Nike Air Max Dia</Shoes>
                <Shoes img={require('../../assets/img/4.png')} cost="$130">Nike Squidward Tentacles</Shoes>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Shoes img={require('../../assets/img/5.png')} cost="$150">Nike Epic React Flyknit 2</Shoes>
                <Shoes img={require('../../assets/img/6.png')} cost="$120">Nike Air Max Dia SE</Shoes>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Anton-Regular',
        fontSize: 26,
        marginHorizontal: '5%'
    },
    shoesContainer: {
        paddingVertical: '2%',
        marginHorizontal: '5%'
    },
    shoesImg: {
        width: 175,
        height: 175
    },
    shoesText: {
        fontFamily: 'FiraSans-Bold',
        fontSize: 16
        
    }
});

export default Content;