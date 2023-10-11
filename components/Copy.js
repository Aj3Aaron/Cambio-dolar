import React, { useState } from 'react';
import { ToastAndroid } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';


const Copy = (props) => {
    const {value_to_copy} = props;
    const [iconName, setIconName] = useState('copy');
    const [color, setColor] = useState('black');
    
    const copyToClipboard = async () => {
        Clipboard.setStringAsync(value_to_copy);
        ToastAndroid.show('Copiado al portapales', ToastAndroid.SHORT);
        setIconName('check'); // Cambia el nombre del icono a 'check'
        setColor('green');
        await sleep(1000);
        setIconName('copy');
        setColor('black');
      };

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

    return (
        <FontAwesome5 onPress={copyToClipboard} name={iconName} size={24} color={color} />
    );
}

export default Copy;