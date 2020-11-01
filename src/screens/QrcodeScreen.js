import * as React from 'react';
import { Text, StyleSheet,Dimensions,Image } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';


const { width } = Dimensions.get('window')
const qrSize = width * 0.7



export default class QrcodeScreen extends React.Component {
    static navigationOptions = {
        //To hide the ActionBar/NavigationBar
        header: null,
    };

  state = {
    hasCameraPermission: null,
    scanned: false,
    camview:false
  };


  async componentDidMount() {
    console.log(this.props)
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  };

  render() {
    const { hasCameraPermission, scanned,camview } = this.state;

        

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
  
          //  style={StyleSheet.absoluteFillObject}
        
          <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
        style={[StyleSheet.absoluteFill, styles.container]}>
        <Text style={styles.description}>Scan </Text>
        <Image
          style={styles.qr}
          source={require('../..//assets/Qr.png')}
        />
        <Text
          onPress={() => this.props.navigation.pop()}
          style={styles.cancel}>
          Cancel
        </Text>
      
        </BarCodeScanner>
     
    );
  }

  handleBarCodeScanned = ({ type, data }) => {
    this.setState({ scanned: true });

    alert(`${data}`);
    this.props.navigation.navigate("Home");

  };

}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
      },
      qr: {
        marginTop: '20%',
        marginBottom: '20%',
        width: qrSize,
        height: qrSize,
      },
      description: {
        fontSize: width * 0.09,
        marginTop: '10%',
        textAlign: 'center',
        width: '70%',
        color: 'white',
      },
      cancel: {
        fontSize: width * 0.05,
        marginTop: '30%',
        textAlign: 'center',
        width: '70%',
        color: 'white',
      },


});


