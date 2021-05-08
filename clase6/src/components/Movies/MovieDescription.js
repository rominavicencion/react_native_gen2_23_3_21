import React, { Component } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    text: {
        color: '#2980b9',
        textDecorationLine: 'underline',
    },
    descriptionContainer: {
        marginVertical: 10,
    },
});

class MovieDescription extends Component {
    
    render() {

        const { description, onPress, showDescription } = this.props;

        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={onPress}
                >
                    <Text style={styles.text}>Ver Descripción</Text>
                </TouchableOpacity>

                { 
                    showDescription && (
                        <View style={styles.descriptionContainer}>
                            <Text>{description}</Text>
                        </View>
                    )
                }


            </View>
        );
    };
};

export default MovieDescription;