import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
/* estamos trabalhando no react e trás a importação 
do pacote de estados da react, vai ajudar a controlar
a reatividade do projeto,deixando o projeto mais dinâmico*/

 /*tudo que for criar no react tem que exportar, criando uma função :*/
 export default function CalculatorScreen(){
    return( // a view é a segunda opção escrito react-native
        <View style={styles.container}>  
            <Text style={styles.result}>0</Text> 

            <View style={styles.row}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>*</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>/</Text>
                </TouchableOpacity>
            </View>
        </View>
    ); //tem que iniciar e finalizar com view(vai ter o mesmo efeito que as divs)
 
}

const styles = StyleSheet.create({ // stylesheet é o que aparece react native
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5"
    },

    result: {
        fontSize:40,
        marginBottom: 20,
        textAlign: "right",
        width: "90%",
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 5,
        elevation: 2
    },

    row: {
        flexDirection: "row",
        justifyContent: "center",
    },

    button: {
        width: 80,
        height:80,
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
        backgroundColor: "#2196F3",
        borderRadius: 10,
        elevation: 2
    },

    buttonText: {

    }

});