import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Animated } from 'react-native';

const Animacion7 = () => {

    //Definimos el state para la animacion1...el Value(0) es el valor inicial de la posicion
    const [animacion1] = useState (new Animated.Value(0));
    //Definimos el state para la animacion2...el Value(0) es el valor inicial de la escala
    const [animacion2] = useState (new Animated.Value(1));

    //Animacion que se ejecuta el renderizar el componente
    useEffect(() => {
        Animated.sequence([
            Animated.timing(animacion1, {
                toValue: 300, //translateY => 0 a 300
                duration: 1000, //el tiempo que tarda en ir desde la posicion inicial hasta la final
                useNativeDriver: true
            }),
            Animated.spring(animacion2, {
                toValue: 10, //scale => 1 a 10
                useNativeDriver: true
            }),
            Animated.spring(animacion2, {
                toValue: 1, //scale => 10 a 1
                useNativeDriver: true
            }),
            Animated.timing(animacion1, {
                toValue: 600, //translateY => 300 a 600
                duration: 1000, //el tiempo que tarda en ir desde la posicion inicial hasta la final
                useNativeDriver: true
            })       
        ]).start();  
    }, []) 

    const estiloAnimacion = {
        transform: [ { translateY: animacion1 }, { scale: animacion2 } ]
    }

    //en el style del Animated.View se le especifica que es lo que se quiere animar, para este ejemplo el translateX y translateY
    return (
        <View>
            <Animated.View style={ [ styles.caja, estiloAnimacion ] } >                
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    caja: {
        width: 100,
        height: 100,
        backgroundColor: 'cornflowerblue'
    }
});

export default Animacion7;
