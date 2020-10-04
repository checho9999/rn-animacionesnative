import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Animated } from 'react-native';

const Animacion4 = () => {

    //Definimos el state para la animacion...el Value(0) es el valor inicial de los grados
    const [animacion] = useState (new Animated.Value(0));

    //Animacion que se ejecuta el renderizar el componente
    useEffect(() => {
        Animated.timing(animacion, {
            toValue: 360, //grados de rotacion
            duration: 500, //el tiempo que tarda en rotar
            useNativeDriver: true
        }).start();     
    }, []) 

    //Definimos los rangos de la interpolacion
    const interpolacion = animacion.interpolate({
        inputRange: [ 0, 360 ],
        outputRange: [ '0deg', '360deg' ]
    })

    const estiloAnimacion = {
        transform: [ { rotate: interpolacion } ]
    }

    //en el style del Animated.View se le especifica que es lo que se quiere animar, para este ejemplo el rotate
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

export default Animacion4;
