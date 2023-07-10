import React from "react";
import {  View } from "react-native";
import { StyleSheet, Image, Dimensions } from "react-native";
import topo from "../../../assets/topo.png";
import logo from "../../../assets/logo.png"
import Texto from "../../components/Texto";
import Topo from "./components/Topo";



export default function Cesta() {
    return <>
       <Topo/>
        <View style={estilos.cesta}>
            <Texto style={estilos.nome}>Cesta de Verduras </Texto>
            <View style={estilos.fazenda}>
                <Image style={estilos.imagemFazenda} source={logo}/>
                <Texto style={estilos.nomeFazenda}>Jenny Jack Farm </Texto>
            </View>
            <Texto style={estilos.descricao}>uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha </Texto>
            <Texto style={estilos.preco}>R$ 40,00</Texto>
        </View>
    </>
}

const estilos = StyleSheet.create({
    
    nome: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontWeight: "bold",
          
    },
    cesta: {//estilo para view
        paddingVertical: 8,
        paddingHorizontal: 16,
    }
    ,fazenda:{//view da fazenda
        flexDirection:"row",
        paddingVertical:12,


    }
    , nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft:12,
        
    },
    imagemFazenda:{
        width: 32,
        height:32,
    }
    , descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    }
    , preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,

    }

});