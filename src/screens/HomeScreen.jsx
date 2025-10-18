// src/screens/HomeScreen.js

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useUser } from '../context/UserContext';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';




// Dados Fictícios para a tela
const workoutData = [
  {
    category: 'Aquecimentos curtos',
    exercises: [
      { id: '1', name: 'Alongamento superior', duration: '5 min', image: 'https://i.imgur.com/gAYa2z3.png' },
      { id: '2', name: 'Alongamento inferior', duration: '5 min', image: 'https://i.imgur.com/gAYa2z3.png' },
      { id: '3', name: 'Alongamento de...', duration: '5 min', image: 'https://i.imgur.com/gAYa2z3.png' },
    ],
  },
  {
    category: 'Fortalecimento de punhos',
    exercises: [
      { id: '4', name: 'Flexão de punho no...', duration: '5 min', image: 'https://i.imgur.com/gAYa2z3.png' },
      { id: '5', name: 'Flexão de punho no...', duration: '5 min', image: 'https://i.imgur.com/gAYa2z3.png' },
      { id: '6', name: 'Alongamento Ati...', duration: '5 min', image: 'https://i.imgur.com/gAYa2z3.png' },
    ],
  },
  // Você pode adicionar mais categorias aqui
];

// Componente para o card de exercício individual
const ExerciseCard = ({ item, navigation }) => (
  <TouchableOpacity 
    style={styles.cardContainer} 
    onPress={() => navigation.navigate('WorkoutDetail', { exerciseId: item.id })}
  >
    <Image source={{ uri: item.image }} style={styles.cardImage} />
    <Text style={styles.cardTitle}>{item.name}</Text>
    <Text style={styles.cardDuration}>{item.duration}</Text>
  </TouchableOpacity>
);

// Componente para a linha de categoria (título + lista horizontal)
const CategoryRow = ({ category, exercises, navigation }) => (
  <View style={styles.categoryContainer}>
    <Text style={styles.categoryTitle}>{category}</Text>
    <FlatList
      data={exercises}
      renderItem={({ item }) => <ExerciseCard item={item} navigation={navigation} />}
      keyExtractor={(item) => item.id}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingLeft: 20 }}
    />
  </View>
);

const HomeScreen = ({ navigation }) => {
  const { userData } = useUser();
  const firstName = userData.name.split(' ')[0];
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Treinos</Text>

        <TouchableOpacity 
          style={styles.notificationButton} 
          onPress={() => navigation.getParent().navigate('Notifications')}
        >
          <Ionicons name="notifications-outline" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <ScrollView>
        {/* --- NOVIDADE: Card de boas-vindas --- */}
        <View style={styles.heroCard}>
          <Text style={styles.heroTitle}>Olá, {firstName}!</Text>
          <Text style={styles.heroSubtitle}>Pronto para o seu treino de hoje?</Text>
        </View>

        {workoutData.map((categoryData, index) => (
          <CategoryRow
            key={index}
            category={categoryData.category}
            exercises={categoryData.exercises}
            navigation={navigation}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background, // <-- Mudou
  },
  header: {
    paddingVertical: 15,
    alignItems: 'center',
    flexDirection: 'row', 
    justifyContent: 'center', 
    backgroundColor: colors.card, 
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    position: 'relative',
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: typography.bold,
    color: colors.text, 
  },
  notificationButton: {
    position: 'absolute',
    right: 20, // Define a distância da direita
  },
  heroCard: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    padding: 25,
    marginHorizontal: 20,
    marginTop: 20,
  },
  heroTitle: {
    fontSize: 24,
    fontFamily: typography.bold,
    color: colors.white,
  },
  heroSubtitle: {
    fontSize: 16,
    fontFamily: typography.regular,
    color: colors.white,
    opacity: 0.9,
    marginTop: 5,
  },
  categoryContainer: {
    marginTop: 20,
    marginBottom: 10,
  },
  categoryTitle: {
    fontSize: 22,
    fontFamily: typography.bold,
    marginLeft: 20,
    marginBottom: 15,
    color: colors.text, // <-- Mudou
  },
  cardContainer: {
    width: 150,
    marginRight: 15,
    borderRadius: 15, // Mova o borderRadius para cá
    borderWidth: 1,
  borderColor: colors.border,
  backgroundColor: colors.card,
  },
  cardImage: {
    width: '100%',
    height: 150,
    borderRadius: 15, // O borderRadius deve estar no container externo também
    marginBottom: 10,
    backgroundColor: colors.border,
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: typography.bold,
    color: colors.text, // <-- Mudou
  },
  cardDuration: {
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.subtext, // <-- Mudou
  },
});

export default HomeScreen;