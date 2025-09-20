// src/screens/MenuScreen.js

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
  Alert,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';

// Componente reutilizável para cada item de menu 
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

   {/* Cabeçalho */}
       <View style={styles.header}>
        <Text style={styles.headerTitle}>WorkFit</Text>
        
        {/* Ícone de notificação adicionado aqui */}
        <TouchableOpacity 
          style={styles.notificationButton} 
          onPress={() => navigation.getParent().navigate('Notifications')}
        >
          <Ionicons name="notifications-outline" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Lista de Opções */}
      <ScrollView>
        <MenuItem title="Lista de exercícios" onPress={() => navigation.getParent().navigate('ExerciseList')} />
        <MenuItem title="Pontuação" onPress={() => navigation.getParent().navigate('Ranking')} />
        <MenuItem title="Configurações Avançadas" onPress={() => navigation.getParent().navigate('AdvancedSettings')} />
        <MenuItem title="Sair" onPress={() => Alert.alert(
          'Confirmação',
          'Você tem certeza que deseja sair?',
          [
            { text: 'Cancelar', style: 'cancel' },
            { text: 'Sair', onPress: () => navigation.getParent().navigate('Login') },
          ]
        )} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
header: {
    flexDirection: 'row', // Adicione esta linha
    justifyContent: 'center', // Adicione esta linha
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    position: 'relative', // Adicione esta linha para o posicionamento absoluto funcionar
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  
  // Adicione este novo estilo
  notificationButton: {
    position: 'absolute',
    right: 20, // Define a distância da direita
  },
  menuItem: {
    backgroundColor: '#f2f2f2',
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