import React from 'react';
import { StyleSheet, TouchableOpacity} from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
const Share = (props) => {

    const {onPress} = props; 

    return (

        <TouchableOpacity onPress={onPress} style={styles.Button}>
            <Entypo name="share" size={30} color="black" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  
    Button: {
        position: 'absolute',
        top: 0,
        right: 10,
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 50,
    },
   
  });

export default Share;