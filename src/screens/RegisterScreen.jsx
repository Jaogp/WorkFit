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
  ScrollView, // Usaremos ScrollView para evitar que o teclado cubra os campos
} from 'react-native';

const RegisterScreen = ({ navigation }) => {
  // Estados para armazenar os valores de cada campo do formulário
  const [cnpj, setCnpj] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Função para lidar com o pressionar do botão de cadastro
  const handleRegister = () => {
    // 1. Validação para verificar se todos os campos estão preenchidos
    if (!cnpj.trim() || !cpf.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
      Alert.alert('Atenção', 'Por favor, preencha todos os campos.');
      return;
    }

    // 2. Validação para verificar se as senhas coincidem
    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }

    // Se todas as validações passarem, simula o cadastro
    console.log('Dados do Cadastro:', { cnpj, cpf, email, password });
    Alert.alert('Sucesso!', `Usuário cadastrado com o e-mail: ${email}`);
    
    // Aqui você faria a chamada para a sua API para registrar o usuário no banco de dados
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.header}>
          <Image
            source={{ uri: 'https://i.imgur.com/WXRrpYV.jpeg' }}
            style={styles.logoImage}
          />
          <Text style={styles.logoText}>Crie sua conta</Text>
        </View>

        <Text style={styles.prompt}>Preencha os dados abaixo para se cadastrar</Text>

        <TextInput
          style={styles.input}
          placeholder="CNPJ da Empresa"
          placeholderTextColor="#999"
          keyboardType="numeric" // Teclado numérico para facilitar
          value={cnpj}
          onChangeText={setCnpj}
        />

        <TextInput
          style={styles.input}
          placeholder="CPF do Usuário"
          placeholderTextColor="#999"
          keyboardType="numeric"
          value={cpf}
          onChangeText={setCpf}
        />

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

        <TextInput
          style={styles.input}
          placeholder="Confirme sua Senha"
          placeholderTextColor="#999"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.registerButtonText}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.loginLink} 
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.linkText}>Já tem uma conta? Faça login</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};

// Os estilos são muito parecidos com os da tela de login
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingVertical: 20,
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
  logoText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111',
  },
  prompt: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 25,
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
  registerButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#000000',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  registerButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '500',
  },
  loginLink: {
    marginTop: 25,
    alignItems: 'center',
  },
  linkText: {
    color: '#777',
    fontSize: 14,
  },
});

export default RegisterScreen;