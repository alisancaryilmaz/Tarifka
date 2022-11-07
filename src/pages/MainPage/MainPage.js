import React from 'react';
import {FlatList} from 'react-native';
import CategoryCard from './../../components/CategoryCard';
import Config from 'react-native-config';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import useFetch from './../../hooks/useFetch';

const MainPage = ({navigation}) => {
  const {error, loading, data} = useFetch(Config.API_URL);

  function handleCategorySelect(strCategory) {
    navigation.navigate('Meals', {strCategory});
  }

  const renderCategories = ({item}) => (
    <CategoryCard
      categories={item}
      onSelect={() => handleCategorySelect(item.strCategory)}
    />
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <FlatList
      style={{backgroundColor: '#ffa500'}}
      data={data.categories}
      renderItem={renderCategories}
    />
  );
};

export default MainPage;
