// src/screens/SettingsScreen.js

import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

// Componente reutilizável para cada item de configuração
const SettingsItem = ({ iconName, title, onPress }) => {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <View style={styles.itemContent}>
        <Ionicons name={iconName} size={24} color="#555" style={styles.itemIcon} />
        <Text style={styles.menuItemText}>{title}</Text>
      </View>
      <Ionicons name="chevron-forward-outline" size={24} color="#888" />
    </TouchableOpacity>
  );
};

const SettingsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Configurações</Text>
        <View style={styles.headerIcons}>
          <Ionicons name="notifications-outline" size={24} color="#555" style={styles.bellIcon} />
          {/* A imagem de perfil pode ser um ícone ou um componente de imagem real */}
          <Ionicons name="person-circle-outline" size={24} color="#555" />
        </View>
      </View>

      {/* Lista de Opções */}
      <ScrollView>
      
        <SettingsItem
          title="Privacidade e Segurança"
          iconName="shield-outline"
          onPress={() => alert('Navegar para Privacidade e Segurança')}
        />
        <SettingsItem
          title="Feedback e Suporte"
          iconName="headset-outline"
          onPress={() => alert('Navegar para Feedback e Suporte')}
        />
        <SettingsItem
          title="Gerenciar Notificações"
          iconName="notifications-outline"
          onPress={() => alert('Navegar para Gerenciar Notificações')}
        />
        
        {/* Botão de voltar */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
          <Ionicons name="chevron-back-outline" size={24} color="#888" />
          <Text style={styles.backButtonText}>Voltar a tela inicial</Text>
        </TouchableOpacity>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  bellIcon: {
    marginRight: 15,
  },
  menuItem: {
    backgroundColor: '#f2f2f2',
    padding: 20,
    borderRadius: 15,
    marginHorizontal: 20,
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemIcon: {
    marginRight: 15,
  },
  menuItemText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  backButtonText: {
    fontSize: 16,
    color: '#888',
    marginLeft: 5,
  },
});

export default SettingsScreen;