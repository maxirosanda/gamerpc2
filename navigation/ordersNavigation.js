import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OrderUser from '../screens/ordersUser/orderUser'
import OrdersUser from '../screens/ordersUser/ordersUser';

const Stack = createNativeStackNavigator()

const OrdersNavigator = () => (

    <Stack.Navigator>
        <Stack.Screen name="OrdersUser" component={OrdersUser} options={{title: "Ordenes"}}  />
       <Stack.Screen name="OrderUser" component={OrderUser} options={{title: "Orden"}}  />
    </Stack.Navigator>

);

export default OrdersNavigator