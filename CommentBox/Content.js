import React from 'react';
import {View, StyleSheet, Text, ScrollView, Button, TouchableOpacity, Image} from 'react-native';
import Icon from '@expo/vector-icons/Entypo';
import { FontAwesome } from '@expo/vector-icons';

import Dot from './Dot';
import SizeButton from './SizeButton';
import TextContent from './TextContent';
import AddButton from './AddButton';
import Footer from './Footer.js';

const Content = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.title, {flexDirection: 'row'}}>
                <Text style={{fontSize: 25, color: "#862906"}}>$180  </Text> 
                <Text style={[ { fontSize: 25}, {color:"#9A9A9A"}, { textDecorationLine: 'line-through' }, {textDecorationStyle: 'solid'}]}>$1800</Text>
                <Text style={{ fontSize: 25}}>  90% off</Text>
            </View>
            <View opacity={0.2}>
                <Text style={[styles.title, {fontSize: 34}, {marginBottom:20}]} opacity={0.2}>NIKE JOYRIDE RUN FLYKNIT</Text>
            </View>

            <SizeButton> 
            <FontAwesome name="thumbs-o-up" size={24} color="black" /><Text style={{fontSize: 20, color: "#9A9A9A"}}> 180     </Text> 
            <FontAwesome name="thumbs-o-down" size={24} color="black" /><Text style={{fontSize: 20, color: "#9A9A9A"}}> 21</Text> 
            </SizeButton>
            
            
            <View style={styles.dotContainer}>
                <Dot color="#2379F4"></Dot>
                <Dot color="#FB6E53"></Dot>
                <Dot color="#245F10"></Dot>
                <Dot color="#000"></Dot>
            </View>
            <View style={{flexDirection: 'row', width: '100%', height: '10%',}}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <SizeButton bgColor="#17181A" color="#FFF">43</SizeButton>
                    <SizeButton>44</SizeButton>
                    <SizeButton>45</SizeButton>
                    
                </ScrollView>    
            </View>

            
            <View style={{
                   flexDirection:"row",
                   paddingTop:10,
                   paddingBottom:25,
                   alignItems:"center",
                            
                }}>
                    <View style={{width:"20%"}}>
                            <Image
                                source={require('../../assets/img/se.png')}
                                style={{
                                    width:40,
                                    height:40,
                                    borderRadius:13
                                }}
                                />
                    </View>
                    <View style={{
                        width:"60%"
                    }}>
                        <View style={{
                        flexDirection:"row",
                    }}>
                        <Text style={{
                            fontFamily:"Bold",
                            fontSize:18,
                            color:"#862906",
                            marginLeft:-50,
                        }}>Nasruddin</Text>

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