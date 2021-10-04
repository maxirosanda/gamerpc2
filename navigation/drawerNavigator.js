import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CrearPc from '../screens/principales/creartupc';
import OrdersNavigator from './ordersNavigation';
import MisPcsNavigator from './misPcsNavigation';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {

    return (
      <Drawer.Navigator initialRouteName="Home" >
        <Drawer.Screen name="Home" component={CrearPc} />
        <Drawer.Screen name="Compras" component={ OrdersNavigator} />
        <Drawer.Screen name="Mi Pc" component={MisPcsNavigator} />
      </Drawer.Navigator>
)
}

export default  DrawerNavigator


