import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false); // alterna entre login e cadastro
  const [errorMessage, setErrorMessage] = useState('');

  const handleAuth = async () => {
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      navigation.replace('Index'); // navega para a tela principal após o login
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isSignUp ? 'Cadastrar' : 'Logar'}</Text>
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />
      <Pressable style={styles.authButton} onPress={handleAuth}>
        <Text style={styles.authButtonText}>{isSignUp ? 'Cadastrar' : 'Logar'}</Text>
      </Pressable>
      <Pressable onPress={() => setIsSignUp(!isSignUp)}>
        <Text style={styles.switchText}>
          {isSignUp ? 'Já tem uma conta? Logar' : 'Não tem uma conta? Cadastrar'}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  authButton: {
    backgroundColor: '#C4A484', // mesma cor de botão do restante da aplicação
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  authButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  switchText: {
    marginTop: 10,
    color: '#C4A484',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});
