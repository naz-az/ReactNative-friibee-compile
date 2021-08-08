import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList
} from 'react-native';


export default function App() {
    
return (
   
<View style={{
                   flexDirection:"row",
                   paddingTop:10,
                   paddingBottom:25,
                   alignItems:"center",
                            
                }}>
                    <View style={{width:"25%"}}>
                            <Image
                                source={require('./img/se.png')}
                                style={{
                                    width:40,
                                    height:40,
                                    borderRadius:13
                                }}
                                />
                    </View>
                    <View style={{
                        // width:"62%"
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
                                source={require('./img/plat.jpg')}
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
                        width:"63%",
                        alignItems:"flex-end"
                    }}><Text style={[styles.time]}>9:58 am</Text>
                    </View>
               </View>
                    
               
                    );
                };



                const styles = StyleSheet.create({
                    time:{
                        fontSize:11,
                        color:"#808080",
    

                },
            }); 