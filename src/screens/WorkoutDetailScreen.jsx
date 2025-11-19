// src/screens/WorkoutDetailScreen.js
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';

// Dados Fictícios Detalhados - Em um app real, você buscaria apenas o exercício com o ID recebido
const detailedExercises = {
  '1': { name: 'Alongamento superior', duration: '1 min', difficulty: 'Fácil', image: 'https://i.imgur.com/EiJxtat.jpeg', instructions: 'Fique em pé com os pés afastados na largura dos ombros. Entrelace os dedos e estique os braços para cima, o mais alto que puder. Mantenha por 30 segundos.' },
  '2': { name: 'Alongamento inferior', duration: '1 min', difficulty: 'Fácil', image: 'https://i.imgur.com/n6OxJsX.jpeg', instructions: 'Sente-se no chão com as pernas esticadas. Incline o tronco para a frente, tentando alcançar os pés. Mantenha a posição.' },
  // Adicione detalhes para outros IDs de exercícios aqui
};

const WorkoutDetailScreen = ({ route, navigation }) => {
  // 1. Recebe o ID do exercício passado pela tela anterior
  const { exerciseId } = route.params;

  // 2. Busca os detalhes do exercício correspondente
  const exercise = detailedExercises[exerciseId] || { name: 'Exercício não encontrado' };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <ScrollView>
        <Image source={{ uri: exercise.image }} style={styles.mainImage} />
        
        {/* Botão de Voltar sobre a imagem */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" size={32} color="#fff" />
        </TouchableOpacity>
        
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{exercise.name}</Text>

          <View style={styles.infoRow}>
            <View style={styles.infoBox}>
              <Text style={styles.infoLabel}>Duração</Text>
              <Text style={styles.infoValue}>{exercise.duration}</Text>
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.infoLabel}>Dificuldade</Text>
              <Text style={styles.infoValue}>{exercise.difficulty}</Text>
            </View>
          </View>

          <View style={styles.instructionsContainer}>
            <Text style={styles.sectionTitle}>Instruções</Text>
            <Text style={styles.instructionsText}>{exercise.instructions}</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.actionButton}
          onPress={() => navigation.navigate('WorkoutInProgress', { exercise: exercise })}
        >
          <Text style={styles.actionButtonText}>Iniciar Treino</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.background },
    mainImage: { width: '100%', height: 300 },
    backButton: { position: 'absolute', top: 50, left: 20, backgroundColor: 'rgba(0,0,0,0.3)', padding: 5, borderRadius: 20 },
    contentContainer: { padding: 20 },
    title: { fontSize: 28, ...typography.bold, marginBottom: 20 },
    infoRow: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20, backgroundColor: '#f2f2f2', padding: 15, borderRadius: 10 },
    infoBox: { alignItems: 'center' },
    infoLabel: { fontSize: 16, color: '#888' },
    infoValue: { fontSize: 18, ...typography.bold, marginTop: 5 },
    instructionsContainer: { marginTop: 10 },
    sectionTitle: { fontSize: 22, ...typography.bold, marginBottom: 10 },
    instructionsText: { fontSize: 16, lineHeight: 24, color: '#555' },
    footer: { padding: 20, borderTopWidth: 1, borderTopColor: '#f0f0f0' },
    actionButton: { backgroundColor: '#7879F1', paddingVertical: 15, borderRadius: 15, alignItems: 'center' },
    actionButtonText: { color: '#fff', fontSize: 18, ...typography.bold },
});

export default WorkoutDetailScreen;