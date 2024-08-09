import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native';
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

      <Link href="/products" style={styles.button} asChild>
        <Pressable>
          <Text style={styles.buttonText}>Ver biblioteca</Text>
        </Pressable>
      </Link>
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
  button: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#C4A484', // cor de botão mais suave, lembrando couro
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 10, // bordas menos arredondadas
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF', // texto do botão em branco
    fontWeight: 'bold',
  },
});

export default App;
