import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainPage from './pages/MainPage';
import FoodsPage from './pages/FoodPage';
import DetailPage from './pages/DetailPage';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Categories"
          component={MainPage}
          options={{headerTitleStyle: {color: '#ffa500'}}}
        />
        <Stack.Screen name="Meals" component={FoodsPage} />
        <Stack.Screen name="Detail" component={DetailPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
