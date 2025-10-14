// src/screens/NotificationsScreen.js

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

// Dados Fictícios - Em um app real, isso viria de uma API
const notificationsData = [
  {
    id: 1,
    date: '07/11',
    title: 'Aviso',
    message: 'Não se esqueça de tomar água!',
  },
  {
    id: 2,
    date: '09/11',
    title: 'Aviso',
    message: 'Você esta a muito tempo sentado, levante-se um pouco!',
  },
  {
    id: 3,
    date: '10/11',
    title: 'Aviso',
    message: 'Faça seus exercícios diários.',
  },
];

// Componente para o card de notificação
const NotificationCard = ({ title, message }) => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <Ionicons name="information-circle-outline" size={24} color="#333" />
      <Text style={styles.cardTitle}>{title}</Text>
    </View>
    <Text style={styles.cardMessage}>{message}</Text>
    <TouchableOpacity style={styles.confirmButton}>
      <Text style={styles.confirmButtonText}>confirmar</Text>
    </TouchableOpacity>
  </View>
);

// Componente para o marcador de data
const DateBadge = ({ date }) => (
    <View style={styles.dateBadge}>
        <Text style={styles.dateText}>{date}</Text>
    </View>
);

const NotificationsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
  <TouchableOpacity
    style={styles.backButton}
    onPress={() => navigation.goBack()}
  >
    <Ionicons name="chevron-back-outline" size={28} color="#333" />
  </TouchableOpacity>
  <Text style={styles.headerTitle}>Notificações</Text>
</View>

      <ScrollView contentContainerStyle={styles.listContainer}>
        {/* Mapeamos os dados fictícios para renderizar a lista */}
        {notificationsData.map((item) => (
          <View key={item.id}>
            <DateBadge date={item.date} />
            <NotificationCard title={item.title} message={item.message} />
          </View>
        ))}
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
  paddingVertical: 15,
  alignItems: 'center',
  justifyContent: 'center', // Garante a centralização do título
  flexDirection: 'row',
  position: 'relative', // Necessário para o posicionamento do botão
  borderBottomWidth: 1,
  borderBottomColor: '#f0f0f0',
},
backButton: {
        position: 'absolute',
        left: 20, // Distância da borda esquerda
    },
    
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  listContainer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  dateBadge: {
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: 'center',
    marginBottom: 15,
  },
  dateText: {
    color: '#555',
    fontWeight: '600',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 20,
    marginBottom: 30, // Espaço maior entre os grupos
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  cardMessage: {
    fontSize: 16,
    color: '#555',
    lineHeight: 22,
    marginBottom: 20,
  },
  confirmButton: {
    backgroundColor: '#555',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'flex-start',
  },
  confirmButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default NotificationsScreen;