import * as React from 'react';
import { Text, View, StyleSheet,Dimensions,Image} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

//Declaration des constantes
const { width } = Dimensions.get('window')
const qrSize = width * 0.5


const HomeScreen = ({navigation}) => {
    return (  
      <View style ={styles.container}>
          <Text style = {styles.textscan}>Scanner Qr Code</Text>
          <Image
          style={styles.qr}
          source={require('../..//assets/imageQr.png')}
          />  
          <View style = {styles.buttonscan}>

            <Button  buttonStyle={{backgroundColor: '#2F95D6',borderRadius:15}}  raised   icon={<Icon style={{ marginRight: 10 }} name="qrcode" size={20} color="white"/>}
             title={'Tap to Scan '} onPress={() => navigation.navigate('Qrcode')} />
         </View>
      </View>
    );
};

//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  buttonscan: {
    marginTop:50,
    width:qrSize,
  },
  textscan:{
    fontSize:20,
    marginTop:60,
    fontWeight: 'bold',
  },    
  qr:{
    width: qrSize,
    height: qrSize,
  }
});

export default HomeScreen;





