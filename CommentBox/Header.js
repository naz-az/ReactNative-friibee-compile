

// SettingPge

import React from 'react';
import {View, StyleSheet, Text, ScrollView, TouchableOpacity} from 'react-native';


const Login = props => {

    return (
        <ScrollView style={{backgroundColor: 'white'}}>
            <View style={styles.container}>
                
                    
                <View style={[styles.margin]}>
                <Text style={{marginTop:20, fontSize: 28,fontWeight:'bold', alignSelf: 'flex-start', color: '#9D3703'}}>7  
                <Text style={{marginTop:20, fontSize: 28,fontWeight:'bold', alignSelf: 'flex-start', color: 'black'}}> Comments</Text></Text>
                <View style={{marginBottom:15}}></View>

                

                </View>
                <View />


            </View>
        </ScrollView>      
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textTitle: {
        //fontFamily: 'Foundation',
        marginTop:20,
        fontSize: 28,
        //marginVertical: 10,
        fontWeight:'bold',
        alignSelf: 'flex-start',
        //color:'#f26530'
    },
    right: {
    fontSize:12, 
    fontWeight:'bold',
    alignSelf: 'flex-end',
    color: '#707070'
},
        margin: {
        width: '90%',
        //flexDirection:'row'
        
    },
});

export default Login