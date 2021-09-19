import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BuyNavigator from './buyNavigator';

const Stack = createNativeStackNavigator();
const RecomendadosNavigator = () => (

    <Stack.Navigator>
        <Stack.Screen name="Recommended" component={BuyNavigator} options={{title: "Recomendada"}} />
       
    </Stack.Navigator>

);

export default RecomendadosNavigator;