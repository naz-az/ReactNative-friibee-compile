// SettingPge

import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView, Switch, TouchableOpacity, Touchable} from 'react-native';

import Inputs from '../components/Inputs';
import Submit from '../components/Submit';
import Account from '../components/Account';
import Rectangle from '../components/Rectangle';

import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Login = props => {
    const [isSwitchEnabled, setSwitch] = React.useState(false)

    return (
        <ScrollView style={{backgroundColor: 'white'}}>
            <View style={styles.container}>
                
                    
                <View style={[styles.margin]}>
                <Text style={styles.textTitle}>Settings</Text>
                </View>
                <View style={{marginTop: 20}} />

                <View style={[styles.margin]}>
                <Text style={styles.subTitle}>Notifications</Text>
                </View>
                <View style={{marginTop: 20}} />
                
                

            <View style={[styles.margin]}> 

            <Text style={[styles.title]}>USER</Text>
            <View style={{
                   flexDirection:"row", alignItems:"center",
                   //paddingTop:5, 
                        }}>

                    <View style={{width:"40%"}}>
                    <Text style={[styles.textBody]}>Username</Text>
                    <Text style={{fontSize:13, color: '#636363'}}>Jackson Tyson</Text>
                    </View>
                
                    <View style={{width:"60%", alignItems:"flex-end"}}>
                       <Account color="white" title="Change"/>
                    </View>
            </View>

            <View style={{
                   flexDirection:"row",
                   paddingTop:5,
                   alignItems:"center",
                            
                }}>
                    <View style={{width:"40%"}}>
                    <Text style={[styles.textBody]}>Password</Text>
                    <Text style={{fontSize:13, color: '#636363'}}>**************</Text>
                    </View>
                   
                    <View style={{
                        width:"60%",
                        alignItems:"flex-end"
                    }}>
                       <Account color="white" title="Change"/>
                    </View>
               </View>


               <View style={{
                   flexDirection:"row",
                   paddingTop:5,
                   alignItems:"center",
                            
                }}>
                    <View style={{width:"40%"}}>
                    <Text style={[styles.textBody]}>E-mail Address</Text>
                    <Text style={{fontSize:13, color: '#636363'}}>JacksonTyson@gmail.com</Text>
                    </View>
                   
                    <View style={{
                        width:"60%",
                        alignItems:"flex-end"
                    }}>
                       <Account color="white" title="Change"/>
                    </View>
               </View>

               {/* <View style={{
                   flexDirection:"row",
                   paddingTop:5,
                   alignItems:"center",
                            
                }}>
                    <View style={{width:"20%"}}>
                    <Text style={[styles.textBody]}>Avatar</Text>
                    
                    </View>
                   
                    <View style={{
                        width:"90%",
                        alignItems:"flex-end"
                    }}>
                       <Round />
                    </View> 
                </View> */}

<View style={{width: '85%', paddingTop:20, paddingBottom:10}}>
                <Text style={[styles.textBody]}>About Me</Text>
                </View>
                <Rectangle name="Write a brief description of yourself..." icon="file-text-o" />
                
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

                    <View style={{width: '85%', marginTop:10, marginBottom:20}}>
                    <Text style={[styles.textBody], {alignSelf: 'flex-start', fontSize:12, color:"#AAA9A9", fontWeight: 'bold'}}>100 characters remaining</Text>
                </View>


                <View style={{
                   flexDirection:"row",
                   paddingTop:5,
                   alignItems:"center",
                            
                }}>
                    <View style={{width:"40%"}}>
                    <Text style={[styles.textBody]}>Deactivate Account</Text>
       
                    </View>
                   
                    <View style={{
                        width:"60%",
                        alignItems:"flex-end"
                    }}>
                        <Text style={{flexDirection:"row" }}>
                       <MaterialCommunityIcons style={{marginTop:10}} name="delete-forever-outline" size={24} color="black" />
                       <Text style={{marginTop:14}}>DEACTIVATE</Text>
                       </Text>
                    </View>
               </View>

               

                <View style={{marginTop: 40}} />
                <Text style={[styles.title]}>MESSAGES</Text>
                <Text style={[styles.textBody]}>When someone sends me a message </Text>
                <Switch style={[styles.switch]}
                value={isSwitchEnabled}
                onValueChange={(value) => setSwitch(value)}
                trackColor={{true:'#94E8E0'}}
                />
                <View style={{marginTop: 40}} />
                <Text style={[styles.title]}>DEALS</Text>
                <Text style={[styles.textBody]}>When someone upvote/ downvote my deal</Text>
                <Switch style={[styles.switch]}
                value={isSwitchEnabled}
                onValueChange={(value) => setSwitch(value)}
                trackColor={{true:'#94E8E0'}}
                />
                <View style={{marginTop: 40}} />
                <Text style={[styles.textBody]}>When someone comments on my deal</Text>
                <Switch style={[styles.switch]}
                value={isSwitchEnabled}
                onValueChange={(value) => setSwitch(value)}
                trackColor={{true:'#94E8E0'}}
                />
                <View style={{marginTop: 40}} />
                <Text style={[styles.textBody]}>When my deal becomes popular/ trending</Text>
                <Switch style={[styles.switch]}
                value={isSwitchEnabled}
                onValueChange={(value) => setSwitch(value)}
                trackColor={{true:'#94E8E0'}}
                />
                <View style={{marginTop: 40}} />
                <Text style={[styles.textBody]}>When my post is about to expire</Text>
                <Switch style={[styles.switch]}
                value={isSwitchEnabled}
                onValueChange={(value) => setSwitch(value)}
                trackColor={{true:'#94E8E0'}}
                />
                <View style={{marginTop: 40}} />
                <Text style={[styles.textBody]}>Set reminder/ time before my deal expires</Text>
                <Switch style={[styles.switch]}
                value={isSwitchEnabled}
                onValueChange={(value) => setSwitch(value)}
                trackColor={{true:'#94E8E0'}}
                />
                 <View style={{marginTop: 50}} />
                <Text style={[styles.title]}>COMMENTS</Text>
                <Text style={[styles.textBody]}>When someone replies to my comments</Text>
                <Switch style={[styles.switch]}
                value={isSwitchEnabled}
                onValueChange={(value) => setSwitch(value)}
                trackColor={{true:'#94E8E0'}}
                />
                <Text style={[styles.textBody]}>When someone replies to my comments</Text>
                <Switch style={[styles.switch]}
                value={isSwitchEnabled}
                onValueChange={(value) => setSwitch(value)}
                trackColor={{true:'#94E8E0'}}
                />
                <View style={{marginTop: 40}} />
                <Text style={[styles.textBody]}>When someone upvote/ downvote my comments</Text>
                <Switch style={[styles.switch]}
                value={isSwitchEnabled}
                onValueChange={(value) => setSwitch(value)}
                trackColor={{true:'#94E8E0'}}
                />
                <View style={{marginTop: 40}} />
                <Text style={[styles.textBody]}>When my comment becomes top comment</Text>
                <Switch style={[styles.switch]}
                value={isSwitchEnabled}
                onValueChange={(value) => setSwitch(value)}
                trackColor={{true:'#94E8E0'}}
                />
                <View style={{marginTop: 40}} />
                <Text style={[styles.textBody]}>Activity on my comments</Text>
                <Switch style={[styles.switch]}
                value={isSwitchEnabled}
                onValueChange={(value) => setSwitch(value)}
                trackColor={{true:'#94E8E0'}}
                />
                <View style={{marginTop: 50}} />
                <Text style={[styles.title]}>DISCUSSION</Text>
                <Text style={[styles.textBody]}>When someone upvote/ downvote my discussion</Text>
                <Switch style={[styles.switch]}
                value={isSwitchEnabled}
                onValueChange={(value) => setSwitch(value)}
                trackColor={{true:'#94E8E0'}}
                />
                <View style={{marginTop: 40}} />
                <Text style={[styles.textBody]}>When someone comments on my discussion</Text>
                <Switch style={[styles.switch]}
                value={isSwitchEnabled}
                onValueChange={(value) => setSwitch(value)}
                trackColor={{true:'#94E8E0'}}
                />
                <View style={{marginTop: 40}} />
                <Text style={[styles.textBody]}>When my discussion becomes popular/trending</Text>
                <Switch style={[styles.switch]}
                value={isSwitchEnabled}
                onValueChange={(value) => setSwitch(value)}
                trackColor={{true:'#94E8E0'}}
                />
                <View style={{marginTop: 50}} />
                <Text style={[styles.title]}>USER</Text>
                <Text style={[styles.textBody]}>When someone @mentions my username in posts/comments/articles</Text>
                <Switch style={[styles.switch]}
                value={isSwitchEnabled}
                onValueChange={(value) => setSwitch(value)}
                trackColor={{true:'#94E8E0'}}
                />
                <View style={{marginTop: 40}} />
                <Text style={[styles.textBody]}>New Followers</Text>
                <Switch style={[styles.switch]}
                value={isSwitchEnabled}
                onValueChange={(value) => setSwitch(value)}
                trackColor={{true:'#94E8E0'}}
                />
                <View style={{marginTop: 40}} />
                <Text style={[styles.textBody]}>When someone I follow posts a deal</Text>
                <Switch style={[styles.switch]}
                value={isSwitchEnabled}
                onValueChange={(value) => setSwitch(value)}
                trackColor={{true:'#94E8E0'}}
                />
                 <View style={{marginTop: 40}} />
                <Text style={[styles.textBody]}>When I earn a higher ranking/ badge/ level</Text>
                <Switch style={[styles.switch]}
                value={isSwitchEnabled}
                onValueChange={(value) => setSwitch(value)}
                trackColor={{true:'#94E8E0'}}
                />
               

               
            </View>
            
            <View style={{marginTop: 300}} />
                

                <View style={[styles.margin]}>
                </View>
                <Inputs name="Deal Expires" icon="calendar-times-o" pass={true} />
                <View style={{marginTop: 20}} />

                <Text style={{fontWeight: 'bold', fontSize:18}}>CATEGORY</Text>
                
                <View style={{flexDirection: 'row', marginBottom:1}}>
                    <Account color="#ec482f" icon="plus" title="Gaming" />
                    <Account color="gray" icon="plus" title="Travel"/>
                    <Account color="gray" icon="plus"  title="Electronics"/>
                </View>

                <View style={{flexDirection: 'row', marginBottom:10}}>
                    <Account color="gray" icon="plus" title="Groceries" />
                    <Account color="#ec482f" icon="plus" title="Sports"/>
                    <Account color="gray" icon="plus"  title="Fashion"/>
                </View> 

                <View style={{marginTop: 20}} />

                
                <TouchableOpacity style={[styles.margin]}> 
              
                </TouchableOpacity>
                
                <Submit title="POST DEAL"  />
            

                

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
        fontWeight:'bold',
        //color:'#f26530'
        
    },
    subTitle: {
        //fontFamily: 'Foundation',
        fontSize: 25,
        marginVertical: 10,
        fontWeight:'bold',
        //color:'#f26530'
        
    },
    title:
    {fontWeight: 'bold', 
    fontSize:18, 
    alignSelf: 'flex-start',
    marginBottom: 20,
    color:'#f26530'
    },
   

    margin: {
        width: '85%'
        
    },
    textBody: {
        fontWeight: 'bold', fontSize:15, alignSelf: 'flex-start', 
    },
    switch:{
        alignSelf:'flex-end', borderWidth: 0.1, borderColor:'#E1D8D4', shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 1}, borderRadius:20, marginVertical: -20
    },
    rectangle: {
        width: '100%',
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