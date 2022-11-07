import React from 'react';
import {
  View,
  ImageBackground,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './FoodCard.style';

const FoodCard = ({meals, onResult}) => {
  return (
    <TouchableWithoutFeedback onPress={onResult}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={{uri: meals.strMealThumb}}>
          <View style={styles.inner_container}>
            <View style={styles.blackview}>
              <Text style={styles.title}>{meals.strMeal}</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FoodCard;
