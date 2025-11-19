// src/navigation/MainTabNavigator.js  

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View, Text } from 'react-native'; // Importamos Image para o ícone do perfil
import Ionicons from '@expo/vector-icons/Ionicons'; // Pacote de ícones 

// Importe as tela 
import HomeScreen from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';
import ProfileScreen from '../screens/ProfileScreen';

// --- Telas de Exemplo 
const PlaceholderScreen = ({ route }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Tela: {route.name}</Text>
  </View>
);
// -------------------------------------------------------------------

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
    initialRouteName="Home"
      screenOptions={{
        headerShown: false, // Oculta o cabeçalho padrão do Tab Navigator
        tabBarShowLabel: false, // Oculta o texto abaixo dos ícones
        tabBarStyle: { 
            backgroundColor: '#f2f2f2', // Cor de fundo da barra
            borderTopWidth: 0, // Remove a linha superior
        },
        tabBarActiveTintColor: '#000', // Cor do ícone ativo (preto)
        tabBarInactiveTintColor: '#888', // Cor do ícone inativo (cinza)
      }}
    >
      <Tab.Screen
        name="Menu" 
        component={MenuScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="menu" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }} 
      />
      <Tab.Screen 
        name="ProfileTab" 
        component={ProfileScreen} 
        options={{
          tabBarIcon: ({ color }) => (
            <Image 
              source={{ uri: 'https://i.imgur.com/wuvjXZI.jpeg' }}
              style={{ width: 30, height: 30, borderRadius: 15, borderColor: color, borderWidth: 1 }}
            />
          ),
        }} 
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;