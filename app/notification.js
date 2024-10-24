import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, ScrollView, Alert, StyleSheet } from 'react-native';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from './firebaseConfig'; // Importa o Firestore configurado
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function App() {
  const [livros, setLivros] = useState([]);
  const [serie, setSerie] = useState('');
  const [nome, setNome] = useState('');
  const [capitulo, setCapitulo] = useState('');

  // Função para buscar dados da coleção "Livros" no Firestore
  const fetchLivros = async () => {
    try {
      const livrosCollection = collection(db, 'Livros');
      const livrosSnapshot = await getDocs(livrosCollection);
      const livrosList = livrosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setLivros(livrosList);
    } catch (error) {
      console.error("Erro ao buscar livros: ", error);
    }
  };

  // Função para solicitar permissões de notificação
  const requestNotificationPermission = async () => {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== 'granted') {
      alert('Permissão de notificação não foi concedida.');
      return false;
    }

    return true;
  };

  // Função para adicionar um novo livro no Firestore e disparar notificação
  const addLivro = async () => {
    if (!nome) {
      Alert.alert('Erro', 'O nome não pode ser nulo');
      return;
    }

    try {
      const newLivro = {
        serie,
        nome,
        capitulo
      };
      await addDoc(collection(db, 'Livros'), newLivro);
      setSerie('');
      setNome('');
      setCapitulo('');
      fetchLivros();

      const hasPermission = await requestNotificationPermission();

      if (hasPermission) {
        // Disparar notificação ao adicionar um livro
        await Notifications.scheduleNotificationAsync({
          content: {
            title: "Livro Adicionado",
            body: `O livro ${nome} foi adicionado com sucesso!`,
          },
          trigger: null,
        });
      }
    } catch (error) {
      console.error("Erro ao adicionar livro: ", error);
    }
  };

  // Função para deletar um livro do Firestore e disparar notificação
  const deleteLivro = async (livroId) => {
    Alert.alert(
      'Confirmar',
      'Você tem certeza que deseja deletar este livro?',
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Deletar',
          onPress: async () => {
            try {
              await deleteDoc(doc(db, 'Livros', livroId));
              fetchLivros();

              const hasPermission = await requestNotificationPermission();

              if (hasPermission) {
                // Disparar notificação ao deletar um livro
                await Notifications.scheduleNotificationAsync({
                  content: {
                    title: "Livro Deletado",
                    body: `Um livro foi deletado!`,
                  },
                  trigger: null,
                });
              }
            } catch (error) {
              console.error("Erro ao deletar livro: ", error);
            }
          }
        }
      ]
    );
  };

  // Executa a função ao carregar o componente
  useEffect(() => {
    fetchLivros();

    // Verificar permissões de notificação ao inicializar o app
    requestNotificationPermission();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Livros no Firestore</Text>
      <Text style={styles.title}>Aqui voçê nos envia o livro que gostariamos de adicionar</Text>
      
      {/* Formulário para adicionar um novo livro */}
      <View style={styles.form}>
        <TextInput
          placeholder="Nome"
          value={nome}
          onChangeText={setNome}
          style={styles.input}
        />
        <TextInput
          placeholder="Capítulo"
          value={capitulo}
          onChangeText={setCapitulo}
          style={styles.input}
        />
        <TextInput
          placeholder="Ano de Lançamento"
          value={serie}
          onChangeText={setSerie}
          style={styles.input}
        />
        <Button title="Adicionar Livro" onPress={addLivro} color="#8B5E3C" />

      </View>

      {/* Renderiza os livros do Firestore */}
      {livros.map(livro => (
        <View key={livro.id} style={styles.livroCard}>
          {livro.nome && (
            <Text style={styles.livroNome}>Nome: {livro.nome}</Text>
          )}
          {livro.capitulo && (
            <Text>Capítulo: {livro.capitulo}</Text>
          )}
          {livro.serie && (
            <Text>Ano de Lançamento {livro.serie}</Text>
          )}
          {/* Botão para deletar o livro */}
          <Button title="Deletar" onPress={() => deleteLivro(livro.id)} color="red" />
        </View>
      ))}
    </ScrollView>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#C4A484',
    flex: 1
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  form: {
    marginVertical: 20,
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  input: {
    borderWidth: 1,
    borderColor: '#C4A484',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#F9F9F9',
  },
  livroCard: {
    marginVertical: 10,
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  livroNome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
