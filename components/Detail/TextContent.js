import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TextContent = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>
                Men's Shoes
            </Text>
            <Text style={styles.textContent}>
            The blend of art and style. Nike’s first lifestyle Air Max meets the softest, smoothest and resilient foam, Nike React. The design draws inspiration from radiating colors and textures found in various art movements over the last 100+ years. “Bauhaus” pays tribute to the school’s founding of simplified, geometric shapes with an eye-catching asymmetrical color balance.
            </Text>
            <Text style={styles.textList}>
                - Shown: PHANTOM/UNIVERSITY GOLD-UNIVERSITY RED-BLACK-KINETIC GREEN
            </Text>
            <Text style={styles.textList}>
                - Style: AO4971-002
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginRight: '5%'
    },
    textTitle: {
        fontSize: 22,
        fontFamily: 'FiraSans-Medium',
        marginVertical: '2%'
    },
    textContent: {
        fontSize: 16,
        fontFamily: 'FiraSans-Regular',
        lineHeight: 25,
        marginVertical: '2%'
    },
    textList: {
        fontSize: 16,
        fontFamily: 'FiraSans-Regular',
        lineHeight: 25,
    }
});

export default TextContent;