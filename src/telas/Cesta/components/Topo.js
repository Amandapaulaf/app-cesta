import React from "react";
import Texto from "../../../components/Texto";
import { Image, StyleSheet ,Dimensions} from "react-native";
import topo from "../../../../assets/topo.png";

export default function Topo() {
   // const tamanho = Dimensions.get('screen').width;
    return <>
        <Image source={topo} style={estilos.topo} />
        <Texto style={estilos.titulo}> detalhes da cesta</Texto>
    </>
}

const estilos= StyleSheet.create({
    topo: {
        width: "100%",
        height: (578 / 768)*500 ,
    },
    titulo: {
        width: "100%",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        position: "absolute",
        fontWeight: "bold",
        padding: 16,
        color: "white",
        padding: 16,
    },
});