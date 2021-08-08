import React from 'react';
import {View,Text,Image,ImageBackground,TouchableOpacity} from 'react-native';
import {ScrollView,TextInput} from 'react-native-gesture-handler';
import Icon from '@expo/vector-icons/Entypo';
import Posts from '../screens/Posts'


export default class Home extends React.Component{
    state={
        popularSelected:true
    }
    onTabPressed=()=>{
        this.setState({popularSelected:!this.state.popularSelected})
    }
    render(){
        return(
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                height:"100%",
                backgroundColor:"#F26530"
            }}
          >
              <View style={{
                  height:260,
                  width:"100%",
                  paddingHorizontal:35
              }}>
                  <View style={{
                      flexDirection:"row",
                      width:"100%",
                      paddingTop:40,
                      alignItems:"center"
                  }}>
                      <View style={{
                          width:"50%"
                      }}>
                          <Image source={require('../images/friibee-side.png')}
                            style={{width:200,height:70}}/>
                      </View>
                      <View style={{
                          width:"50%",
                          alignItems:"flex-end",
                      }}>
                          <Icon name = "dots-three-vertical"
                            size={22}
                            color="#d2d2d2"
                            style={{
                                marginRight:-7,
                                marginTop:7
                            }}/>
                      </View>
                  </View>


                <Text style={{
                    fontFamily:"Medium",
                    fontSize:16,
                    color:"#fff1e1",
                    paddingVertical:20
                }}>We help you find the best deals around</Text>

                <View style={{
                    flexDirection:"row",
                    borderColor:"#9ca1a2",
                    borderRadius:15,
                    borderWidth:0.2,
                    paddingVertical:7,
                    alignItems:"center",
                    backgroundColor:"white"
                }}>
                    <TextInput
                        placeholder="search deals ..."
                        style={{
                            paddingHorizontal:10,
                            fontFamily:"Medium",
                            fontSize:18,
                            width:"93%",
                            color:"#797979",
                            backgroundColor:"white",
                            marginLeft:10,
                        }}
                    />
                    <Icon name="magnifying-glass"
                          size={18}
                          color="#797979"/>
                </View>

              </View>

              <View style={{
                  backgroundColor:"white",
                  borderTopLeftRadius:40,
                  borderTopRightRadius:40,
                  height:1550,
                  paddingHorizontal:35,
                  marginLeft:5,
                  marginRight:5,
                  borderBottomLeftRadius:40,
                  borderBottomRightRadius:40,
              }}>
                  <View style={{
                      flexDirection:"row",
                      paddingTop:20
                  }}>
                      <TouchableOpacity
                        onPress={this.onTabPressed}
                        style={{
                            borderBottomColor:this.state.popularSelected ? "#F26530":"#FFF",
                            borderBottomWidth:4,
                            paddingVertical:6
                        }}
                      >
                          <Text style={{
                              fontFamily:"Bold",
                              color:this.state.popularSelected ? "#F26530":"#9ca1a2"
                          }}>POPULAR</Text>
                      </TouchableOpacity>


                      <TouchableOpacity
                        onPress={this.onTabPressed}
                        style={{
                            borderBottomColor:this.state.popularSelected ? "#FFF":"#F26530",
                            borderBottomWidth:4,
                            paddingVertical:6,
                            marginLeft:30
                        }}
                      >
                          <Text style={{
                              fontFamily:"Bold",
                              color:this.state.popularSelected ? "#9ca1a2":"#F26530"
                          }}>RECENT</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        onPress={this.onTabPressed}
                        style={{
                            borderBottomColor:this.state.popularSelected ? "#FFF":"#F26530",
                            borderBottomWidth:4,
                            paddingVertical:6,
                            marginLeft:30
                        }}
                      >
                          <Text style={{
                              fontFamily:"Bold",
                              color:this.state.popularSelected ? "#9ca1a2":"#F26530"
                          }}>TRENDING</Text>
                      </TouchableOpacity>
                  </View>

                  <View style={{
                      flexDirection:"row"
                  }}>
                      <Posts
                        onPress={()=>this.props.navigation.navigate('Detail')}
                        name="Mohan"
                        profile={require('../images/jok.jpg')}
                        photo={require('../images/mcbook.jpg')}
                      />

                      <View style={{
                          height:160,
                          backgroundColor:"#F26530",
                          width:20,
                          marginLeft:20,
                          marginTop:120,
                          borderTopLeftRadius:20,
                          borderBottomLeftRadius:20
                      }}>

                      </View>

                  </View>



                  <View style={{
                      flexDirection:"row"
                  }}>
                     
                      <View style={{
                          height:160,
                          backgroundColor:"#F26530",
                          width:20,
                          marginLeft:-40,
                          marginRight:20,
                          marginTop:120,
                          borderTopRightRadius:20,
                          borderBottomRightRadius:20
                      }}>

                      </View>

                      <Posts
                        onPress={()=>this.props.navigation.navigate('Detail')}
                        name="Manie"
                        profile={require('../images/we.jpg')}
                        photo={require('../images/PS5.jpg')}
                      />

                  </View>

                  <View style={{
                      flexDirection:"row"
                  }}>
                      <Posts
                        onPress={()=>this.props.navigation.navigate('Detail')}
                        name="Danie"
                        profile={require('../images/se.png')}
                        photo={require('../images/nikeshoes.jpg')}
                      />

                      <View style={{
                          height:160,
                          backgroundColor:"#F26530",
                          width:20,
                          marginLeft:20,
                          marginTop:120,
                          borderTopLeftRadius:20,
                          borderBottomLeftRadius:20
                      }}>

                      </View>

                  </View>
              </View>

          </ScrollView>
        )
    }
}