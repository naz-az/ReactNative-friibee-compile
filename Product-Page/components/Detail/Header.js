

// SettingPge

import React from 'react';
import {View, StyleSheet, Text, ScrollView, TouchableOpacity} from 'react-native';


const Login = props => {

    return (
        <View>

<View style={[styles.separator]}></View>
       
        <View style={{backgroundColor: 'white'}}>
            <View style={styles.container}>
            
                    
                <View style={[styles.margin]}>
                <Text style={{marginTop:20, fontSize: 28,fontWeight:'bold', alignSelf: 'flex-start', color: '#9D3703'}}>7  
                <Text style={{marginTop:20, fontSize: 28,fontWeight:'bold', alignSelf: 'flex-start', color: 'black'}}> Comments</Text></Text>
                <View style={{marginBottom:15}}></View>

                

                </View>
                <View />

</View>
            </View>
            </View>
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
        width: '95%',
        //flexDirection:'row'
        
    },
    separator: {
        width: '100%',
        height: 1,
        backgroundColor: "black"
      },
});

export default Login