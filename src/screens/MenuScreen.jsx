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
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';

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
        <MenuItem title="Ranking" onPress={() => navigation.getParent().navigate('Ranking')} />
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
    backgroundColor: colors.background,
  },
header: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: colors.card,
    borderBottomWidth: 1,
   borderBottomColor: colors.border,
    position: 'relative', 
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: typography.bold,
    color: colors.text,
  },
  notificationButton: {
    position: 'absolute',
    right: 20, // Define a distância da direita
  },
  menuItem: {
    backgroundColor: colors.border,
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
    fontFamily: typography.regular,
   color: colors.text,
  },
  menuItemIcon: {
    fontSize: 20,
    color: colors.subtext,
  },
});

export default MenuScreen;