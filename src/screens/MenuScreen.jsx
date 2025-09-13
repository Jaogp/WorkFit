// src/screens/MenuScreen.js

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Componente reutilizável para cada item do menu
const MenuItem = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <Text style={styles.menuItemText}>{title}</Text>
      <Text style={styles.menuItemIcon}>{'>'}</Text>
    </TouchableOpacity>
  );
};

const MenuScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* 1. Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Workfit</Text>
      </View>

      {/* 2. Lista de Opções */}
      <ScrollView>
        <MenuItem title="Treinos" onPress={() => Alert.alert('Navegar', 'Indo para Treinos...')} />
        <MenuItem title="Lista de exercícios" onPress={() => Alert.alert('Navegar', 'Indo para Lista de exercícios...')} />
        <MenuItem title="Pontuação" onPress={() => Alert.alert('Navegar', 'Indo para Pontuação...')} />
        <MenuItem title="Configurações" onPress={() => Alert.alert('Navegar', 'Indo para Configurações...')} />
        <MenuItem title="Notificações" onPress={() => Alert.alert('Navegar', 'Indo para Notificações...')} />
      </ScrollView>

      {/* A Tab Bar (barra de navegação inferior) será adicionada depois */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Fundo branco
  },
  header: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  menuItem: {
    backgroundColor: '#f2f2f2', // Cinza claro
    paddingHorizontal: 20,
    paddingVertical: 25,
    borderRadius: 15,
    marginHorizontal: 20,
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
  menuItemIcon: {
    fontSize: 20,
    color: '#888',
  },
});

export default MenuScreen;