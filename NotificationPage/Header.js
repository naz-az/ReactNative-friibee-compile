

// SettingPge

import React from 'react';
import {View, StyleSheet, Text, ScrollView, TouchableOpacity} from 'react-native';


const Login = props => {

    return (
        <ScrollView style={{backgroundColor: 'white'}}>
            <View style={styles.container}>
                
                    
                <View style={[styles.margin]}>
                <Text style={styles.textTitle}>Notifications</Text>
                <Text style={styles.right}>View all</Text>

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
    image: {
        width: 200,
        height: 200,
        marginVertical: 10,
        borderWidth: 1.5,
        //alignItems: 'left'
    },
    textTitle: {
        //fontFamily: 'Foundation',
        marginTop:20,
        fontSize: 28,
        //marginVertical: 10,
        fontWeight:'bold',
        alignSelf: 'flex-start'
        //color:'#f26530'
        
    },

    right: {
    fontSize:12, 
    fontWeight:'bold',
    alignSelf: 'flex-end',
    color: '#707070'
    

},
    title:
    {fontWeight: 'bold', 
    fontSize:18, 
    alignSelf: 'flex-start',
    marginBottom: 20,
    color:'#f26530'
    },
   

    margin: {
        width: '95%',
        //flexDirection:'row'
        
    },
    textBody: {
        fontWeight: 'bold', fontSize:15, alignSelf: 'flex-start', 
    },
});

export default Login