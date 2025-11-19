// src/screens/AdvancedSettingsScreen.js

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';

// Componente reutilizável para cada item
const SettingsItem = ({ iconName, title, onPress, hasBadge = false }) => {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <View style={styles.itemContent}>
        <Ionicons name={iconName} size={24} color="#555" style={styles.itemIcon} />
        <Text style={styles.menuItemText}>{title}</Text>
      </View>
      <View style={styles.itemRight}>
        {hasBadge && <View style={styles.badge} />}
        <Ionicons name="chevron-forward-outline" size={24} color="#888" />
      </View>
    </TouchableOpacity>
  );
};

const AdvancedSettingsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Configurações</Text>
        <View style={{width: 28}} />{/* Espaço vazio para centralizar o título */}
      </View>

      <ScrollView>
        <SettingsItem
          title="Conta"
          iconName="person-outline"
          onPress={() => navigation.getParent().navigate('Profile')}
        />
        <SettingsItem
          title="Privacidade e Segurança"
          iconName="shield-outline"
          hasBadge={true} // Ativa a bolinha vermelha
          onPress={() => alert('Abrindo Privacidade e Segurança')}
        />
        <SettingsItem
          title="Feedback e Suporte"
          iconName="headset-outline"
          onPress={() => alert('Abrindo Feedback e Suporte')}
        />
        <SettingsItem
          title="Gerenciar Notificações"
          iconName="notifications-outline"
          onPress={() => navigation.getParent().navigate('Notifications')}
        />
        
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" size={24} color="#888" />
          <Text style={styles.backButtonText}>Voltar a tela inicial</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerTitle: { fontSize: 18, ...typography.bold, color: colors.text },
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
  itemContent: { flexDirection: 'row', alignItems: 'center' },
  itemIcon: { marginRight: 15 },
  menuItemText: { fontSize: 18, ...typography.regular, color: colors.text },
  itemRight: { flexDirection: 'row', alignItems: 'center' },
  badge: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'red',
    marginRight: 10,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  backButtonText: { fontSize: 16, color: '#888', marginLeft: 5 },
});

export default AdvancedSettingsScreen;