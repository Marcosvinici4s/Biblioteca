import { View, Text, ScrollView, Image } from "react-native";

export default function Flex() {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#F5F5DC' }}> {/* Cor de fundo ajustada aqui */}
            <View style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#F5F5DC', margin: 10, borderRadius: 15, borderWidth: 2, borderColor: '#8B4513' }}>
                <View style={{ alignItems: 'center', justifyContent: 'center', padding: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#8B4513' }}>George Orwell</Text>
                </View>
                <View style={{ flexDirection: 'row', padding: 10 }}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Image style={{ width: 150, height: 150, borderRadius: 10 }}
                            source={require('../assets/images/books/George.png')}
                        />
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', paddingLeft: 10 }}>
                        <Text style={{ color: '#4B0082' }}>
                        George Orwell, nascido Eric Arthur Blair em 1903 na Índia, foi um autor modernista inglês. Trabalhou em diversas áreas, incluindo a Polícia Imperial Indiana e a BBC.
                        </Text>
                    </View>
                </View>
            </View>

            <View style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#F5F5DC', margin: 10, borderRadius: 15, borderWidth: 2, borderColor: '#8B4513' }}>
                <View style={{ alignItems: 'center', justifyContent: 'center', padding: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#8B4513' }}>Aldous Huxley</Text>
                </View>
                <View style={{ flexDirection: 'row', padding: 10 }}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Image style={{ width: 150, height: 150, borderRadius: 10 }}
                            source={require('../assets/images/books/Aldous.png')}
                        />
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', paddingLeft: 10 }}>
                        <Text style={{ color: '#4B0082' }}>
                        Aldous Huxley foi um escritor inglês conhecido por seus romances. Além de romances, ele escreveu ensaios, contos, poesias, literatura de viagem e roteiros de filmes.
                        </Text>
                    </View>
                </View>
            </View>

            <View style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#F5F5DC', margin: 10, borderRadius: 15, borderWidth: 2, borderColor: '#8B4513' }}>
                <View style={{ alignItems: 'center', justifyContent: 'center', padding: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#8B4513' }}>Harper Lee</Text>
                </View>
                <View style={{ flexDirection: 'row', padding: 10 }}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Image style={{ width: 150, height: 150, borderRadius: 10 }}
                            source={require('../assets/images/books/Harper.png')}
                        />
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', paddingLeft: 10 }}>
                        <Text style={{ color: '#4B0082' }}>
                        Nelle Harper Lee foi uma escritora norte-americana que ganhou o Prêmio Pulitzer de Ficção em 1961 por *O Sol é Para Todos*.
                        </Text>
                    </View>
                </View>
            </View>

            <View style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#F5F5DC', margin: 10, borderRadius: 15, borderWidth: 2, borderColor: '#8B4513' }}>
                <View style={{ alignItems: 'center', justifyContent: 'center', padding: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#8B4513' }}>F. Scott Fitzgerald</Text>
                </View>
                <View style={{ flexDirection: 'row', padding: 10 }}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Image style={{ width: 150, height: 150, borderRadius: 10 }}
                            source={require('../assets/images/books/Scott.png')}
                        />
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', paddingLeft: 10 }}>
                        <Text style={{ color: '#4B0082' }}>
                        Francis Scott Key Fitzgerald, conhecido como F. Scott Fitzgerald, foi um romancista, ensaísta e contista americano. Famoso por seus romances que retratam a extravagância da Era do Jazz, ele popularizou o termo com sua coleção de contos *Tales of the Jazz Age*.
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
