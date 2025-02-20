import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
/* estamos trabalhando no react e trás a importação 
do pacote de estados da react, vai ajudar a controlar
a reatividade do projeto,deixando o projeto mais dinâmico*/

 /*tudo que for criar no react tem que exportar, criando uma função :*/
 export default function CalculatorScreen(){
// precisamos criar a lógica para os botões funcionarem
    //state deixa a variavel preparada para receber um valor
    const [input, setInput] = useState("");// variável, e depois uma função
    const [result, setResult] = useState(""); // set é uma função que deixa pronta para receber um valor

    const handlePress = (value: string) => { //value string serve para dizer como ele vai receber o valor
        if(value === "="){ //=== é identico
            try{ // se a ação for igual a =, ele vai tentar uma ação
               const calculatedResult = eval(input).toString(); //eval interpreta a string e faz o cálculo
               //criamos variavel calculated result que vai passar pelo eval e o to string que vai converter o resultado para uma string
               setResult(calculatedResult); // atribuimos o valor do resultado com o set result
               setInput(calculatedResult); // serve para pegar o resultado e fazer outra operação se necessário
            } catch(error){ // caso a ação tiver um erro ele vai entrar no cath e vai retornar um erro
                setResult("error");
            }
        } else if(value === "C"){
            setInput(""); //vai transformar tudo que estiver nos sets em "nada", deixando vazio
            setResult("");
        } else { // prev é o valor anterior
            setInput((prev)=> (result && prev === result ? result + value : prev + value))// o if, seria o () e o else o :
            setResult("");
        }   
    }

    return( // a view é a segunda opção escrito react-native
        <View style={styles.container}>  
            <Text style={styles.result}>{ result || input || "0"}</Text> 
            {/* //vai aparecer result ou input ou zero */}

            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={()=>handlePress("+")}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>handlePress("-")}>
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>handlePress("*")}>
                    <Text style={styles.buttonText}>*</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>handlePress("/")}>
                    <Text style={styles.buttonText}>/</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={()=>handlePress("9")}>
                    <Text style={styles.buttonText}>9</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>handlePress("8")}>
                    <Text style={styles.buttonText}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>handlePress("7")}>
                    <Text style={styles.buttonText}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>handlePress("6")}>
                    <Text style={styles.buttonText}>6</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={()=>handlePress("5")}>
                    <Text style={styles.buttonText}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>handlePress("4")}>
                    <Text style={styles.buttonText}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>handlePress("3")}>
                    <Text style={styles.buttonText}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>handlePress("2")}>
                    <Text style={styles.buttonText}>2</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={()=>handlePress("1")}>
                    <Text style={styles.buttonText}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>handlePress("0")}>
                    <Text style={styles.buttonText}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>handlePress("C")}>
                    <Text style={styles.buttonText}>C</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>handlePress("=")}>
                    <Text style={styles.buttonText}>=</Text>
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
        fontSize: 30,
        color: "#fff"
    }

});