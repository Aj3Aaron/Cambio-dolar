import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Button, SafeAreaView, Image } from 'react-native';


const TasaBanco = (props) => {

    const {bank, value} = props; 

    return (

        <View>
            <Text style={styles.text}>{bank}</Text>
            <Text style={styles.text}>{value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  
    text: {

    }
   
  });

export default TasaBanco;