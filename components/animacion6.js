import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Animated } from 'react-native';

const Animacion6 = () => {

    //Definimos el state para la animacion1...el Value(0) es el valor inicial de la posicion
    const [animacion1] = useState (new Animated.Value(0));
    //Definimos el state para la animacion2...el Value(-50) es el valor inicial de la posicion
    const [animacion2] = useState (new Animated.Value(-50));

    //Animacion que se ejecuta el renderizar el componente
    useEffect(() => {
        Animated.loop(
        Animated.sequence([
            Animated.timing(animacion2, {
                toValue: -30, //translateX => de -50(la primera vez) a -30
                duration: 500, //el tiempo que tarda en ir desde la posicion inicial hasta la final
                useNativeDriver: true
            }),
            Animated.timing(animacion1, {
                toValue: 60, //translateY => 0 a 60
                duration: 500, //el tiempo que tarda en ir desde la posicion inicial hasta la final
                useNativeDriver: true
            }),
            Animated.timing(animacion2, {
                toValue: 30, //translateX => 60 a 30
                duration: 500, //el tiempo que tarda en ir desde la posicion inicial hasta la final
                useNativeDriver: true
            }),
            Animated.timing(animacion1, {
                toValue: 0, //translateY => 30 a 0
                duration: 500, //el tiempo que tarda en ir desde la posicion inicial hasta la final
                useNativeDriver: true
            }),
            Animated.timing(animacion2, {
                toValue: -30, //translateX => 0 a -30
                duration: 500, //el tiempo que tarda en ir desde la posicion inicial hasta la final
                useNativeDriver: true
            })        
        ])
        ).start();     
    }, []) 

    const estiloAnimacion = {
        transform: [ { translateY: animacion1 }, { translateX: animacion2 } ]
    }

    //en el style del Animated.View se le especifica que es lo que se quiere animar, para este ejemplo el translateX y translateY
    return (
        <View style={ { alignItems: 'center' }}>
            <Animated.View style={ [ styles.caja, estiloAnimacion ] } >                
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    caja: {
        width: 10,
        height: 10,
        backgroundColor: 'cornflowerblue'
    }
});

export default Animacion6;
