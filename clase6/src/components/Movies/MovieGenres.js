import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Chip from './../Chip';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});

const MovieGenres = ({ genres, genreColors, pressable, onPress }) => {

    const genresChip = genres.map((genre, index) => {
        
        const filtered = Object.keys(genreColors)
            .filter(key => genre.includes(key))
            .reduce((obj, key) => genreColors[key], {});

        if (pressable) {
            return (
                <Chip
                    pressable
                    onPress={onPress}
                    key={`genres-${index}`} 
                    value={genre}
                    chipGenreColor={filtered}
                />
            )
        } else {
            return (
                <Chip
                    key={`genres-${index}`} 
                    value={genre}
                    chipGenreColor={filtered}
                />
            )
        }
    });
    return (
        <View style={styles.container}>
            {genresChip}
        </View>
    );
};

export default MovieGenres;
