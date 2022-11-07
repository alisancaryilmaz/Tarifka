import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import styles from './DetailCard.style';

const Detail = ({meals, onSelect}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: meals.strMealThumb}} style={styles.image} />
      <View style={styles.text_container}>
        <Text style={styles.title}>{meals.strMeal}</Text>
        <Text style={styles.areatitle}>{meals.strArea}</Text>
      </View>
      <View style={styles.divider} />
      <Text style={styles.description}>{meals.strInstructions}</Text>
      <TouchableOpacity style={styles.button} onPress={onSelect}>
        <Text style={styles.button_text}>Watch on Youtube</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Detail;
