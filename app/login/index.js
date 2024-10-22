import React, { useState, useEffect } from 'react';
import { Text, View, Pressable, Modal, StyleSheet, TextInput, Button } from 'react-native';
import { Link } from 'expo-router';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_AUTH_DOMAIN",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_STORAGE_BUCKET",
  messagingSenderId: "SEU_MESSAGING_SENDER_ID",
  appId: "SEU_APP_ID"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // Utilize esta linha para evitar reinicialização
}

const auth = firebase.auth();

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      setModalVisible(false);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      setUser(null);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((loggedUser) => {
      if (loggedUser) {
        setUser(loggedUser);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {user ? (
        <View>
          <Text style={{ color: "#222", marginTop: 20 }}>Bem-vindo, {user.email}</Text>
          <Button title="Logout" onPress={handleLogout} />
        </View>
      ) : (
        <View>
          {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
        </View>
      )}
      <Link href="/firebase.js" asChild>
      </Link>
      <Link href="/notification" asChild>
        <Pressable style={{ backgroundColor: "#8B5E3C", padding: 15, borderRadius: 10, width: '95%', marginBottom: 10 }}>
          <Text style={{ fontSize: 22, color: "#FFFFFF", textAlign: "center" }}> Notificações </Text>
        </Pressable>
      </Link>
      <Pressable onPress={() => setModalVisible(true)} style={{ backgroundColor: "#8B5E3C", padding: 15, borderRadius: 10, width: '95%', marginBottom: 10 }}>
        <Text style={{ fontSize: 22, color: "#FFFFFF", textAlign: "center" }}> Login </Text>
      </Pressable>
      <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Login</Text>
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={styles.input}
              placeholderTextColor="#FFF"
              keyboardType="email-address"
            />
            <TextInput
              placeholder="Senha"
              value={password}
              onChangeText={(text) => setPassword(text)}
              style={styles.input}
              placeholderTextColor="#FFF"
              secureTextEntry
            />
            <View style={styles.modalButtons}>
              <Pressable style={styles.addButton} onPress={handleLogin}>
                <Text style={styles.addButtonText}>Logar</Text>
              </Pressable>
              <Pressable style={styles.cancelButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.cancelButtonText}>Cancelar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '90%',
    backgroundColor: '#1A1A1A',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#FFF',
  },
  input: {
    borderWidth: 1,
    borderColor: '#C4A484', // cor da borda mudada para combinar com o padrão anterior
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    color: '#FFF',
    backgroundColor: '#fffbea', // cor de fundo do input mudada para combinar com o padrão anterior
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  addButton: {
    backgroundColor: '#C4A484', // cor de botão mudada para combinar com o padrão anterior
    padding: 10,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
    shadowColor: '#000', // Sombra
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
  cancelButton: {
    backgroundColor: '#8B5E3C',
    padding: 10,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

