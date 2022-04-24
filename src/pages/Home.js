import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Home({ navigation }) {



    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.opcao}
                    onPress={() => { navigation.navigate("Cidade", { cidade: "4314100" }) }}
                >Passo Fundo
                </Text>
                <Text style={styles.opcao} onPress={() => { navigation.navigate("Cidade", { cidade: "4311809" }) }}>Marau</Text>
                <Text style={styles.opcao} onPress={() => { navigation.navigate("Cidade", { cidade: "4304705" }) }}>Carazinho</Text>
                <Text style={styles.opcao} onPress={() => { navigation.navigate("Cidade", { cidade: "4320800" }) }}>Soledade</Text>
                <Text style={styles.opcao} onPress={() => { navigation.navigate("Cidade", { cidade: "4307005" }) }}>Erechim</Text>
            </View>
            <StatusBar style="auto" />
            <View style={styles.botaoSobre}>
                <Button title="Sobre" onPress={() => { navigation.navigate("Sobre") }}></Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    botaoSobre: {
        position: "absolute",
        top: 10,
        right: 10
    },
    card: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgb(52, 199, 89)",
        padding: 5,
        width: "50%",
        borderRadius: 10,
        marginBottom: 300
    },
    opcao: {
        width: "95%",
        textAlign: "center",
        color: "#ffffff",
        fontSize: 15,
        fontWeight: "600",
        padding: 10,
        margin: 5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#ffffff"
    }
});
