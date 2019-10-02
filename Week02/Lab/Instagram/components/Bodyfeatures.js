import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Feather, MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

class Bodyfeatures extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            likequantity: 0
        };

        this.handlePressLike = this.handlePressLike.bind(this);
    }

    handlePressLike = () => {
        likevar = this.state.likequantity;
        this.setState({ likequantity: likevar+1 });
        alert("Liked");
    }

    render() {
        return (
        <View style={styles.features}>
            <View style={styles.featuresLine}>
                <Feather
                    name="heart"
                    size={26}
                    color="black"
                    style={{margin: 10}}
                    onPress={this.handlePressLike}
                />
                <MaterialCommunityIcons
                    name="comment-outline"
                    size={26}
                    color="black"
                    style={{margin: 10}}
                    onPress={() => alert("Comment")}
                />
                <AntDesign
                    name="upload"
                    size={26}
                    color="black"
                    style={{margin: 10}}
                    onPress={() => alert("Upload")}
                />
            </View>
            <View style={styles.featuresLine}>
                <AntDesign
                    name="heart"
                    size={26}
                    color="black"
                    style={{margin: 10}}
                />
                <View style={styles.featureLike}>
                    <Text style={styles.likequantity}>{this.state.likequantity}</Text>
                    <Text>likes</Text>
                </View>
            </View>
        </View>
        );
    }
}

export { Bodyfeatures }

const styles = StyleSheet.create({
    features: {
        flexDirection: 'column',
    },
    featuresLine: {
        flexDirection: 'row',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginHorizontal: 10,
    },
    featureLike: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    likequantity: {
        marginRight: 5,
    }
});
