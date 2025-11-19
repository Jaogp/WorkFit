// src/screens/RankingScreen.js

import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  StatusBar,
  TouchableOpacity,
  LayoutAnimation,
  UIManager,
  Platform,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
// Dados Fictícios
const rankingData = [
  { id: '1', rank: 1, name: 'Leonardo M.', score: 25, avatar: 'https://i.imgur.com/gi3aZtH.jpeg' },
  { id: '2', rank: 2, name: 'Maria D. Rodrigues', score: 22, avatar: 'https://i.imgur.com/abX9vUf.jpeg' },
  { id: '3', rank: 3, name: 'Helen A. Gomes', score: 16, avatar: 'https://i.imgur.com/wuvjXZI.jpeg' },
  { id: '4', rank: 4, name: 'João P. Silva', score: 15, avatar: 'https://i.imgur.com/XrKOEVl.jpeg' },
  { id: '5', rank: 5, name: 'Junior Lopes', score: 13, avatar: 'https://i.imgur.com/KPxUMAQ.jpeg' },
  { id: '6', rank: 6, name: 'Jorge M. Costa', score: 10, avatar: 'https://i.imgur.com/4790edo.jpeg' },
];

const RankIcon = ({ rank }) => {
  if (rank > 3) return <View style={styles.starPlaceholder} />;

  const iconName = 'star';
  let iconColor = '#C0C0C0'; // Prata
  if (rank === 1) iconColor = '#FFD700'; // Ouro
  if (rank === 3) iconColor = '#CD7F32'; // Bronze

  return <Ionicons name={iconName} size={32} color={iconColor} style={styles.starIcon} />;
};

const RankingItem = ({ item, maxScore }) => {
  let cardStyle;
  if (item.rank === 1) cardStyle = styles.goldCard;
  else if (item.rank === 2) cardStyle = styles.silverCard;
  else if (item.rank === 3) cardStyle = styles.bronzeCard;

  const progressWidth = (item.score / maxScore) * 100;
  
  return (
    <View style={styles.itemContainer}>
      <RankIcon rank={item.rank} />
      <View style={[styles.card, cardStyle]}>
        {item.rank === 1 && (
          <Ionicons name="trophy" size={18} color="#B8860B" style={styles.trophyIcon} />
        )}
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <View style={styles.userInfo}>
          <Text style={styles.rankText}>{item.rank}º</Text>
          <Text style={styles.nameText}>{item.name}</Text>
          
          
          <View style={styles.progressBarBackground}>
            <View style={[styles.progressBarForeground, { width: `${progressWidth}%` }]} />
          </View>
        </View>
      </View>
     
      <View style={styles.scoreContainer}>
        <Text style={styles.scoreNumber}>{item.score}</Text>
        <Text style={styles.scoreText}>Pts</Text>
      </View>
    </View>
  );
};

const RankingScreen = ({ navigation }) => {
  useEffect(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
  }, []);

  const maxScore = rankingData.length > 0 ? rankingData[0].score : 1;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" size={28} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Ranking</Text>
      </View>
      <FlatList
        data={rankingData}
        renderItem={({ item }) => <RankingItem item={item} maxScore={maxScore} />}
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
    position: 'relative',
  },
  backButton: { position: 'absolute', left: 20 },
  headerTitle: { fontSize: 20, ...typography.bold, color: colors.text },
  subHeader: {
    fontSize: 22,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
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
    borderWidth: 2,
    borderColor: '#e0e0e0',
    padding: 15,
    marginHorizontal: 10,
  },
  goldCard: { borderColor: '#FFD700', backgroundColor: '#FFFBEA' },
  silverCard: { borderColor: '#C0C0C0', backgroundColor: '#FAFAFA' },
  bronzeCard: { borderColor: '#CD7F32', backgroundColor: '#FFF5EB' },
  trophyIcon: { position: 'absolute', top: 8, right: 8 },
  // ------------------------------------
  avatar: { width: 45, height: 45, borderRadius: 22.5, marginRight: 15 },
  userInfo: { 
    flex: 1, // Faz o container de userInfo ocupar o espaço disponível
    justifyContent: 'center',
  },
  rankText: { fontSize: 16, fontWeight: 'bold' },
  nameText: { fontSize: 16, color: '#555' },
  scoreContainer: { alignItems: 'center', width: 60 },
  scoreNumber: { fontSize: 18, fontWeight: 'bold' },
  scoreText: { fontSize: 14, color: '#555' },

  progressBarBackground: {
    height: 6,
    backgroundColor: '#e0e0e0',
    borderRadius: 3,
    marginTop: 5,
  },
  progressBarForeground: {
    height: 6,
    backgroundColor: '#FFD700', // Usando a cor de ouro como padrão
    borderRadius: 3,
  },
});

export default RankingScreen;