import React from 'react';
import {FlatList} from 'react-native';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import FoodCard from '../../components/FoodCard';

const FoodsPage = ({route, navigation}) => {
  const {strCategory} = route.params;

  const handleMealSelect = idMeal => {
    navigation.navigate('Detail', {idMeal});
  };

  const {error, data, loading} = useFetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`,
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }
  const renderMeals = ({item}) => {
    return (
      <FoodCard meals={item} onResult={() => handleMealSelect(item.idMeal)} />
    );
  };
  return (
    <FlatList
      style={{backgroundColor: '#ffa500'}}
      data={data.meals}
      renderItem={renderMeals}
    />
  );
};

export default FoodsPage;
