import React from 'react';
import {Alert, FlatList, Linking} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Error from '../../components/Error/Error';
import Loading from '../../components/Loading/Loading';
import DetailCard from '../../components/DetailCard';

const DetailPage = ({route}) => {
  const {idMeal} = route.params;
  const {error, loading, data} = useFetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`,
  );

  if (error) {
    console.log(idMeal);
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }

  const renderDetail = ({item}) => (
    <DetailCard
      meals={item}
      onSelect={() => Linking.openURL(item.strYoutube)}
    />
  );

  return <FlatList data={data.meals} renderItem={renderDetail} />;
};

export default DetailPage;
