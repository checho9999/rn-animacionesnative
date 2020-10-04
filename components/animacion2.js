import React, { useState, useEffect } from 'react';
import { StyleSheet, Animated } from 'react-native';

const Animacion2 = () => {

    //Definimos el state para la animacion...el Value(0) es el valor inicial de la escala
    const [animacion] = useState (new Animated.Value(0));

    //Animacion que se ejecuta el renderizar el componente
    useEffect(() => {
        Animated.timing(animacion, {
            toValue: 450, //Al ser mayor al value inicial la caja se expande...por ende, si el valor fuera menor se achicaria
            duration: 1000, //el tiempo que tarda en ir desde la escala inicial hasta la escala final
            useNativeDriver: false
        }).start();        
    }, []) 

    //en el style del Animated.View se le especifica que es lo que se quiere animar, para este ejemplo el width y height
    return (
        <Animated.View style={ [ styles.caja, { width: animacion, height: animacion } ] } >
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    caja: {
        width: 100,
        height: 100,
        backgroundColor: 'cornflowerblue'
    }
});

export default Animacion2;