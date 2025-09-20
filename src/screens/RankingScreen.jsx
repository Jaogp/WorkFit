// src/screens/RankingScreen.js

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';

// Dados Fictícios
const rankingData = [
  { id: '1', rank: 1, name: 'Leonardo M.', score: 25, avatar: 'https://i.imgur.com/gAYa2z3.png' },
  { id: '2', rank: 2, name: 'Maria D. Rodrigues', score: 22, avatar: 'https://i.imgur.com/gAYa2z3.png' },
  { id: '3', rank: 3, name: 'Helen A. Gomes', score: 16, avatar: 'https://i.imgur.com/gAYa2z3.png' },
  { id: '4', rank: 4, name: 'João P. Silva', score: 15, avatar: 'https://i.imgur.com/gAYa2z3.png' },
  { id: '5', rank: 5, name: 'Junior Lopes', score: 13, avatar: 'https://i.imgur.com/gAYa2z3.png' },
  { id: '6', rank: 6, name: 'Jorge M. Costa', score: 10, avatar: 'https://i.imgur.com/gAYa2z3.png' },
];

// Componente para a estrela
const RankIcon = ({ rank }) => {
  if (rank > 3) {
    return <View style={styles.starPlaceholder} />; // Espaço vazio para alinhar
  }

  const iconName = 'star';
  let iconColor = '#a0a0a0'; // Prata por padrão
  if (rank === 1) iconColor = '#FFD700'; // Ouro
  if (rank === 3) iconColor = '#CD7F32'; // Bronze

  return <Ionicons name={iconName} size={32} color={iconColor} style={styles.starIcon} />;
};

// Componente para cada item da lista
const RankingItem = ({ item }) => (
  <View style={styles.itemContainer}>
    <RankIcon rank={item.rank} />
    <View style={styles.card}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.userInfo}>
        <Text style={styles.rankText}>{item.rank}º</Text>
        <Text style={styles.nameText}>{item.name}</Text>
      </View>
    </View>
    <View style={styles.scoreContainer}>
      <Text style={styles.scoreNumber}>{item.score}</Text>
      <Text style={styles.scoreText}>Pontos</Text>
    </View>
  </View>
);

const RankingScreen = ({ navigation }) => {
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
        <Text style={styles.headerTitle}>Pontuação</Text>
      </View>
      <Text style={styles.subHeader}>Ranking</Text>
      <FlatList
        data={rankingData}
        renderItem={({ item }) => <RankingItem item={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
   header: {
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center', 
    flexDirection: 'row',
    position: 'relative', // Para o botão de voltar//
     },
     backButton: {
        position: 'absolute',
        left: 20, // Distância da borda esquerda
    },

    headerTitle: { fontSize: 20, fontWeight: 'bold' },
    subHeader: { 
  fontSize: 22, 
  fontWeight: 'bold', 
  textAlign: 'center', // Adicionamos a centralização
  marginTop: 10, 
  marginBottom: 10 
},
    listContainer: { paddingHorizontal: 20 },
    itemContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: 10 },
    starPlaceholder: { width: 40 },
    starIcon: { width: 40, textAlign: 'center' },
    card: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        padding: 15,
        marginHorizontal: 10,
    },
    avatar: { width: 45, height: 45, borderRadius: 22.5, marginRight: 15 },
    userInfo: { justifyContent: 'center' },
    rankText: { fontSize: 16, fontWeight: 'bold' },
    nameText: { fontSize: 16, color: '#555' },
    scoreContainer: { alignItems: 'center', width: 60 },
    scoreNumber: { fontSize: 18, fontWeight: 'bold' },
    scoreText: { fontSize: 14, color: '#555' },
});

export default RankingScreen;