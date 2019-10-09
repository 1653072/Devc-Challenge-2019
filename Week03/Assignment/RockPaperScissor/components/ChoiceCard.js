import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

class ChoiceCard extends React.Component {
    render() {
        let player = this.props.player
        let name, uri

        if (this.props.choice == null) {
            name = null
            uri = null
        }
        else {
            name = this.props.choice.name
            uri = this.props.choice.uri
        }
        
        return (
            <View style={styles.choiceContainer}>
                <Text style={styles.choiceDescription}>{player}</Text>
                <Image source={{uri}} resizeMode="contain" style={styles.choiceImage} />
                <Text style={styles.choiceCardTitle}>{name}</Text>
            </View>
        );
    }
}

export { ChoiceCard }

const styles = StyleSheet.create({
    choiceContainer: {
        flex: 1,
        alignItems: 'center',
    },
    choiceDescription: {
        fontSize: 25,
        color: '#250902',
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
    choiceCardTitle: {
        fontSize: 30,
        color: '#250902'
    },
    choiceImage: {
        width: 150,
        height: 150,
        padding: 10,
    }
});
