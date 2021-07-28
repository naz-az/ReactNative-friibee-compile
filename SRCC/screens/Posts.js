import React from 'react';
import {View,Text,Image,ImagBackground, ImageBackground} from 'react-native';
import Icon from "@expo/vector-icons/Entypo"
import {TouchableOpacity} from 'react-native-gesture-handler';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';



export default class Posts extends React.Component{
    state={
        liked:false
    }
    onLike=()=>{
        this.setState({liked:!this.state.liked})
    }
    render(){

        const {name,profile,photo,onPress} = this.props  

        return(
            
            <View style= {{backgroundColor: "#F2653040", borderRadius: 20}}>
             {/* <LinearGradient colors={['#d11d1d', '#da3421', '#e24625', '#ea562a', '#f26530']} style={{borderRadius:20}}> */}
            <BlurView intensity={100} BlurTint={"dark"} style={{//backgroundColor: "black", 
            marginVertical: 0, paddingHorizontal: 10, paddingBottom: 15, borderRadius:20}}>
               <View style={{
                   flexDirection:"row",
                   paddingTop:15,
                   alignItems:"center",
                                               
                }}>
                    <TouchableOpacity style={{width:"100%"}}>
                            <Image
                                source={profile} 
                                style={{
                                    width:55,
                                    height:55,
                                    borderRadius:100
                                }}
                                />
                    </TouchableOpacity>
                    <View style={{
                        width:"60%"
                    }}>
                        <Text style={{
                            fontFamily:"Bold",
                            fontSize:14,
                            color:"#862906",
                            marginLeft:20,
                        }}>{name}</Text>

                        

                        <Text style={{
                            fontFamily:"Medium",
                            fontSize:12,
                            color:"#9ca1a2",
                            marginLeft:20,
                        }}>
                            5 mins ago
                        </Text>
                    </View>
                    <View style={{
                        width:"20%",
                        alignItems:"flex-end"
                    }}>
                        <Icon
                            name="sound-mix"
                            color="#862906"
                            size={20}
                        />
                    </View>
               </View>

               <View style={{
                   flexDirection:"row",
                   width:"100%",
                   paddingTop:20,
                   //backgroundColor: "black"
               }}>
                    <ImageBackground 
                    source={photo}
                    style={{
                        width:"100%",
                        height:380,
                    }}
                    imageStyle={{
                        borderRadius:20
                    }}
                    >
                        <View style={{
                            height:"100%",
                            flexDirection:"row",
                            alignItems:'flex-end',
                            justifyContent:"flex-end"
                        }}>


                            <TouchableOpacity
                                onPress={onPress}
                                style={{
                                    marginBottom:20,
                                    borderRadius:5,
                                    padding:5,
                                    backgroundColor:"#e8e8e8"
                                }}
                            >
                                <Icon name="forward"
                                color="#862906"
                                size={20}/>
                            </TouchableOpacity>


                            <TouchableOpacity
                                onPress={this.onLike}
                                style={{
                                    marginBottom:20,
                                    borderRadius:5,
                                    padding:5,
                                    backgroundColor:"#e8e8e8",
                                    marginLeft:10,
                                    marginRight:20
                                }}
                            >
                                <Icon name= {this.state.liked === true ? "heart":"heart-outlined"} 
                                color= {this.state.liked===true? "red":"#862906"}
                                size={20}/>
                            </TouchableOpacity>

                        </View>
                    </ImageBackground>
               </View>
            </BlurView>
            </View>
            
        )
    }
}