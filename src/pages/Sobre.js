import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Sobre() {
    return (
        <View style={styles.container}>
            <View style={styles.texto}>
                <Text style={styles.titulo}>Pedro Marchetti Casteli</Text>
                <Text style={styles.sobre}>Nascido e criado em São Domingos do Sul/RS, semopre gostei de tecnologia. Ingressei
                    na faculdade pela 1ª vez em 2016, no curso de Tecnoliga em Sistemas para a Internet no IFSUL de Passo Fundo.
                    Depois, comecei Ciência da Computação na mesma instituição, mas acabei migrando para a IMED por conta
                    dos horários. Desde 11/2021 trabalho no setor de TI da Comercial Zaffari, em Passo Fundo.
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto: {
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        width: "80%",
        marginBottom: 400,
    },
    titulo: {
        fontWeight: "bold",
        margin: 20
    },
    sobre: {
        textAlign: "justify"
    }
})