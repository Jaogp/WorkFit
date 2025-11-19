// src/screens/ExerciseListScreen.js

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';

// Dados Fictícios
const exercisesData = [
  { id: '1', name: 'Alongamento de mãos', image: 'https://i.imgur.com/0slvZvR.jpeg' },
  { id: '2', name: 'Agachamento', image: 'https://i.imgur.com/NHDJVK0.jpeg' },
  { id: '3', name: 'Alongamento do Pescoço', image: 'https://i.imgur.com/1kX33bG.jpeg' },
  { id: '4', name: 'Alongamento de Pernas', image: 'https://i.imgur.com/VgcVp9I.jpeg' },
  { id: '5', name: 'Alongamento da Dorsal', image: 'https://i.imgur.com/0YhNJ5P.jpeg' },
  { id: '6', name: 'Alongamento das Braços', image: 'https://i.imgur.com/HohdPqE.jpeg' },
  { id: '7', name: 'Flexão de Braço', image: 'https://i.imgur.com/Dp64a8X.jpeg' },
];

// Componente para cada item da lista
const ExerciseItem = ({ item }) => (
  <TouchableOpacity style={styles.card} onPress={() => alert(`Abrindo detalhes de: ${item.name}`)}>
    <Image source={{ uri: item.image }} style={styles.exerciseImage} />
    <Text style={styles.exerciseName}>{item.name}</Text>
    <View style={styles.arrowCircle}>
      <Ionicons name="arrow-forward" size={24} color="#fff" />
    </View>
  </TouchableOpacity>
);

const ExerciseListScreen = ({ navigation }) => {
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
        <Text style={styles.headerTitle}>Lista de Exercícios</Text>
      </View>
      <FlatList
        data={exercisesData}
        renderItem={({ item }) => <ExerciseItem item={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
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
    justifyContent: 'center', 
    flexDirection: 'row',
    position: 'relative', 
},
backButton: {
        position: 'absolute',
        left: 20, // Distância da borda esquerda
    },
  headerTitle: {
    fontSize: 20,
    ...typography.bold,
    color: colors.text,
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    padding: 15,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  exerciseImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  exerciseName: {
    flex: 1, // Permite que o texto ocupe o espaço disponível
    fontSize: 16,
    ...typography.regular,
    color: colors.text,
  },
  arrowCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ExerciseListScreen;