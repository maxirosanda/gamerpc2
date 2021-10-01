import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Game from '../screens/principales/game'


const Stack = createNativeStackNavigator()

const GamesNavigator = () => (

    <Stack.Navigator>
       <Stack.Screen name="Games" component={Game} options={{title: "Seleccion por juegos"}}  />
    </Stack.Navigator>

);

export default  GamesNavigator