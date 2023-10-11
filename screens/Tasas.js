import { StyleSheet, Text, View, ImageBackground, Button, SafeAreaView, Image, ToastAndroid } from 'react-native';
import Boton from '../components/Boton';
import TasaBanco from '../components/TasaBanco';

const Tasas = ({navigation}) => {

    return (
      <SafeAreaView style={styles.container}>
        <TasaBanco bank="Banco de Venezuela" value='0000' />
      </SafeAreaView>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', //191414
    paddingHorizontal: 15
    // alignItems: 'center',
    // justifyContent: 'center',
  },

});


export default Tasas;