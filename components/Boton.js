import React from 'react';
import { StyleSheet, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
const Boton = (props) => {

    const {onPress} = props; 

    return (

        <TouchableOpacity onPress={onPress} style={styles.Button}>
            <Ionicons name="reload" size={30} color="black" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  
    Button: {
        position: 'absolute',
        top: 0,
        right: 45,
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 50,
    },
    ButtonText:{
        textAlign: 'center',
        color: '#f9f9f9',
        fontWeight: 'bold',
        fontSize: 20
    }
  });

export default Boton;