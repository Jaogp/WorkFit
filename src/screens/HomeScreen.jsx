// src/screens/HomeScreen.js

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Cabeçalho  */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Workfit</Text>
        <TouchableOpacity 
          style={styles.notificationButton} 
          onPress={() => navigation.getParent().navigate('Notifications')}
        >
          <Ionicons name="notifications-outline" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Conteúdo Vazio */}
      <View style={styles.content}>
        <Text style={styles.placeholderText}>Tela Home</Text>
        <Text style={styles.placeholderSubText}>O conteúdo principal do app virá aqui.</Text>
      </View>
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    position: 'relative',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  notificationButton: {
    position: 'absolute',
    right: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  placeholderSubText: {
    fontSize: 16,
    color: '#aaa',
    marginTop: 8,
  },
});

export default HomeScreen;