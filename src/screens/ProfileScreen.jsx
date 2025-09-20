// src/screens/ProfileScreen.js

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useUser } from '../context/UserContext'; 

// Componente para cada linha de informação
const InfoRow = ({ label, value, icon }) => (
  <View style={styles.infoRow}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.valueContainer}>
      {icon && <Ionicons name={icon} size={16} color="#FFD700" style={styles.starIcon} />}
      <Text style={styles.value}>{value}</Text>
    </View>
  </View>
);

const ProfileScreen = ({ navigation }) => {
  const { userData } = useUser();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        {/* Cabeçalho */}
        <View style={styles.header}>
  <TouchableOpacity onPress={() => navigation.goBack()}>
    <Ionicons name="chevron-back-outline" size={28} color="#333" />
  </TouchableOpacity>
  <Text style={styles.headerTitle}>Conta</Text>
  <TouchableOpacity onPress={() => navigation.getParent().navigate('Notifications')}>
    <Ionicons name="notifications-outline" size={24} color="#333" />
  </TouchableOpacity>
</View>

        {/* Seção do Banner e Perfil */}
        <View style={styles.profileHeader}>
          <View style={styles.banner} />
          <Image
            source={{ uri: userData.avatar }} // Substitua pela imagem real do usuário
            style={styles.profileImage}
          />
        </View>
        <Text style={styles.profileName}>{userData.name}</Text>

        {/* Detalhes da Conta */}
        <View style={styles.detailsContainer}>
          <InfoRow label="Empresa" value={userData.empresa} />
          <InfoRow label="Cargo" value={userData.cargo} />
          <InfoRow label="Celular" value={userData.celular} />
          <InfoRow label="Endereço" value={userData.endereco} />
          <InfoRow 
            label="Pontos acumulados" 
            value="8 pontos acumulados no momento"
            icon="star"
          />
        </View>
      </ScrollView>

      {/* Botão de Ação na parte inferior */}
      <View style={styles.footer}>
         <TouchableOpacity 
          style={styles.actionButton} 
         title="Editar Perfil" onPress={() => navigation.navigate('EditProfile')}
        >
          <Text style={styles.actionButtonText}>Editar Perfil</Text>
        </TouchableOpacity>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 10,
  },
  banner: {
    width: '100%',
    height: 100,
    backgroundColor: '#C5C6FF', // Cor lilás do banner
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#fff',
    position: 'absolute',
    top: 40, // Metade da altura do banner + um pouco
    zIndex: 1, // Garante que a imagem fique sobre o banner
  },
  profileName: {
    marginTop: 70, // Espaço para a foto de perfil
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  detailsContainer: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  infoRow: {
    marginBottom: 25,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  value: {
    fontSize: 16,
    color: '#555',
  },
  starIcon: {
    marginRight: 8,
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  actionButton: {
    backgroundColor: '#7879F1', // Cor azul/lilás do botão
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;