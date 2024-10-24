<<<<<<< HEAD
// import React from 'react';
// import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
// import { Link } from 'expo-router';
// import Icon from 'react-native-vector-icons/FontAwesome'; // ou qualquer outro pacote de ícones

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <ImageBackground
//         style={styles.image}
//         source={require('../assets/images/bookshelf.jpg')} 
//         resizeMode="cover"
//       >
//         <View style={styles.loginIconContainer}>
//           <Link href="/login" asChild>
//             <TouchableOpacity>
//               <Icon name="user" size={30} color="#fff" /> {/* Ícone de login */}
//             </TouchableOpacity>
//           </Link>
//         </View>

//         <View style={styles.textContainer}> 
//           <Text style={styles.header}>Gostaria de Conhecer?</Text>
//         </View>
//       </ImageBackground>
      
//       <View style={styles.buttonContainer}>
//         <Link href="/biblioteca" asChild>
//           <TouchableOpacity style={styles.button}>
//             <Text style={styles.buttonText}>Bibliotecas</Text>
//           </TouchableOpacity>
//         </Link>

//         <Link href="/products" asChild>
//           <TouchableOpacity style={styles.button}>
//             <Text style={styles.buttonText}>Livros</Text>
//           </TouchableOpacity>
//         </Link>

//         <Link href="/Autores" asChild>
//           <TouchableOpacity style={styles.button}>
//             <Text style={styles.buttonText}>Autores</Text>
//           </TouchableOpacity>
//         </Link>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   loginIconContainer: {
//     position: 'absolute',
//     top: 40, 
//     right: 20,
//     zIndex: 1, 
//   },
//   textContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   header: {
//     fontWeight: 'bold',
//     color: '#6A4E42', 
//     fontSize: 30,
//     textAlign: 'center',
//     backgroundColor: '#000000c0',
//     padding: 10,
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//   },
//   buttonContainer: {
//     position: 'absolute',
//     bottom: 20,
//     left: 20,
//     right: 20,
//     alignItems: 'center',
//   },
//   button: {
//     backgroundColor: '#C4A484', 
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 15,
//     borderRadius: 10,
//     marginBottom: 10,
//     width: '100%',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 5 },
//     shadowOpacity: 0.3,
//     shadowRadius: 10,
//     elevation: 5,
//   },
//   buttonText: {
//     fontSize: 18,
//     color: '#FFFFFF',
//     fontWeight: 'bold',
//   },
// });

// export default App;


import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Pressable, Modal, TextInput, Button } from 'react-native';
import { Link } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from './firebaseConfig'; 
=======
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome'; // Adicione a importação de ícones
import notification from 'react-native'
>>>>>>> 5b9db57b19cd7ca5f18075799dda5685eaf19eee

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Usuário logado com sucesso!');
      setModalVisible(false);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('Usuário deslogado com sucesso!');
      setUser(null);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      if (loggedUser) {
        setUser(loggedUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../assets/images/bookshelf.jpg')}
        resizeMode="cover"
      >
<<<<<<< HEAD
        {/* Ícone de perfil que abre o modal de login */}
        <View style={styles.loginIconContainer}>
          <Pressable onPress={() => setModalVisible(true)} style={styles.profileIcon}>
            <Icon name="user" size={30} color="#fff" />
          </Pressable>
        </View>

=======
>>>>>>> 5b9db57b19cd7ca5f18075799dda5685eaf19eee
        <View style={styles.textContainer}>
          <Text style={styles.header}>Gostaria de Conhecer?</Text>
        </View>
      </ImageBackground>
<<<<<<< HEAD

      {/* Botões de navegação */}
      <View style={styles.buttonContainer}>
=======
      <View style={styles.buttonContainer}>
        <Link href="/notification" asChild>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="sign-in" size={30} color="#FFFFFF" />
          </TouchableOpacity>
        </Link>
>>>>>>> 5b9db57b19cd7ca5f18075799dda5685eaf19eee
        <Link href="/biblioteca" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Bibliotecas</Text>
          </TouchableOpacity>
        </Link>
<<<<<<< HEAD



=======
>>>>>>> 5b9db57b19cd7ca5f18075799dda5685eaf19eee
        <Link href="/products" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Livros</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/Autores" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Autores</Text>
          </TouchableOpacity>
<<<<<<< HEAD
        </Link>

        <Link href="/firebaseCrud" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Add Livros</Text>
          </TouchableOpacity>
        </Link>
      </View>

      {/* Modal de Login */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Logar</Text>

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

            {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
          </View>
        </View>
      </Modal>
    </View>
  );
};

=======
        </Link>
      </View>
    </View>
  );
}

>>>>>>> 5b9db57b19cd7ca5f18075799dda5685eaf19eee
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginIconContainer: {
    position: 'absolute',
    top: 40, 
    right: 20,
    zIndex: 1, 
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontWeight: 'bold',
<<<<<<< HEAD
    color: '#6A4E42', 
=======
    color: '#6A4E42',
>>>>>>> 5b9db57b19cd7ca5f18075799dda5685eaf19eee
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
<<<<<<< HEAD
    backgroundColor: '#C4A484', 
=======
    backgroundColor: '#C4A484',
>>>>>>> 5b9db57b19cd7ca5f18075799dda5685eaf19eee
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
  profileIcon: {
    position: 'absolute',
    top: 40, 
    right: 20, 
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
    borderColor: '#FFF',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    color: '#FFF',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  addButton: {
    backgroundColor: '#C4A484', 
    padding: 10,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
  cancelButton: {
    backgroundColor: '#6A4E42', 
    padding: 10,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
  error: {
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default App;
