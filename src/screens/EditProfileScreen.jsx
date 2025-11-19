// src/screens/EditProfileScreen.js

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  StatusBar,
  Alert,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useUser } from '../context/UserContext';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';

// Componente para cada campo de input
const FormInput = ({ label, value, onChangeText, ...props }) => (
  <View style={styles.inputContainer}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholderTextColor="#999"
      {...props}
    />
  </View>
);

const EditProfileScreen = ({ navigation }) => {
    const { userData, updateUserData } = useUser();
  // Estados para cada campo do formulário, pré-preenchidos com dados fictícios
  const [empresa, setEmpresa] = useState(userData.empresa);
  const [cargo, setCargo] =  useState(userData.cargo);
  const [celular, setCelular] = useState(userData.celular);
  const [endereco, setEndereco] = useState(userData.endereco);

  const handleSaveChanges = () => {
    // Em um app real, aqui você enviaria os dados para uma API
    const updatedValues = { empresa, cargo, celular, endereco };
    updateUserData(updatedValues);
    Alert.alert('Sucesso!', 'Seu perfil foi atualizado.');
    navigation.goBack(); // Volta para a tela de perfil
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" size={28} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Editar Perfil</Text>
        <View style={{ width: 28 }} />{/* Espaço para centralizar */}
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.avatarContainer}>
          <Image
            source={{ uri: 'https://i.imgur.com/wuvjXZI.jpeg' }}
            style={styles.profileImage}
          />
          <TouchableOpacity onPress={() => alert('Abrir galeria de imagens...')}>
            <Text style={styles.changeAvatarText}>Alterar foto</Text>
          </TouchableOpacity>
        </View>

        {/* Formulário */}
        <FormInput label="Empresa" value={empresa} onChangeText={setEmpresa} />
        <FormInput label="Cargo" value={cargo} onChangeText={setCargo} />
        <FormInput label="Celular" value={celular} onChangeText={setCelular} keyboardType="phone-pad" />
        <FormInput label="Endereço" value={endereco} onChangeText={setEndereco} />

      </ScrollView>

      {/* Botão de Salvar */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
          <Text style={styles.saveButtonText}>Salvar Alterações</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20 },
    headerTitle: { fontSize: 20, ...typography.bold, color: colors.text },
    scrollContainer: { paddingHorizontal: 20, paddingBottom: 20 },
    avatarContainer: { alignItems: 'center', marginVertical: 20 },
    profileImage: { width: 120, height: 120, borderRadius: 60, marginBottom: 10 },
    changeAvatarText: { color: '#7879F1', ...typography.bold, fontSize: 16 },
    inputContainer: { marginBottom: 20 },
    label: { fontSize: 14, ...typography.bold, color: '#333', marginBottom: 8 },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 12,
        fontSize: 16,
        backgroundColor: '#f9f9f9',
    },
    footer: { padding: 20, borderTopWidth: 1, borderTopColor: '#f0f0f0' },
    saveButton: {
        backgroundColor: '#7879F1',
        paddingVertical: 15,
        borderRadius: 15,
        alignItems: 'center',
    },
    saveButtonText: { color: '#fff', fontSize: 18, ...typography.bold },
});

export default EditProfileScreen;