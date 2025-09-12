// src/navigation/MainTabNavigator.js  (você pode criar a pasta "navigation")

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View, Text } from 'react-native'; // Importamos Image para o ícone do perfil
import Ionicons from '@expo/vector-icons/Ionicons'; // Pacote de ícones que instalamos

// Importe a tela de Menu
import MenuScreen from '../screens/MenuScreen';
import SettingsScreen from '../screens/SettingsScreen';

// --- Telas de Exemplo (depois você pode criar os arquivos delas) ---
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
        name="Settings" // Mude o nome para algo mais descritivo como "Settings"
        component={SettingsScreen} // 2. Substitua o componente de placeholder
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="menu" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Home" 
        component={MenuScreen} // Nossa tela principal
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Profile" 
        component={PlaceholderScreen} // Usando a tela de exemplo
        options={{
          tabBarIcon: ({ color }) => (
            // Para o ícone de perfil, usamos uma imagem como no design
            <Image 
              source={{ uri: 'https://i.imgur.com/gAYa2z3.png' }} // Use uma imagem de perfil aqui
              style={{ width: 30, height: 30, borderRadius: 15, borderColor: color, borderWidth: 1 }}
            />
          ),
        }} 
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;