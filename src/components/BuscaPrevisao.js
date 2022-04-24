import axios from 'axios'
import { StyleSheet, Text, View } from 'react-native';

export default function BuscaPrevisao() {


    async function main() {

        try {
            let codeCity = "4300059"
            let request = await axios.get(`https://apiprevmet3.inmet.gov.br/previsao/${codeCity}`)
            console.log(request.data)

        } catch (error) {
            console.log(error)
        }

    }
    main();



    return (<View></View>)
}