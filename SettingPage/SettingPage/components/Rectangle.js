import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';

class Rectangle extends Component {
    state = {isFocused: false};

    onFocusChange = () => {
        this.setState({isFocused: true})
    }

    render() {
        return(
            <View style={[styles.container, {borderColor: this.state.isFocused ? '#EBAB93': '#eee'}]}>
                <Input 
                    placeholder={this.props.name}
                    onFocus={this.onFocusChange}
                    inputContainerStyle={styles.inputContainer}
                    inputStyle={styles.inputText}
                    secureTextEntry={this.props.pass}
                    leftIcon= {
                        <Icon 
                            name={this.props.icon}
                            size={22}
                            color={this.state.isFocused ? '#EBAB93' : 'grey'}
                        />
                    }
                />
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 150,
        // borderRadius: 10,
        // marginVertical: 5,
        borderWidth: 3.5,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        
    },
    inputContainer: {
        borderBottomWidth: 0,
        //height:200
        
    },
    inputText: {
        color: 'black',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 16,
        marginLeft: 5,
        
    }
});

export default Rectangle;