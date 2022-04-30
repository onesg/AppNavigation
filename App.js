import * as React from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Button
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

{/* CONTEÚDO DA PÁGINA DE HOME */ }
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Página home</Text>
    </View>
  );
}

{/* CONTEÚDO DA PÁGINA DE LOGIN */ }
function LoginScreen() {
  return (

    /* INICIANDO A VIEW */
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      {/* DESCRIÇÃO DA PÁGINA (COLOCAR ÍCONE DEPOIS) */}
      <Text>Realizar Login</Text>

      {/* CAMPO PARA E-MAIL */}
      <TextInput
        placeholder="E-mail"
        placeholderTextColor="#313131"
        style={styles.input}>
      </TextInput>

      {/* CAMPO PARA SENHA */}
      <TextInput
        placeholder="Senha"
        placeholderTextColor="#313131"
        style={styles.input}>
      </TextInput>

      {/* BOTÃO PARA REALIZAR LOGIN */}
      <Button title="Logar" color="#ff6347" />

    </View>
    /* TERMINANDO A VIEW */

  );

}

{/* *** */ }
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Início') {
              iconName = focused ? 'home-sharp' : 'home-outline';
            } else if (route.name === 'Login') {
              iconName = focused ? 'person' : 'person-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Início" component={HomeScreen} />
        <Tab.Screen name="Login" component={LoginScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );

}

/* ESTILOS DOS COMPONENTES */
const styles = StyleSheet.create({

  /* CAMPOS DO FORMULÁRIO */
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#313131',
    marginTop: 5,
    width: '80%',
    height: 50,
  },

})