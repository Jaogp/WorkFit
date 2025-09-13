import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginScreen = ({ navigation }) => {
  // Estados para armazenar os valores dos campos de e-mail и senha
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Função para lidar com o pressionar do botão de login
  const handleLogin = () => {
    // Validação simples dos campos
    if (!email.trim() || !password.trim()) {
      Alert.alert('Atenção', 'Por favor, preencha o e-mail e a senha.');
      return;
    }
    
    // Simulação de uma chamada de API
    console.log('Tentativa de login com:', { email, password });
     navigation.replace('MainApp');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Define a cor dos ícones da barra de status (hora, bateria, etc.) */}
      <StatusBar barStyle="dark-content" />

      {/* View vazia para empurrar o conteúdo principal para baixo */}
      <View style={styles.headerSpacer} />

      {/* Conteúdo principal da tela */}
      <View style={styles.mainContent}>
        <View style={styles.header}>
           <Image
            source={{ uri: 'https://i.imgur.com/WXRrpYV.jpeg' }}
            style={styles.logoImage}
          />
          <Text style={styles.logoText}>WORKFIT</Text>
        </View>


        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#999"
          secureTextEntry // Esconde a senha
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Entrar</Text>
        </TouchableOpacity>

        <View style={styles.linksContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.linkText}>Cadastre-se!</Text>
          </TouchableOpacity>
          {/* 3. Adicione o onPress aqui */}
          <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.linkText}>Esqueceu a senha?</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Rodapé fixo na parte inferior */}
      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={styles.footerLink}>portal RH</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerLink}>Instrutor</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// StyleSheet para otimizar a performance dos estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  headerSpacer: {
    flex: 0.5,
  },
  mainContent: {
    flex: 8,
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logoImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 15,
  },
  logoText: {
    fontSize: 32,
    fontWeight: 'bold',
    letterSpacing: 2,
    color: '#111',
  },
  prompt: {
    fontSize: 16,
    color: '#666',
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
    marginBottom: 15,
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#000000',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '500',
  },
  linksContainer: {
    marginTop: 25,
    alignItems: 'center',
  },
  linkText: {
    color: '#777',
    fontSize: 14,
    marginTop: 10,
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 30,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  footerLink: {
    color: '#555',
    fontWeight: '500',
  },
});

export default LoginScreen;