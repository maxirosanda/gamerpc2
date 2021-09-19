import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DatosVendedor from '../screens/buy/datosVendedor';
import GameCompatibility from '../screens/buy/gameCompatibility';
import Recommended from '../screens/buy/recommended';

const Tab = createMaterialTopTabNavigator()
const BuyNavigator = () => (

      <Tab.Navigator>
        <Tab.Screen name="Recomendadas"options={{ title: 'DATOS TECNICOS',headerStyle: { backgroundColor: "#000000" } }} component={Recommended} />
        <Tab.Screen name="Vendedor" options={{ title: 'DATOS VENDEDOR',headerStyle: { backgroundColor: "##FB6D01" } }} component={DatosVendedor} />
        <Tab.Screen name="Compatibilidad" options={{ title: 'JUEGOS COMPATIBLES',headerStyle: { backgroundColor: "#000000" } }} component={GameCompatibility} />
      </Tab.Navigator>


);

export default BuyNavigator;