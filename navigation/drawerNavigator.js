import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CrearPc from '../components/creartupc';
import OrdersNavigator from './ordersNavigation';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {

    return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={CrearPc} />
        <Drawer.Screen name="Compras" component={ OrdersNavigator} />
      </Drawer.Navigator>
)
}

export default  DrawerNavigator


