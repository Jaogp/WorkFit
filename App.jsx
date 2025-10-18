// App.js

import React, { useEffect } from 'react'; // <-- VERIFIQUE ESTA LINHA
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';

// Importações do projeto
import { UserProvider } from './src/context/UserContext';
import MainTabNavigator from './src/navigation/MainTabNavigator';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import RankingScreen from './src/screens/RankingScreen';
import ExerciseListScreen from './src/screens/ExerciseListScreen';
import AdvancedSettingsScreen from './src/screens/AdvancedSettingsScreen';
import WorkoutDetailScreen from './src/screens/WorkoutDetailScreen';
import WorkoutInProgressScreen from './src/screens/WorkoutInProgressScreen';
import EditProfileScreen from './src/screens/EditProfileScreen';


const Stack = createNativeStackNavigator();

const App = () => {
  const [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  // useEffect para verificar se há erro no carregamento das fontes
  useEffect(() => {
    if (fontError) {
      console.error('--- ERRO AO CARREGAR FONTES ---', fontError);
    }
  }, [fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}
        >
          {/* Telas de Autenticação */}
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
          
          {/* Telas do App */}
          <Stack.Screen name="MainApp" component={MainTabNavigator} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Notifications" component={NotificationsScreen} />
          <Stack.Screen name="Ranking" component={RankingScreen} />
          <Stack.Screen name="ExerciseList" component={ExerciseListScreen} />
          <Stack.Screen name="AdvancedSettings" component={AdvancedSettingsScreen} />
          <Stack.Screen name="WorkoutDetail" component={WorkoutDetailScreen} />
          <Stack.Screen name="WorkoutInProgress" component={WorkoutInProgressScreen} />
          <Stack.Screen name="EditProfile" component={EditProfileScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;