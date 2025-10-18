// src/screens/WorkoutInProgressScreen.js

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  Alert,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';

const WorkoutInProgressScreen = ({ route, navigation }) => {
  // Recebe os detalhes do exercício da tela anterior
  const { exercise } = route.params;

  const [isActive, setIsActive] = useState(true); // Controla se o timer está rodando ou pausado
  const [seconds, setSeconds] = useState(5 * 60); // 5 minutos em segundos

  // useEffect é um "efeito colateral" que roda quando o estado muda.
  // Usamos ele para controlar o cronômetro.
  useEffect(() => {
    let interval = null;

    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      clearInterval(interval);
      Alert.alert("Tempo Esgotado!", "Parabéns por concluir o exercício!");
    }

    // Limpa o intervalo quando o componente é desmontado ou o estado muda
    return () => clearInterval(interval);
  }, [isActive, seconds]); // O efeito roda de novo se 'isActive' ou 'seconds' mudar

  // Formata os segundos para o formato MM:SS
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleFinishWorkout = () => {
    // Aqui, futuramente, adicionaremos os pontos ao usuário
    Alert.alert("Treino Concluído!", "Você finalizou o exercício. Bom trabalho!");
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
        <Ionicons name="close-outline" size={32} color="#333" />
      </TouchableOpacity>

      <View style={styles.content}>
        <Image source={{ uri: exercise.image }} style={styles.exerciseImage} />
        <Text style={styles.title}>{exercise.name}</Text>
        
        <Text style={styles.timer}>{formatTime(seconds)}</Text>
        
        <View style={styles.controls}>
          <TouchableOpacity style={styles.controlButton} onPress={() => setIsActive(!isActive)}>
            <Ionicons name={isActive ? "pause-circle-outline" : "play-circle-outline"} size={60} color="#333" />
            <Text style={styles.controlText}>{isActive ? 'Pausar' : 'Continuar'}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.controlButton} onPress={handleFinishWorkout}>
            <Ionicons name="stop-circle-outline" size={60} color="#e74c3c" />
            <Text style={styles.controlText}>Concluir</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    closeButton: { position: 'absolute', top: 50, right: 20, zIndex: 1 },
    content: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
    exerciseImage: { width: '100%', height: 250, borderRadius: 15, marginBottom: 30 },
    title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
    timer: { fontSize: 72, fontWeight: '300', marginVertical: 30 },
    controls: { flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginTop: 20 },
    controlButton: { alignItems: 'center' },
    controlText: { fontSize: 16, marginTop: 5 },
});

export default WorkoutInProgressScreen;