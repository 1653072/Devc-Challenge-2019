import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function ActiveScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Active Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ff7961',
        justifyContent: 'center'
    },
    text: {
        fontSize: 18
    }
});