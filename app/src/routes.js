import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Home from './pages/Home';
import Visualizar from './pages/Visualizar';

export default function Routes() {

    const screenOptionStyle = {
        headerStyle: {
            backgroundColor: '#121721'
        },
        headerTintColor: '#b02ab7'
    }
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={screenOptionStyle}>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerTitle: "Listar os Orçamentos" }} />

                <Stack.Screen
                    name="Visualizar"
                    component={Visualizar}
                    options={{ headerTitle: "Visualizar o Orçamento" }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}