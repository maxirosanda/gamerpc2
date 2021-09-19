import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Programs from "../components/programs"



const Stack = createNativeStackNavigator();
const ProgramsNavigator = () => (

    <Stack.Navigator>
        <Stack.Screen name="Programs" component={Programs} options={{title: "Seleccion por programa"}} />
    </Stack.Navigator>

);

export default  ProgramsNavigator