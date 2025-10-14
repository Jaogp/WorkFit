// src/screens/HomeScreen.js

import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

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
const ExerciseCard = ({ item }) => (
  <TouchableOpacity style={styles.cardContainer}>
    <Image source={{ uri: item.image }} style={styles.cardImage} />
    <Text style={styles.cardTitle}>{item.name}</Text>
    <Text style={styles.cardDuration}>{item.duration}</Text>
  </TouchableOpacity>
);

// Componente para a linha de categoria (título + lista horizontal)
const CategoryRow = ({ category, exercises }) => (
  <View style={styles.categoryContainer}>
    <Text style={styles.categoryTitle}>{category}</Text>
    <FlatList
      data={exercises}
      renderItem={({ item }) => <ExerciseCard item={item} />}
      keyExtractor={(item) => item.id}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingLeft: 20 }}
    />
  </View>
);

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Treinos</Text>
      </View>

      <ScrollView>
        {workoutData.map((categoryData, index) => (
          <CategoryRow
            key={index}
            category={categoryData.category}
            exercises={categoryData.exercises}
          />
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
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  categoryContainer: {
    marginTop: 20,
    marginBottom: 10,
  },
  categoryTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 15,
  },
  cardContainer: {
    width: 150,
    marginRight: 15,
  },
  cardImage: {
    width: '100%',
    height: 150,
    borderRadius: 15,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  cardDuration: {
    fontSize: 14,
    color: '#888',
  },
});

export default HomeScreen;