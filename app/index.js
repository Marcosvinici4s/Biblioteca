import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, } from 'react-native';
import { Link } from 'expo-router';

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
      {/* <Link href="/flex" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>flex</Text>
          </TouchableOpacity>
        </Link> */}
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
    color: '#6A4E42', // cor mais terrosa para o texto
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
  button: {
    backgroundColor: '#C4A484', // cor de botão mais suave, lembrando couro
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 10, // bordas menos arredondadas
    marginBottom: 10, // espaço entre os botões
    width: '100%',
    shadowColor: '#000', // Cor da sombra
        shadowOffset: { width: 0, height: 5 }, // Deslocamento da sombra
        shadowOpacity: 0.3, // Opacidade da sombra
        shadowRadius: 10, // Raio da sombra
        // Sombra para Android
        elevation: 5, // Elevação para sombra
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF', // texto do botão em branco
    fontWeight: 'bold',
  },
});

export default App;
