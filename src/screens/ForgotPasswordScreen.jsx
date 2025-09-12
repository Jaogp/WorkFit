// src/screens/ForgotPasswordScreen.js

import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
  StatusBar,
} from 'react-native';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handlePasswordReset = () => {
    if (!email.trim()) {
      Alert.alert('Atenção', 'Por favor, insira seu e-mail.');
      return;
    }

    // Lógica de redefinição de senha (simulação)
    console.log('Solicitação de redefinição para o e-mail:', email);

    // Mensagem de confirmação genérica por segurança
    Alert.alert(
      'Verifique seu E-mail',
      'Se uma conta com este e-mail existir, um link para redefinição de senha foi enviado.'
    );

    navigation.navigate('Login'); // Volta para a tela de login após a solicitação
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.content}>
        <View style={styles.header}>
          <Image
            source={{ uri: 'https://i.imgur.com/WXRrpYV.jpeg' }}
            style={styles.logoImage}
          />
          <Text style={styles.title}>Esqueceu sua senha?</Text>
        </View>

        <Text style={styles.prompt}>
          Não se preocupe! Insira seu e-mail abaixo para receber as instruções de redefinição.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TouchableOpacity style={styles.button} onPress={handlePasswordReset}>
          <Text style={styles.buttonText}>Enviar Link de Redefinição</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backLink}>Voltar para o Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logoImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111',
    textAlign: 'center',
  },
  prompt: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#f7f7f7',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#000000',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '500',
  },
  backLink: {
    marginTop: 25,
    color: '#777',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default ForgotPasswordScreen;