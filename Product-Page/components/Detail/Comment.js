import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacityBase
} from 'react-native';

import { Foundation } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons'; 

import Like from './LikeDislike';




export default class Comments extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data:[
        {id:3, image: require('./asset/we.jpg'), name:"Nasruddin Azlan", comment:"Any good running shoe recommendations? I am currently using Nike Air Zoom which I feel quite comfy"},
        {id:2, image: require('./asset/captain_america (2).jpg'), name:"Danie Aswad",   comment:"Can someone tell the model of shoe shown in the pic?"},
        {id:4, image: require('./asset/mo.png'), name:"Maniesegaran",  comment:"Can you pm me the code please?"} ,
        {id:5, image: require('./asset/jok.jpg'), name:"Mohandez", comment:"Cheers for the post. Some decent deals if you can get your size."},
        {id:1, image: require('./asset/captain_america (2).jpg'), name:"Tyson Jackson", comment:"Awesome deal. Heat!"},
        {id:6, image: require('./asset/mo.png'), name:"Peter Man", comment:"I bought the all black version, Great deal"},
        {id:7, image: require('./asset/jok.jpg'), name:"Robbie John", comment:"Tempted anyone got these are they comfy?"},
      ]
    }
  }

  render() {
    return (
      <FlatList
        style={styles.root}
        data={this.state.data}
        extraData={this.state}
        ItemSeparatorComponent={() => {
          return (
            <View style={styles.separator}/>
          )
        }}
        keyExtractor={(item)=>{
          return item.id;
        }}
        renderItem={(item) => {
          const Notification = item.item;
          return(
            
            <View style={styles.container}>
            
              <TouchableOpacity onPress={() => {}}>
                <Image style={styles.image} source={{uri: Notification.image}}/>
              </TouchableOpacity>
              <View style={styles.content}>
                <View style={styles.contentHeader}>
                <TouchableOpacity onPress={() => {}}>
                <Text style={styles.name}>{Notification.name}</Text><Text style={styles.time}>
                  22nd Nov 2020  10:04 am
                  </Text>
                </TouchableOpacity>
                 <View>
                 <Like> 
            <FontAwesome name="thumbs-o-up" size={18} color="#F26530" /><Text style={{fontSize: 14, color: "#9A9A9A"}}> 18</Text> 
            {/* <FontAwesome name="thumbs-o-down" size={18} color="black" /><Text style={{fontSize: 14, color: "#9A9A9A"}}> 21</Text>  */}
            </Like>
                 </View>
                </View>


                <Text rkType='primary3 mediumLine'>{Notification.comment}</Text>
                <View style={{flexDirection: 'row', marginTop:20}}>
                  <TouchableOpacity style={{flexDirection: 'row', marginVertical:-2}}>
                <MaterialCommunityIcons style={{marginRight:6}} name="reply-outline" size={22} color="gray" /><Text style={styles.icons}>Reply</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{flexDirection: 'row', marginVertical:-2}}>
                <AntDesign style={{marginRight:6}} name="like2" size={20} color="gray" /><Text style={styles.icons}>Like</Text>
                </TouchableOpacity>
                
                
                <TouchableOpacity style={{flexDirection: 'row'}}>
                <FontAwesome style={{marginRight:10}} name="share-square-o" size={18} color="gray" /><Text style={styles.icons}>Share</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={{flexDirection: 'row'}}>
                <Octicons style={{marginRight:10}} name="report" size={20} color="gray" /><Text style={styles.icons}>Report</Text>
                </TouchableOpacity>

                </View>
               
              </View>
              <View style={styles.separator}/>
            </View>
          );
        }}/>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#ffffff",
    marginTop:10,
    //width:'100%',
  },
  container: {
    paddingLeft: 19,
    paddingRight: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  content: {
    marginLeft: 16,
    flex: 1,
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6
  },
  separator: {
    height: 1,
    backgroundColor: "#CCCCCC"
  },
  image:{
    width:45,
    height:45,
    borderRadius:20,
    //marginLeft:10
  },
  tab:{
  width:45,
  height:45,
  //flexDirection: 'column',
  },
  time:{
    fontSize:10,
    color:"#808080",
    marginBottom:8,
  },
  icons:{
    fontSize:12,
    color:"#808080",
    marginRight:25,
  },
  name:{
    fontSize:16,
    fontWeight:"bold",
  },
}); 