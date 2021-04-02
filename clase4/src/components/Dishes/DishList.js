import React, { Component } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import HorizontalScrollview from '../HorizontalScrollview';
import { dishTitles, dishData, baseUri } from '../../rawData';
import DishCard from './DishCard';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: '100%',
  },
});

class DishList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: [],
      selectedDish: '',
    };
  }

  selectedDish = selectedDishTitle => {
    const selectedDishes = dishData.filter((dish) => dish.cuisine === selectedDishTitle)

    this.setState({ dishes: selectedDishes });
  }

  render() {
    const { dishes } = this.state;
    return (
      <View>
        <HorizontalScrollview
          dishTitles={dishTitles}
          onSelectedDish={this.selectedDish}
        />
        <FlatList
          style={styles.container}
          data={dishes}
          keyExtractor={dish => dish.id}
          renderItem={({ item }) => (
            <DishCard
              id={item.id}
              title={item.title}
              readyInMinutes={item.readyInMinutes}
              servings={item.servings}
              sourceUrl={item.sourceUrl}
              cuisine={item.cuisine}
              image={item.image}
              baseUri={baseUri}
            />
          )}
        />
      </View>
    );
  }
}

export default DishList;
