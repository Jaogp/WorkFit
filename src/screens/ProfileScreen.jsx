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
import AnimatedButton from '../components/AnimatedButton';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';

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
                 source={{ uri: 'https://i.imgur.com/wuvjXZI.jpeg' }}
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
            value="16 pontos acumulados no momento"
            icon="star"
          />
        </View>
      </ScrollView>

      {/* Botão de Ação na parte inferior */}
      <View style={styles.footer}>
         <AnimatedButton 
          title="Alterar perfil" 
          onPress={() => navigation.navigate('EditProfile')}
        />
      </View>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
     backgroundColor: colors.background,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: typography.bold,
    color: colors.text,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 10,
  },
  banner: {
    width: '100%',
    height: 100,
    backgroundColor: colors.primary,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: colors.background,
    position: 'absolute',
    top: 40, // Metade da altura do banner + um pouco
    zIndex: 1, // Garante que a imagem fique sobre o banner
  },
  profileName: {
    marginTop: 70, // Espaço para a foto de perfil
    fontSize: 22,
    fontFamily: typography.bold,
    color: colors.text,
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
    fontFamily: typography.bold,
    color: colors.text,
    marginBottom: 5,
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  value: {
    fontSize: 16,
    color: colors.subtext,
  },
  starIcon: {
    marginRight: 8,
    color: colors.accent,
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
   borderTopColor: colors.border,
    backgroundColor: colors.card,
  },
    
});

export default ProfileScreen;