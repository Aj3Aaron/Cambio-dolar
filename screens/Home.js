import { StyleSheet, View , SafeAreaView, ToastAndroid, Share } from 'react-native';
import Boton from '../components/Boton';
import React, { useState, useEffect } from 'react';import consultaDolar from 'consulta-dolar-venezuela';
import PrincipalPrice from '../components/PrincipalPrice';
import * as Animatable from 'react-native-animatable';
import ShareApp from '../components/ShareApp';
import { captureScreen } from "react-native-view-shot";


const Home = () => {
  
  const [dolarValue, setDolarValue] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [events, setEvents] = useState('auto');
  

  const init = async () => {
      setEvents('none');
      setIsLoading(true);
      consultaDolar.getMonitor("null")
        .then(result => {
            setIsLoading(false);
            setEvents('auto');
            setDolarValue(result);
            ToastAndroid.show('Actualizado con exito', ToastAndroid.SHORT);
        })
        .catch(error => {
          console.error(error);
        });
   
  }

  const share = async () => {

    captureScreen({
      format: "jpg",
      quality: 0.8
    })
    .then(uri => console.log(uri)
    //   {
    //   Share.share({
    //     url: uri,
    //   })
    //   .then(result => console.log(result))
    //   .catch(error => console.log(error));
    // })
    // .catch(error => console.error("Oops, falló la captura", error));
 
  )}
  useEffect(() => {
    init();
  }, []);
    
    return (
      <SafeAreaView pointerEvents={events} style={styles.container}>
        
        {isLoading && 
          <View style={styles.spinnerContainer}>
              {/* <ActivityIndicator size='large' style={styles.spinner} /> */}
              <Animatable.View 
                style={styles.spinner}
                animation={{
                  0: { rotate: '0deg' },
                  0.5: { rotate: '180deg' },
                  1: { rotate: '360deg' },
                }}
                iterationCount="infinite"
                duration={1000}
              />
          </View>
        }
        
        {dolarValue && (
          <>
            <PrincipalPrice 
              imgUrl={ require ('../assets/enparalelo.png')}
              tasa='Paralelo'
              tasaValue={dolarValue.enparalelovzla.price}
              cambioTime={dolarValue.enparalelovzla.lastUpdate}
              cambioPercentage={dolarValue.enparalelovzla.change}
            />

            <PrincipalPrice
              imgUrl={ require ('../assets/BCV.png')}
              tasa='BCV'
              tasaValue={dolarValue.bcv.price}
              cambioTime={dolarValue.bcv.lastUpdate}
              cambioPercentage={dolarValue.bcv.change}
            />

          </>
        )}

        <Boton
          onPress={() => {init()}}
        />

        <ShareApp
          onPress={() => {share()}}
        />


      </SafeAreaView>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', //191414
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },

  spinnerContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  spinner: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 5,
    borderColor: '#0000ff',
    },
});


export default Home;