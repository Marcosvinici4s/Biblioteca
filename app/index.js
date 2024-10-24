import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome'; // Adicione a importação de ícones
import notification from 'react-native'

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../assets/images/bookshelf.jpg')}
        resizeMode="cover"
      >
        <View style={styles.textContainer}>
          <Text style={styles.header}>Gostaria de Conhecer?</Text>
        </View>
      </ImageBackground>
      <View style={styles.buttonContainer}>
        <Link href="/notification" asChild>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="sign-in" size={30} color="#FFFFFF" />
          </TouchableOpacity>
        </Link>
        <Link href="/biblioteca" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Bibliotecas</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/products" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Livros</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/Autores" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Autores</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontWeight: 'bold',
    color: '#6A4E42',
    fontSize: 30,
    textAlign: 'center',
    backgroundColor: '#000000c0',
    padding: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    alignItems: 'center',
  },
  iconButton: {
    position: 'absolute', // Adicione esta linha
    top: -630, // Ajuste conforme necessário
    right: 2, // Ajuste conforme necessário
    backgroundColor: '#C4A484',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 50, // Deixar redondo
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  button: {
    backgroundColor: '#C4A484',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default App;
