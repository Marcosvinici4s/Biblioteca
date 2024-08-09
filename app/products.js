import { Text, ScrollView, View, Image, StyleSheet } from "react-native";
import { Link } from "expo-router";
import list from './products.json';
import imageMappings from './imageMappings';

export default function Books() {
    const halfIndex = Math.ceil(list.listProduct.length / 2);
    const firstHalf = list.listProduct.slice(0, halfIndex);
    const secondHalf = list.listProduct.slice(halfIndex);

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>
                Nossa Biblioteca
            </Text>

            <View style={styles.listContainer}>
                <View style={styles.column}>
                    {firstHalf.map((item) => (
                        <View key={item.id} style={styles.itemContainer}>
                            <Image source={imageMappings[item.image]} style={styles.image} />
                            <Text style={styles.titleProduct}>{item.id}. {item.title}</Text>
                            <Link
                                href={{
                                    pathname: "/booksingle/[id]",
                                    params: { id: item.id }
                                }}
                                style={styles.itemLink}
                            >
                                <Text style={styles.linkText}>Acessar</Text>
                            </Link>
                        </View>
                    ))}
                </View>

                <View style={styles.column}>
                    {secondHalf.map((item) => (
                        <View key={item.id} style={styles.itemContainer}>
                            <Image source={imageMappings[item.image]} style={styles.image} />
                            <Text style={styles.titleProduct}>{item.id}. {item.title}</Text>
                            <Link
                                href={{
                                    pathname: "/booksingle/[id]",
                                    params: { id: item.id }
                                }}
                                style={styles.itemLink}
                            >
                                <Text style={styles.linkText}>Acessar</Text>
                            </Link>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 20,
        color: '#6A4E42',
        fontSize: 20,
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F5F5DC',
    },
    listContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap', // Permite que os containers quebrem para a linha seguinte se não houver espaço suficiente
    },
    column: {
        flex: 1,
        maxWidth: 180, // Define uma largura máxima para cada coluna
        marginHorizontal: 10, // Espaço horizontal entre as colunas
    },
    itemContainer: {
        backgroundColor: '#C4A484',
        borderRadius: 8,
        padding: 10,
        marginBottom: 20,
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    titleProduct: {
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
    },
    itemLink: {
        backgroundColor: '#6A4E42',
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginTop: 10,
        borderRadius: 10,
    },
    linkText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 14,
    },
});
