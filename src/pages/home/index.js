//import * as React from 'react';

/* IMPORTANDO O React E O useState */
import React, { useState } from 'react';

/* IMPORTAÇÃO DE ALGUNS COMPONENTES DO react-native */
import {
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

/* IMPORTANDO AS PROPRIEDADES PARA FAZER O CADASTRO, LOGIN E LOGOUT */
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth';

/* IMPORTANDO O auth */
import { auth } from '../../services/firebaseConnection';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';


{/* CONTEÚDO DA PÁGINA DE HOME */ }
function HomeScreen() {

    /* FUNÇÃO PARA DESLOGAR DO APLICATIVO */
    async function logout() {
        await signOut(auth)
            .then(() => {
                console.log('saiu com sucesso!');
                alert('saiu com sucesso!');
            })
            .catch(error => console.log(error));
    }

  return (

    /* INICIO VIEW */
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      {/* TEXTO DE EXEMPLO */}
      <Text>Página home</Text>

      {/* BOTÃO PARA REALIZAR LOGOUT */}
      <Button
        title="Logout"
        color="#7289da"
        onPress={() => logout()}
      />

    </View>
    /* FIM VIEW */

  );
}

{/* CONTEÚDO DA PÁGINA DE LOGIN */ }
function LoginScreen() {

    /* STATE DE EMAIL */
    const [email, setEmail] = useState('');

    /* STATE DE SENHA */
    const [password, setPassword] = useState('');

    /* FUNÇÃO PARA LOGAR NO APLICATIVO */
    async function loginUser() {
        await signInWithEmailAndPassword(auth, email, password).then(value => {
            console.log('logado com sucesso!');
            alert('logado com sucesso!');
        })
            .catch(error => console.log(error));
    }

  return (

    /* INICIO VIEW */
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      {/* TITULO REALIZAR LOGIN */}
      <Text>Realizar Login</Text>

      {/* CAMPO PARA E-MAIL */}
      <TextInput
        placeholder="E-mail"
        placeholderTextColor="#2c2f33"
        style={styles.input}
        value={email}
        onChangeText={value => setEmail(value)}
        >
      </TextInput>

      {/* CAMPO PARA SENHA */}
      <TextInput
        placeholder="Senha"
        placeholderTextColor="#2c2f33"
        style={styles.input}
        value={password}
        onChangeText={value => setPassword(value)}
        >
      </TextInput>

      {/* BOTÃO PARA REALIZAR LOGIN */}
      <Button
        title="Logar"
        color="#7289da"
        onPress={() => loginUser()}
      />

    </View>
    /* FIM VIEW */

  );
}

{/* CONTEÚDO DA PÁGINA DE CADASTRO */ }
function RegisterScreen() {

    /* STATE DE EMAIL */
    const [email, setEmail] = useState('');

    /* STATE DE SENHA */
    const [password, setPassword] = useState('');

    /* FUNÇÃO PARA CADASTRAR NOVO USUÁRIO */
    async function createUser() {
        await createUserWithEmailAndPassword(auth, email, password)
            .then(value => {
                console.log('cadastrado com sucesso!\n' + value.user.uid);
                alert('cadastrado com sucesso!\n' + value.user.uid);
            })
            .catch(error => console.log(error));
    };

  return (

    /* INICIANDO A VIEW */
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      {/* TITULO REALIZAR CADASTRO */}
      <Text>Realizar Cadastro</Text>

      {/* CAMPO PARA E-MAIL */}
      <TextInput
        placeholder="E-mail"
        placeholderTextColor="#2c2f33"
        style={styles.input}
        value={email}
        onChangeText={value => setEmail(value)}
        >
      </TextInput>

      {/* CAMPO PARA SENHA */}
      <TextInput
        placeholder="Senha"
        placeholderTextColor="#2c2f33"
        style={styles.input}
        value={password}
        onChangeText={value => setPassword(value)}
        >
      </TextInput>

      {/* BOTÃO PARA REALIZAR CADASTRO */}
      <Button
        title="Cadastrar"
        color="#7289da"
        onPress={() => createUser()}
      />

    </View>
    /* TERMINANDO A VIEW */

  );
}

const Tab = createBottomTabNavigator();

export function Home() {
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
            } else if (route.name === 'Cadastrar') {
              iconName = focused ? 'person-add' : 'person-add-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;

          },

          tabBarActiveTintColor: '#7289da',
          tabBarInactiveTintColor: '#47535D',

        })}
      >
          
        <Tab.Screen name="Início" component={HomeScreen} />
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="Cadastrar" component={RegisterScreen} />
        
      </Tab.Navigator>
    </NavigationContainer>

  );
}

/* ESTILOS DOS COMPONENTES */
const styles = StyleSheet.create({

  /* CAMPOS DO FORMULÁRIO */
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#99aab5',
    marginTop: 5,
    width: '80%',
    height: 50,
  },

})