import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView, Image } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34495e',
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        color: 'gray',
        textDecorationLine: 'underline',
        marginTop: 30,
    },
    image: {
        marginTop: 30,
        height: 500,
        width: '100%',
    },
    descriptionContainer: {
        borderRadius: 5,
        backgroundColor: '#ecf0f1',
        marginVertical: 15,
        marginHorizontal: 10,
        paddingVertical: 15,
        paddingHorizontal: 15,
    },
    descriptionText: {
        color: 'gray',
        fontSize: 20,
    },
});

const MovieDetail = ({ 
    route: {
        params: {
            title,
            posterurl,
            description,
            validImage,
        }
    }
        
}) => {
    console.log({posterurl});
    console.log({validImage});
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>{title}</Text>
                <Image
                    style={styles.image}
                    source={
                    validImage
                        ? { uri: posterurl }
                        : require('./../assets/no_image_available.jpg')
                    }
                />
                <View style={styles.descriptionContainer}>
                    <Text style={styles.descriptionText}>
                        {description}
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default MovieDetail;
