import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function CompleteScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Complete Screen</Text>
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