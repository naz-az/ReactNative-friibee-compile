import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { Foundation } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const AddButton = () => {
    return (

        <View> 
        <TouchableOpacity style={styles.container}>
            <Text style={styles.title}>GO TO DEAL  </Text>

            <AntDesign name="export"
                          size={20}
                          color="white"/>
        </TouchableOpacity>

<View style={{flexDirection: 'row', marginTop:10}}>
            <TouchableOpacity style={{flexDirection: 'row', marginVertical:-2}}>
            <FontAwesome5 style={{marginRight:8}} name="comments" size={20} color="gray" /><Text style={styles.icons}>Comment</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection: 'row'}}>
                <FontAwesome style={{marginRight:10}} name="share-square-o" size={18} color="gray" /><Text style={styles.icons}>Share</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection: 'row'}}>
                <Octicons style={{marginRight:10}} name="report" size={20} color="gray" /><Text style={styles.icons}>Report</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection: 'row'}}>
            <MaterialCommunityIcons style={{marginRight:6}} name="bookmark-plus-outline" size={22} color="gray" /><Text style={styles.icons}>Bookmark</Text>
            </TouchableOpacity>

        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 50,
        backgroundColor: '#F26530',
        borderRadius: 5,
        marginVertical: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    title: {
        color: '#FFF',
        fontFamily: 'FiraSans-Bold',
        fontSize: 16
    },
    icons:{
        fontSize:12,
        color:"#808080",
        marginRight:25,
      },
});

export default AddButton;