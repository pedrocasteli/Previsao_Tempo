import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import Cidade from './src/pages/Cidade';
import Sobre from './src/pages/Sobre';



const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Inicial'>
                <Stack.Screen name="Inicial" component={Home} />
                <Stack.Screen name="Sobre" component={Sobre} />
                <Stack.Screen name="Cidade" component={Cidade} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;