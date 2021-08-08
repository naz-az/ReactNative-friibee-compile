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
                
                    
                <View style={{width: '85%'}}>
                <Text style={styles.textTitle}>Submit a new discussion</Text>
                </View>

                <View style={{marginTop: 30}} />

                {/* <View style={{marginTop: 20}} /> */}

                <View style={{width: '85%'}}>
                <Text style={{fontWeight: 'bold', fontSize:18, alignSelf: 'flex-start'}}>TITLE</Text>
                </View>
                <Inputs name="Write the title of your discussion..." icon="quote-left"/>
                <View style={{width: '85%'}}>
                    <Text style={[styles.textBody], {alignSelf: 'flex-start', fontSize:12, color:"#AAA9A9", fontWeight: 'bold'}}>100 characters remaining</Text>
                </View>
                <View style={{marginTop: 20}} />

                <View style={{width: '85%'}}>
                <Text style={{fontWeight: 'bold', fontSize:18, alignSelf: 'flex-start'}}>DESCRIPTION</Text>
                </View>
                <Rectangle name="Write a brief description of your discussion..." icon="file-text-o" />
                
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




                <View style={{marginTop: 5}} />
                <View style={{width: '85%'}}>
                    <Text style={[styles.textBody], {alignSelf: 'flex-start', fontSize:12, color:"#AAA9A9", fontWeight: 'bold'}}>2000 characters remaining</Text>
                </View> 
                <View style={{marginTop: 30}} /> 

                <Text style={{fontWeight: 'bold', fontSize:18}}>DISCUSSION CATEGORY</Text>
                <View style={{marginTop: 10}} />
                
                <View style={{flexDirection: 'row', marginBottom:1}}>
                    <Account color="#3F9888" icon="plus" title="Saving" />
                    <Account color="#A4A4A4" icon="plus" title="Investing"/>
                    <Account color="#A4A4A4" icon="plus"  title="Spending"/>
                </View>

                <View style={{flexDirection: 'row', marginBottom:10}}>
                    <Account color="#A4A4A4" icon="plus" title="Feedbacks" />
                    <Account color="#3F9888" icon="plus" title="Ask"/>
                    <Account color="#A4A4A4" icon="plus"  title="Others"/>
                </View> 

                <View style={{marginTop: 20}} />

                <View style={{width: '85%'}}>
                <Text style={{fontWeight: 'bold', fontSize:14, alignSelf: 'flex-start',fontStyle: 'italic', color:'#383838'}}>Related deal catagories:</Text>
                </View>

                <View style={{flexDirection: 'row', marginBottom:1}}>
                    <Account color="#ec482f" icon="plus" title="Gaming" />
                    <Account color="#A4A4A4" icon="plus" title="Travel"/>
                    <Account color="#A4A4A4" icon="plus"  title="Electronics"/>
                </View>

                <View style={{flexDirection: 'row', marginBottom:1}}>
                    <Account color="#A4A4A4" icon="plus" title="Groceries" />
                    <Account color="#ec482f" icon="plus" title="Sports"/>
                    <Account color="#A4A4A4" icon="plus"  title="Fashion"/>
                </View> 


                {/* <View style={{marginTop: 20}} /> */}


                {/* <TouchableOpacity style={{width: '85%'}}> 
                <Image 
                    source={require('../assets/friibee_back_white1.png')} 
                    resizeMode="center" 
                    style={styles.image} />
                </TouchableOpacity> */}
                
                <Submit title="POST DISCUSSION"  />
                
                
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
        fontSize: 30,
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