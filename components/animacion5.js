import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback, Animated } from 'react-native';

const Animacion5 = () => {

    //Definimos el state para la animacion...el Value(1) es el valor inicial de la escala
    const [animacionboton] = useState (new Animated.Value(1));

    //Animacion que se ejecuta al presionar el boton
    const presionarBtn = () => {
        Animated.spring(animacionboton, {
            toValue: 0.8, //Al ser menor al value inicial el boton se achica...por ende, si el valor fuera mayor se agrandaria
            useNativeDriver: true
        }).start();        
    }

    //Animacion que se ejecuta al soltar el boton    
    const soltarBtn = () => {
        Animated.spring(animacionboton, {
            toValue: 1, //vuelve al estado de escala anterior(el cual definimos como Value(1) anteriormente)
            friction: 4, //a menor valor mayor es el efecto de rebote de la animacion
            tension: 30, //a menor numero mas suave es el movimiento
            useNativeDriver: true            
        }).start();          
    }

    const estiloAnimacion = {
        transform: [ { scale: animacionboton } ]
    }

    //en el style del Animated.View se le especifica que es lo que se quiere animar, para este ejemplo el scale
    return (
        <View style={styles.contenedor}>
            <TouchableWithoutFeedback
                onPressIn={ () => presionarBtn() }
                onPressOut={ () => soltarBtn() }
            >
                <Animated.View style={ [ styles.btn, estiloAnimacion ] }>
                    <Text style={styles.texto}>Iniciar Sesion</Text>                
                </Animated.View>
            </TouchableWithoutFeedback>
        </View>
    );
};

const styles = StyleSheet.create({
    contenedor: {
        alignItems: 'center'
    },
    btn: {
        width: 280,
        height: 80,
        backgroundColor: 'cornflowerblue',
        justifyContent: 'center',
        alignItems: 'center'       
    },  
    texto: {
        color: '#FFF',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 28
    }
});

export default Animacion5;