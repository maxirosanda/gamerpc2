import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CrearPc from '../screens/principales/creartupc';
import OrdersNavigator from './ordersNavigation';
import MisPcs from '../screens/misPcs/mispcs'

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {

    return (
      <Drawer.Navigator initialRouteName="Home" >
        <Drawer.Screen name="Home" component={CrearPc} />
        <Drawer.Screen name="Compras" component={ OrdersNavigator} />
        <Drawer.Screen name="Mi Pc" component={ MisPcs} />
      </Drawer.Navigator>
)
}

export default  DrawerNavigator


