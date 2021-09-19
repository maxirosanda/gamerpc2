import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CrearPc from '../components/creartupc';


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {

    return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={CrearPc} />
      </Drawer.Navigator>
)
}

export default  DrawerNavigator


