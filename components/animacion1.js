import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Animated } from 'react-native';

const Animacion1 = () => {

    //Definimos el state para la animacion...el Value(0) es el valor inicial de la opacidad
    const [animacion] = useState (new Animated.Value(0));

    //Animacion que se ejecuta el renderizar el componente
    useEffect(() => {
        Animated.timing(animacion, {
            toValue: 1, //Al ser mayor al value inicial va de transparente hacia opaco...por ende, si el valor fuera menor iria de opaco a transparente
            duration: 500, //el tiempo que tarda en ir desde la escala inicial hasta la escala final
            useNativeDriver: true
        }).start();        
    }, []) 

    //en el style del Animated.View se le especifica que es lo que se quiere animar, para este ejemplo el opacity
    return (
        <Animated.View style={ { opacity: animacion } } >
            <Text style={styles.texto}>Animacion 01</Text>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    texto: {
        fontSize: 30,
        textAlign: 'center'
    }
});

export default Animacion1;
