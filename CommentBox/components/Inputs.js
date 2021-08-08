import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';

class Inputs extends Component {
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
        width: '90%',
        height: 50,
        borderRadius: 100,
        marginVertical: 5,
        borderWidth: 3.5,
        
    },
    inputContainer: {
        borderBottomWidth: 0,
        
    },
    inputText: {
        color: 'black',
        fontWeight: 'bold',
        marginLeft: 5,
        fontStyle: 'italic',
        fontSize: 16,
        
    }
});

export default Inputs;