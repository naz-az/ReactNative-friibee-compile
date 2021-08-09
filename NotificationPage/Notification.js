import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';

export default class Notifications extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data:[
        {id:3, image: require('./assets/we.jpg'), name:"Nasruddin Azlan", text:"started following you.", attachment:""},
        {id:2, image: require('./assets/captain_america (2).jpg'), name:"Danie Aswad",     text:"liked your comment “Great deal!” ", attachment:require('./assets/mcbook.jpg')},
        {id:4, image: require('./assets/mo.png'), name:"Maniesegaran",  text:"liked your comment “Only kids sizes left.” ", attachment:require('./assets/nikesh.png')} ,
        {id:5, image: require('./assets/jok.jpg'), name:"Mohandez",  text:"liked your deal post “Sony PlayStation 5”.", attachment:require('./assets/PS5.jpg')},
        {id:1, image: require('./assets/captain_america (2).jpg'), name:"Danie Aswad",    text:"liked your deal post “Swatch GE713”.", attachment:require('./assets/swatch.png')},
        {id:6, image: require('./assets/mo.png'), name:"Maniesegaran", text:"started following you.", attachment:""},
        {id:7, image: require('./assets/jok.jpg'), name:"Mohandez",      text:"liked your comment “Excellent price!” ", attachment:require('./assets/ray.jpg')},
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
          let attachment = <View/>;

          let mainContentStyle;
          if(Notification.attachment) {
            mainContentStyle = styles.mainContent;
            attachment = <Image style={styles.attachment} source={{uri:Notification.attachment}}/>
          }
          return(
            <View style={styles.container}>

              <Image source={{uri:Notification.image}} style={styles.avatar}/>
              <View style={styles.content}>
                <View style={mainContentStyle}>
                  <View style={styles.text}>
                    <Text style={styles.name}>{Notification.name}</Text><Text style={{marginTop: 2}}> {Notification.text}</Text>
                    
                  </View>
                  <Text style={styles.timeAgo}>
                    2 hours ago
                  </Text>
                </View>
                {attachment}
              </View>
            </View>
          );
        }}/>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#FFFFFF"
  },
  container: {
    padding: 16,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: "#FFFFFF",
    alignItems: 'flex-start',
    
  },
  avatar: {
    width:50,
    height:50,
    borderRadius:25,
  },
  text: {
    marginBottom: 5,
    flexDirection: 'row',
    flexWrap:'wrap'
  },
  content: {
    flex: 1,
    marginLeft: 16,
    marginRight: 0
  },
  mainContent: {
    marginRight: 60
  },
  img: {
    height: 50,
    width: 50,
    margin: 0
  },
  attachment: {
    position: 'absolute',
    right: 0,
    height: 50,
    width: 50
  },
  separator: {
    height: 1,
    backgroundColor: "#CCCCCC"
  },
  timeAgo:{
    fontSize:12,
    color:"#696969"
  },
  name:{
    fontSize:16,
    color:"#F26530"
  }
}); 