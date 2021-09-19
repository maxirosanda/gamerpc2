import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerNavigator from './drawerNavigator';
import RecomendadosNavigator from './recomendadosNavigator';
import GamesNavigator from './gamesNavigator'
import ProgramsNavigator from './programsNavigator'
import BuildPcNavigator from './builtPcNavigator'

const Stack = createNativeStackNavigator()

const HomeNavigator = () => (

    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="home" component={DrawerNavigator}/>
        <Stack.Screen name="Recommended" component={RecomendadosNavigator} />
        <Stack.Screen name="Games" component={GamesNavigator} />
        <Stack.Screen name="Programs" component={ProgramsNavigator} />
        <Stack.Screen name="BuildPc" component={BuildPcNavigator} />
    </Stack.Navigator>

);

export default  HomeNavigator