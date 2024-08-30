// import { Text, ScrollView, View, Image, StyleSheet } from "react-native";
// import { Link } from "expo-router";
// import list from './biblioteca.json';
// import imageMappings from './imageMappings';

// export default function Biblioteca() {
//     return (
//         <ScrollView style={styles.container}>
//             <Text style={styles.title}>
//                 Bibliotecas Disponiveis
//             </Text>

//             <View style={styles.listContainer}>
//                 {list.bibliotecajson.map((item) => (
//                     <View key={item.id} style={styles.itemContainer}>
//                         <Image source={imageMappings[item.image]} style={styles.image} />
//                         <Text style={styles.titleProduct}>{item.id}. {item.title}</Text>
//                         <Link
//                             href={{
//                                 pathname: "/bibliotecasingle/[id]",
//                                 params: { id: item.id }
//                             }}
//                             style={styles.itemLink}
//                         >
//                             <Text style={styles.linkText}>Descrição</Text>
//                         </Link>
//                     </View>
//                 ))}
//             </View>
//         </ScrollView>
//     );
// }

// const styles = StyleSheet.create({
//     title: {
//         textAlign: 'center',
//         fontWeight: 'bold',
//         marginBottom: 20,
//         marginTop: 20,
//         color: '#6A4E42',
//         fontSize: 20,
//     },
//     container: {
//         flex: 1,
//         padding: 20,
//         backgroundColor: '#F5F5DC',
//     },
//     listContainer: {
//         flexDirection: 'column', // Altera para coluna única
//         justifyContent: 'center',
//     },
//     itemContainer: {
//         backgroundColor: '#C4A484',
//         borderRadius: 8,
//         padding: 10,
//         marginBottom: 20,
//         alignItems: 'center',
//     },
//     image: {
//         width: 100,
//         height: 100,
//         borderRadius: 8,
//     },
//     titleProduct: {
//         fontSize: 12,
//         fontWeight: 'bold',
//         textAlign: 'center',
//         marginTop: 10,
//     },
//     itemLink: {
//         backgroundColor: '#6A4E42',
//         paddingVertical: 8,
//         paddingHorizontal: 12,
//         marginTop: 10,
//         borderRadius: 10,
//     },
//     linkText: {
//         color: '#FFFFFF',
//         fontWeight: 'bold',
//         fontSize: 14,
//     },
// });
import { Text, ScrollView, View, Image } from "react-native";
import { Link } from "expo-router";
import list from './biblioteca.json';
import imageMappings from './imageMappings';

export default function Biblioteca() {
    return (
        <ScrollView style={{ flex: 1, padding: 20, backgroundColor: '#F5F5DC' }}>
            <Text style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: 20, marginTop: 20, color: '#6A4E42', fontSize: 20 }}>
                Bibliotecas Disponiveis
            </Text>

            <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                {list.bibliotecajson.map((item) => (
                    <View key={item.id} style={{ backgroundColor: '#C4A484', borderRadius: 8, padding: 10, marginBottom: 20, alignItems: 'center' }}>
                        <Image source={imageMappings[item.image]} style={{ width: 100, height: 100, borderRadius: 8 }} />
                        <Text style={{ fontSize: 12, fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}>{item.id}. {item.title}</Text>
                        <Link
                            href={{
                                pathname: "/bibliotecasingle/[id]",
                                params: { id: item.id }
                            }}
                            style={{ backgroundColor: '#6A4E42', paddingVertical: 8, paddingHorizontal: 12, marginTop: 10, borderRadius: 10 }}
                        >
                            <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 14 }}>Descrição</Text>
                        </Link>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
}
