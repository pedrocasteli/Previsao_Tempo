import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useState, useLayoutEffect } from 'react'
import axios from 'axios'

export default function Cidade(props) {

    const navigation = props.navigation
    const dataAtual = "24/04/2022"

    const [cidade, setCidade] = useState(null)
    const [manha, setManha] = useState(null)
    const [tarde, setTarde] = useState(null)
    const [noite, setNoite] = useState(null)

    const funcao = async () => {
        try {
            let codeCity = props.route.params.cidade
            let request = await axios.get(`https://apiprevmet3.inmet.gov.br/previsao/${codeCity}`)
            setCidade(request.data[codeCity][dataAtual].manha.entidade)
            setManha(`${request.data[codeCity][dataAtual].manha.resumo}.\n${request.data[codeCity][dataAtual].manha.temp_max} MAX / ${request.data[codeCity][dataAtual].manha.temp_min} MIN`);
            setTarde(`${request.data[codeCity][dataAtual].tarde.resumo}.\n${request.data[codeCity][dataAtual].tarde.temp_max} MAX / ${request.data[codeCity][dataAtual].tarde.temp_min} MIN`);
            setNoite(`${request.data[codeCity][dataAtual].noite.resumo}.\n${request.data[codeCity][dataAtual].noite.temp_max} MAX / ${request.data[codeCity][dataAtual].noite.temp_min} MIN`);

        } catch (error) {
            console.log(error)
        }
    }

    useLayoutEffect(() => {
        funcao()
    }, [])


    return (
        <View style={styles.container}>
            <View style={styles.previsao}>
                <Text style={styles.titulo}>Previsão para {cidade}</Text>
                <Text style={styles.texto}>Manhã: {manha}</Text>
                <Text style={styles.texto}>Tarde: {tarde}</Text>
                <Text style={styles.texto}>Noite: {noite}</Text>
            </View>
            <View style={styles.botaoSobre}>
                <Button title="Sobre" onPress={() => { navigation.navigate("Sobre") }}></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    botaoSobre: {
        position: "absolute",
        top: 10,
        right: 10
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    previsao: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        width: "80%",
        padding: 10,
        borderRadius: 5,
        backgroundColor: "rgb(255, 149,0)"
    },
    titulo: {
        color: "#ffffff",
        fontWeight: "bold"
    },
    texto: {
        padding: 5,
        color: "#ffffff",
        marginBottom: 5,
        marginTop: 5,
        borderWidth: 1,
        borderColor: "#ffffff",
        borderRadius: 5
    }
})