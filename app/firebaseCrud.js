// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, Button, ScrollView, Alert, StyleSheet } from 'react-native';
// import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
// import { db } from './firebaseConfig'; // Importa o Firestore configurado

// export default function App() {
//     const [mangas, setMangas] = useState([]);
//     const [serie, setSerie] = useState('');
//     const [nome, setNome] = useState('');
//     const [capitulo, setCapitulo] = useState('');

//     // Função para buscar dados da coleção "Mangas" no Firestore
//     const fetchMangas = async () => {
//         try {
//             const mangasCollection = collection(db, 'Mangas');
//             const mangasSnapshot = await getDocs(mangasCollection);
//             const mangasList = mangasSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//             setMangas(mangasList);
//         } catch (error) {
//             console.error("Erro ao buscar mangás: ", error);
//         }
//     };

//     // Função para adicionar um novo mangá no Firestore
//     const addManga = async () => {
//         if (!nome) {
//             Alert.alert('Erro', 'O nome não pode ser nulo');
//             return;
//         }
//         try {
//             const newManga = {
//                 serie,
//                 nome,
//                 capitulo
//             };
//             // Adiciona o novo mangá à coleção "Mangas"
//             await addDoc(collection(db, 'Mangas'), newManga);
//             // Limpa o formulário
//             setSerie('');
//             setNome('');
//             setCapitulo('');
//             // Atualiza a lista de mangás
//             fetchMangas();
//         } catch (error) {
//             console.error("Erro ao adicionar mangá: ", error);
//         }
//     };

//     // Função para deletar um mangá do Firestore
//     const deleteManga = async (mangaId) => {
//         Alert.alert(
//             'Confirmar',
//             'Você tem certeza que deseja deletar este mangá?',
//             [
//                 {
//                     text: 'Cancelar',
//                     style: 'cancel'
//                 },
//                 {
//                     text: 'Deletar',
//                     onPress: async () => {
//                         try {
//                             // Deleta o documento pelo ID
//                             await deleteDoc(doc(db, 'Mangas', mangaId));
//                             // Atualiza a lista de mangás
//                             fetchMangas();
//                         } catch (error) {
//                             console.error("Erro ao deletar mangá: ", error);
//                         }
//                     }
//                 }
//             ]
//         );
//     };

//     // Executa a função ao carregar o componente
//     useEffect(() => {
//         fetchMangas();
//     }, []);

//     return (
//         <ScrollView style={styles.container}>
//             <Text style={styles.title}>Mangás no Firestore</Text>
            
//             {/* Formulário para adicionar um novo mangá */}
//             <View style={styles.form}>
//                 <TextInput
//                     placeholder="Nome"
//                     value={nome}
//                     onChangeText={setNome}
//                     style={styles.input}
//                 />
//                 <TextInput
//                     placeholder="Capítulo"
//                     value={capitulo}
//                     onChangeText={setCapitulo}
//                     style={styles.input}
//                 />
//                 <TextInput
//                     placeholder="Série"
//                     value={serie}
//                     onChangeText={setSerie}
//                     style={styles.input}
//                 />
//                 <Button title="Adicionar Mangá" onPress={addManga} />
//             </View>

//             {/* Renderiza os mangás do Firestore */}
//             {mangas.map(manga => (
//                 <View key={manga.id} style={styles.mangaCard}>
//                     {manga.nome && (
//                         <Text style={styles.mangaNome}>Nome: {manga.nome}</Text>
//                     )}
//                     {manga.capitulo && (
//                         <Text>Capítulo: {manga.capitulo}</Text>
//                     )}
//                     {manga.serie && (
//                         <Text>Série: {manga.serie}</Text>
//                     )}
//                     {/* Botão para deletar o mangá */}
//                     <Button title="Deletar" onPress={() => deleteManga(manga.id)} color="red" />
//                 </View>
//             ))}
//         </ScrollView>
//     );
// }

// // Estilos
// const styles = StyleSheet.create({
//     container: {
//         padding: 20,
//         backgroundColor: '#F2F2F2',
//         flex: 1
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 20,
//         textAlign: 'center'
//     },
//     form: {
//         marginVertical: 20,
//         backgroundColor: '#FFFFFF',
//         padding: 15,
//         borderRadius: 10,
//         shadowColor: '#000',
//         shadowOffset: {
//             width: 0,
//             height: 1,
//         },
//         shadowOpacity: 0.2,
//         shadowRadius: 1.41,
//         elevation: 2,
//     },
//     input: {
//         borderWidth: 1,
//         borderColor: '#BFBFBF',
//         padding: 10,
//         marginBottom: 10,
//         borderRadius: 5,
//         backgroundColor: '#F9F9F9',
//     },
//     mangaCard: {
//         marginVertical: 10,
//         padding: 15,
//         backgroundColor: '#FFFFFF',
//         borderRadius: 10,
//         shadowColor: '#000',
//         shadowOffset: {
//             width: 0,
//             height: 1,
//         },
//         shadowOpacity: 0.2,
//         shadowRadius: 1.41,
//         elevation: 2,
//     },
//     mangaNome: {
//         fontSize: 18,
//         fontWeight: 'bold',
//     },
// });

//sem as notificações 

// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, Button, ScrollView, Alert, StyleSheet } from 'react-native';
// import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
// import { db } from './firebaseConfig'; // Importa o Firestore configurado

// export default function App() {
//     const [livros, setLivros] = useState([]);
//     const [serie, setSerie] = useState('');
//     const [nome, setNome] = useState('');
//     const [capitulo, setCapitulo] = useState('');

//     // Função para buscar dados da coleção "Livros" no Firestore
//     const fetchLivros = async () => {
//         try {
//             const livrosCollection = collection(db, 'Livros');
//             const livrosSnapshot = await getDocs(livrosCollection);
//             const livrosList = livrosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//             setLivros(livrosList);
//         } catch (error) {
//             console.error("Erro ao buscar livros: ", error);
//         }
//     };

//     // Função para adicionar um novo livro no Firestore
//     const addLivro = async () => {
//         if (!nome) {
//             Alert.alert('Erro', 'O nome não pode ser nulo');
//             return;
//         }
//         try {
//             const newLivro = {
//                 serie,
//                 nome,
//                 capitulo
//             };
//             // Adiciona o novo livro à coleção "Livros"
//             await addDoc(collection(db, 'Livros'), newLivro);
//             // Limpa o formulário
//             setSerie('');
//             setNome('');
//             setCapitulo('');
//             // Atualiza a lista de livros
//             fetchLivros();
//         } catch (error) {
//             console.error("Erro ao adicionar livro: ", error);
//         }
//     };

//     // Função para deletar um livro do Firestore
//     const deleteLivro = async (livroId) => {
//         Alert.alert(
//             'Confirmar',
//             'Você tem certeza que deseja deletar este livro?',
//             [
//                 {
//                     text: 'Cancelar',
//                     style: 'cancel'
//                 },
//                 {
//                     text: 'Deletar',
//                     onPress: async () => {
//                         try {
//                             // Deleta o documento pelo ID
//                             await deleteDoc(doc(db, 'Livros', livroId));
//                             // Atualiza a lista de livros
//                             fetchLivros();
//                         } catch (error) {
//                             console.error("Erro ao deletar livro: ", error);
//                         }
//                     }
//                 }
//             ]
//         );
//     };

//     // Executa a função ao carregar o componente
//     useEffect(() => {
//         fetchLivros();
//     }, []);

//     return (
//         <ScrollView style={styles.container}>
//             <Text style={styles.title}>Livros no Firestore</Text>
            
//             {/* Formulário para adicionar um novo livro */}
//             <View style={styles.form}>
//                 <TextInput
//                     placeholder="Nome"
//                     value={nome}
//                     onChangeText={setNome}
//                     style={styles.input}
//                     placeholderTextColor="#FFF"
//                 />
//                 <TextInput
//                     placeholder="Ano de lançamento"
//                     value={capitulo}
//                     onChangeText={setCapitulo}
//                     style={styles.input}
//                     placeholderTextColor="#FFF"
//                 />
//                 <TextInput
//                     placeholder="Autor (opcional)"
//                     value={serie}
//                     onChangeText={setSerie}
//                     style={styles.input}
//                     placeholderTextColor="#FFF"
//                 />
//                 <Button title="Adicionar Livro" onPress={addLivro} color="#C4A484" />
//             </View>

//             {/* Renderiza os livros do Firestore */}
//             {livros.map(livro => (
//                 <View key={livro.id} style={styles.livroCard}>
//                     {livro.nome && (
//                         <Text style={styles.livroNome}>Nome: {livro.nome}</Text>
//                     )}
//                     {livro.capitulo && (
//                         <Text>Capítulo: {livro.capitulo}</Text>
//                     )}
//                     {livro.serie && (
//                         <Text>Série: {livro.serie}</Text>
//                     )}
//                     {/* Botão para deletar o livro */}
//                     <Button title="Deletar" onPress={() => deleteLivro(livro.id)} color="#6A4E42" />
//                 </View>
//             ))}
//         </ScrollView>
//     );
// }

// // Estilos
// const styles = StyleSheet.create({
//     container: {
//         padding: 20,
//         backgroundColor: '#1A1A1A',
//         flex: 1
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 20,
//         textAlign: 'center',
//         color: '#C4A484'
//     },
//     form: {
//         marginVertical: 20,
//         backgroundColor: '#6A4E42',
//         padding: 15,
//         borderRadius: 10,
//         shadowColor: '#000',
//         shadowOffset: {
//             width: 0,
//             height: 1,
//         },
//         shadowOpacity: 0.2,
//         shadowRadius: 1.41,
//         elevation: 2,
//     },
//     input: {
//         borderWidth: 1,
//         borderColor: '#FFF',
//         padding: 10,
//         marginBottom: 10,
//         borderRadius: 5,
//         backgroundColor: '#C4A484',
//         color: '#FFF',
//     },
//     livroCard: {
//         marginVertical: 10,
//         padding: 15,
//         backgroundColor: '#6A4E42',
//         borderRadius: 10,
//         shadowColor: '#000',
//         shadowOffset: {
//             width: 0,
//             height: 1,
//         },
//         shadowOpacity: 0.2,
//         shadowRadius: 1.41,
//         elevation: 2,
//     },
//     livroNome: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         color: '#FFF',
//     },
// });


import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, ScrollView, Alert, StyleSheet, Platform } from 'react-native';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from './firebaseConfig'; // Importa o Firestore configurado
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

export default function App() {
    const [livros, setLivros] = useState([]);
    const [autor, setAutor] = useState('');
    const [nome, setNome] = useState('');
    const [anoLancamento, setAnoLancamento] = useState('');
    const [notification, setNotification] = useState(false);

    useEffect(() => {
        fetchLivros();
        registerForPushNotificationsAsync();

        const notificationListener = Notifications.addNotificationReceivedListener(notification => {
            setNotification(notification);
        });

        return () => {
            Notifications.removeNotificationSubscription(notificationListener);
        };
    }, []);

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

    // Função para adicionar um novo livro no Firestore
    const addLivro = async () => {
        if (!nome) {
            Alert.alert('Erro', 'O nome não pode ser nulo');
            return;
        }
        try {
            const newLivro = {
                autor,
                nome,
                anoLancamento
            };
            // Adiciona o novo livro à coleção "Livros"
            await addDoc(collection(db, 'Livros'), newLivro);
            // Limpa o formulário
            setAutor('');
            setNome('');
            setAnoLancamento('');
            // Atualiza a lista de livros
            fetchLivros();
            // Exibe a notificação
            showNotification();
        } catch (error) {
            console.error("Erro ao adicionar livro: ", error);
        }
    };

    // Função para deletar um livro do Firestore
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
                            // Deleta o documento pelo ID
                            await deleteDoc(doc(db, 'Livros', livroId));
                            // Atualiza a lista de livros
                            fetchLivros();
                        } catch (error) {
                            console.error("Erro ao deletar livro: ", error);
                        }
                    }
                }
            ]
        );
    };

    // Função para exibir notificação
    const showNotification = () => {
        Notifications.scheduleNotificationAsync({
            content: {
                title: "Livro adicionado!",
                body: "Um novo livro foi adicionado com sucesso.",
            },
            trigger: { seconds: 2 },
        });
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Livros no Firestore</Text>
            
            {/* Formulário para adicionar um novo livro */}
            <View style={styles.form}>
                <TextInput
                    placeholder="Nome"
                    value={nome}
                    onChangeText={setNome}
                    style={styles.input}
                    placeholderTextColor="#FFF"
                />
                <TextInput
                    placeholder="Ano de Lançamento"
                    value={anoLancamento}
                    onChangeText={setAnoLancamento}
                    style={styles.input}
                    placeholderTextColor="#FFF"
                    keyboardType="numeric"
                />
                <TextInput
                    placeholder="Autor"
                    value={autor}
                    onChangeText={setAutor}
                    style={styles.input}
                    placeholderTextColor="#FFF"
                />
                <Button title="Adicionar Livro" onPress={addLivro} />
            </View>

            {/* Renderiza os livros do Firestore */}
            {livros.map(livro => (
                <View key={livro.id} style={styles.livroCard}>
                    {livro.nome && (
                        <Text style={styles.livroNome}>Nome: {livro.nome}</Text>
                    )}
                    {livro.anoLancamento && (
                        <Text style={styles.livroInfo}>Ano de Lançamento: {livro.anoLancamento}</Text>
                    )}
                    {livro.autor && (
                        <Text style={styles.livroInfo}>Autor: {livro.autor}</Text>
                    )}
                    {/* Botão para deletar o livro */}
                    <Button title="Deletar" onPress={() => deleteLivro(livro.id)} color="red" />
                </View>
            ))}
        </ScrollView>
    );
}

// Função para solicitar permissões de notificação
async function registerForPushNotificationsAsync() {
    if (Platform.OS === 'android') {
        await Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
        });
    }

    const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status;
    }

    if (finalStatus !== 'granted') {
        alert('Permissão para notificações não concedida!');
        return;
    }
}

// Estilos
const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#6A4E42', // Fundo em tons terrosos
        flex: 1
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#FFF', // Texto branco
    },
    form: {
        marginVertical: 20,
        backgroundColor: '#8B5E3C', // Fundo mais escuro para contraste
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
        borderColor: '#FFF', // Bordas brancas
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        backgroundColor: '#6A4E42', // Fundo em tons terrosos
        color: '#FFF', // Texto branco
    },
    livroCard: {
        marginVertical: 10,
        padding: 15,
        backgroundColor: '#8B5E3C', // Fundo mais escuro
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
        color: '#FFF', // Texto branco
    },
    livroInfo: {
        color: '#FFF', // Texto branco
    },
});
