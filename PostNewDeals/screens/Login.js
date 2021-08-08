import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView, TouchableOpacity} from 'react-native';

import Inputs from '../components/Inputs';
import Submit from '../components/Submit';
import Account from '../components/Account';

const Login = props => {
    return (
        <ScrollView style={{backgroundColor: 'white'}}>
            <View style={styles.container}>
                
                    
                <View style={{width: '85%'}}>
                <Text style={styles.textTitle}>Submit a new deal</Text>
                </View>

                <View style={{marginTop: 20}} />
                
                <View style={{width: '85%'}}>
                <Text style={{fontWeight: 'bold', fontSize:18}}>Deal link</Text>
                <Text style={{fontSize:12}}>(optional)</Text>
                </View>
                <Inputs name="https://www.ebay.com.my/..."  pass={true}/>
                <View style={{marginTop: 20}} />

                <View style={{color:'#AAA9A9'}}>----------------------------------------------------------------------------------------</View>

                <View style={{marginTop: 20}} />

                <View style={{width: '85%'}}>
                <Text style={{fontWeight: 'bold', fontSize:18, alignSelf: 'flex-start'}}>TITLE</Text>
                </View>
                <Inputs name="TITLE" icon="quote-left"/>
                <View style={{marginTop: 20}} />

                <View style={{width: '85%'}}>
                <Text style={{fontWeight: 'bold', fontSize:18, alignSelf: 'flex-start'}}>DESCRIPTION</Text>
                </View>
                <Inputs name="DESCRIPTION" icon="file-text-o" />
                <View style={{width: '85%'}}>
                    <Text style={[styles.textBody], {alignSelf: 'flex-start', fontSize:12, color:"#AAA9A9", fontWeight: 'bold'}}>100 characters remaining</Text>
                </View>
                <View style={{marginTop: 20}} />

                <View style={{width: '85%'}}>
                <Text style={{fontWeight: 'bold', fontSize:18, alignSelf: 'flex-start'}}>PRICE (OLD)</Text>
                </View>
                <Inputs name="PRICE (Old)" icon="dollar" />
                <View style={{marginTop: 20}} />
                
                <View style={{width: '85%'}}>
                <Text style={{fontWeight: 'bold', fontSize:18, alignSelf: 'flex-start'}}>PRICE (NEW)</Text>
                </View>
                <Inputs name="PRICE (New)" icon="dollar" />
                <View style={{marginTop: 20}} />

              

            
                <View style={{width: '85%'}}>
                <Text style={{fontWeight: 'bold', fontSize:18, alignSelf: 'flex-start'}}>DEAL STARTS</Text>
                </View>
                <Inputs name="Deal Starts" icon="calendar-check-o" pass={true} /> <View style={{marginTop: 20}} />
                

                <View style={{width: '85%'}}>
                <Text style={{fontWeight: 'bold', fontSize:18, alignSelf: 'flex-start'}}>DEAL EXPIRES</Text>
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

                <View style={{width: '85%'}}>
                <Text style={{fontWeight: 'bold', fontSize:18, alignSelf: 'flex-start'}}>UPLOAD IMAGE</Text>
                </View>

                <TouchableOpacity style={{width: '85%'}}> 
                <Image 
                    source={require('../assets/friibee_back_white1.png')} 
                    resizeMode="center" 
                    style={styles.image} />
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
        fontWeight:'bold'
        
    },
    textBody: {
        fontFamily: 'Foundation',
        fontSize: 16
    }
});

export default Login