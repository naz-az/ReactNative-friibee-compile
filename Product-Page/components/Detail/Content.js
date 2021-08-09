import React from 'react';
import {View, StyleSheet, Text, ScrollView, Button, TouchableOpacity, Image} from 'react-native';
import Icon from '@expo/vector-icons/Entypo';
import { FontAwesome } from '@expo/vector-icons';

import Dot from './Dot';
import SizeButton from './SizeButton';
import TextContent from './TextContent';
import AddButton from './AddButton';
import Footer from './Footer.js';

import Comment from './Comment';
import PostComment from './PostComment';
import Header from './Header';



const Content = () => {
    return (

        <ScrollView style={styles.container}>
            <View style={styles.title, {flexDirection: 'row'}}>
                <Text style={{fontSize: 25, color: "#862906"}}>$150  </Text> 
                <Text style={[ { fontSize: 25}, {color:"#9A9A9A"}, { textDecorationLine: 'line-through' }, {textDecorationStyle: 'solid'}]}>$1800</Text>
                <Text style={{ fontSize: 25}}>  90% off</Text>
            </View>
            <View opacity={0.2}>
                <Text style={[styles.title, {fontSize: 34}, {marginBottom:20}]} opacity={0.2}>Nike Air Max 270 React “Bauhaus”</Text>
            </View>

            <SizeButton> 
                <TouchableOpacity> 
            <FontAwesome name="thumbs-o-up" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{fontSize: 20, color: "#9A9A9A"}}> 180    </Text> 
            
            <TouchableOpacity> 
            <FontAwesome name="thumbs-o-down" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{fontSize: 20, color: "#9A9A9A"}}> 21</Text> 
            </SizeButton>
            <View style={{marginBottom: 20}}/>
            
            
            <View style={{
                   flexDirection:"row",
                   paddingTop:10,
                   paddingBottom:20,
                   alignItems:"center",
                            
                }}>
                    <TouchableOpacity style={{width:"20%"}}>
                            <Image
                                source={require('./asset/we.jpg')}
                                style={{
                                    width:40,
                                    height:40,
                                    borderRadius:13
                                }}
                                />
                    </TouchableOpacity>
                    <View style={{
                        width:"60%"
                    }}>
                        <View style={{
                        flexDirection:"row",
                    }}>
                        <TouchableOpacity style={{
                            fontFamily:"Bold",
                            fontSize:18,
                            color:"#862906",
                            marginLeft:-50,
                        }}>Nasruddin</TouchableOpacity>

<Image
                                source={require('../../assets/img/plat.jpg')}
                                style={{
                                    width:15,
                                    height:20,
                                    borderRadius:13,
                                    marginLeft:6,
                                }}
                                />

</View>

                        <Text style={{
                            fontFamily:"Medium",
                            fontSize:12,
                            color:"#9ca1a2",
                            marginLeft:-50,
                        }}>
                            5 mins ago
                        </Text>
                    </View>
                    <View style={{
                        width:"10%",
                        alignItems:"flex-end"
                    }}>
                    </View>
               </View>
                    
            <TextContent />
            <AddButton />
            <View style={styles.line} />
            <Footer />
            
        <Header />

        
            <Comment />
            <PostComment />

        

        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '50%',
        marginHorizontal: '5%'
    },
    title: {
        fontFamily: 'Anton-Regular',
       
        
    },
    dotContainer: {
        flexDirection: 'row',
        marginVertical: '5%'
    },
    line: {
        marginVertical: '2%',
        borderBottomColor: '#000',
        borderBottomWidth: 1
    }
});

export default Content;