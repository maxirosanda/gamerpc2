import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CrearPc from '../components/creartupc';
import OrdersUser from '../components/ordersUser';


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {

    return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={CrearPc} />
        <Drawer.Screen name="Compras" component={OrdersUser} />
      </Drawer.Navigator>
)
}

export default  DrawerNavigator


