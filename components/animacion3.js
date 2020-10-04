import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Animated } from 'react-native';

const Animacion3 = () => {

    //Definimos el state para la animacion...el Value(14) es el valor inicial de la fuente
    const [animacion] = useState (new Animated.Value(14));

    //Animacion que se ejecuta el renderizar el componente
    useEffect(() => {
        Animated.timing(animacion, {
            toValue: 40, //Al ser mayor al value inicial de la fuente se agranda...por ende, si el valor fuera menor se achicaria
            duration: 500, //el tiempo que tarda en ir desde la escala inicial hasta la escala final
            useNativeDriver: false
        }).start();        
    }, []) 

    //en el style del Animated.Text se le especifica que es lo que se quiere animar, para este ejemplo el fontSize
    return (
        <View>
            <Animated.Text style={ [ styles.texto, { fontSize: animacion } ] } >Animacion 03</Animated.Text>
        </View>
    );
};

const styles = StyleSheet.create({
    texto: {
        fontSize: 30,
        textAlign: 'center'
    }
});

export default Animacion3;
