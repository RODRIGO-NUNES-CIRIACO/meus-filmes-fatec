import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    FlatList
} from 'react-native'

export default function Home() {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Meus Filmes</Text>  
            <Text style={styles.subtitulo}>Olá Rodrigo, boa noite!</Text>

            <TextInput style={styles.campo} placeholder="Nome do filme"/>
            
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Adicionar</Text>
            </TouchableOpacity>

        </View>
    )
}
//obs shift + alt + seta para baixdo duplica linha

//Adicionar os estilos

//Criando os estilos
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#30478C',
        paddingVertical: 70,
        paddingHorizontal: 20

    },

    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#FFD700'
    },

    subtitulo: {
        color: '#FFF',
        fontoSize: 15
    },

    campo: {
        backgroundColor: '#1F1E25',
        color: '#FFF',
        fontoSize: 18,
        marginTop: 30,
        borderRadius: 7,
        padding: 15
    },

    greetins:{
        color: '#FFF'
    },

    button: {
        backgroundColor: '#A370F7',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20
    },

    buttonText: {
        color: '#FFF',
        fontSize: 17,
        fontWeight: 'bold',
    },

    buttonFilme: {
        backgroundColor: '#1F1E25',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginVertical: 15

    },

    textFilme: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold',
    }


}); //fim fos estilos


