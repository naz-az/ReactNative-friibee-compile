import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView, TouchableOpacity} from 'react-native';

import Inputs from './components/Inputs';
import Submit from './components/Submit';
import Account from './components/Account';
import Rectangle from './components/Rectangle';

import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

import { LinearGradient } from 'expo-linear-gradient';


const Login = props => {
    return (
        <ScrollView style={{backgroundColor: 'white'}}>
            <View style={styles.container}>
            
            <View style={{width: '100%'}}>  
            <View style= {{height: 1,backgroundColor: "#CCCCCC"}}></View>
            </View >

            <View style={{marginTop: 10}}/>

            <View style={{width: '90%'}}>
                <Text style={styles.textTitle}>Post a comment</Text>
                </View>
                <View style={{marginTop: 3}} />


                <Rectangle name="Write your comment..." icon="file-text-o" />
                
                <View style={[styles.rectangle]}>

                    <View style={{flexDirection: 'row', alignSelf: 'flex-start'}}>

                    


                        <TouchableOpacity style={[styles.square]}>
                        
                        <Entypo style={{marginVertical:6,marginHorizontal:6}}
                                name="image" size={24} color="black" />
                               
                                
                        </TouchableOpacity>
                        

                        <TouchableOpacity style={[styles.square]}>
                        <Entypo style={{marginVertical:6,marginHorizontal:6}} 
                                name="link" size={24} color="black" />
                        </TouchableOpacity>


                        <TouchableOpacity style={[styles.square]}>
                        <Fontisto style={{marginVertical:6,marginHorizontal:6}} 
                                name="smiley" size={24} color="black" />
                            </TouchableOpacity>
                    </View>
                </View>

       
                <View style={{marginVertical: -20}} /> 

                
                
                <Submit title="POST COMMENT"  />
                
                
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
        fontSize: 14,
        marginVertical: 10,
        fontWeight:'bold'
        
    },
    textBody: {
        fontFamily: 'Foundation',
        fontSize: 16
    },
    rectangle: {
        width: '90%',
        //borderRadius: 10,
        marginVertical: -2,
        borderWidth: 3.5,
        borderColor: '#EDE0D8',
        height: 60,
        backgroundColor: "#F8F2EF",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
      },
      square: {
        width: 40,
        height: 40,
        //padding:10,
       //backgroundColor: "#FFDECD",
        //alignItems: 'center',
        marginVertical:6,
        marginHorizontal:6,
        borderRadius: 6,
        borderWidth: 1.5,
        borderColor: '#A43B00',
        //justifyContent: 'center'
      },
});

export default Login