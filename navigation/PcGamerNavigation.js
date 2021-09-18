import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CrearPc from '../components/creartupc'
import Recommended from '../components/recommended'
import Game from '../components/game'
import Programs from '../components/programs'
import BuildPc  from '../components/buildpc';

const Stack = createNativeStackNavigator();
const PcGamerNavigator = () => (

    <Stack.Navigator>
        <Stack.Screen name="Home" component={CrearPc} options={{ title: 'Crear PC',headerStyle: { backgroundColor: "#ffffff" } }}/>
        <Stack.Screen name="Recommended" component={Recommended} options={{title: "Recomendada"}} />
        <Stack.Screen name="Game" component={Game} options={{title: "Seleccion por juegos"}}  />
        <Stack.Screen name="Programs" component={Programs} options={{title: "Seleccion por programa"}} />
        <Stack.Screen name="BuildPc" component={BuildPc} options={{title: "Armar Pc Manualmente"}} />
    </Stack.Navigator>

);

export default PcGamerNavigator;