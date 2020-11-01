import * as React from 'react';
import { Image,View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import QrcodeScreen from './src/screens/QrcodeScreen';


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Qrcode:QrcodeScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'DDB QrsCode',
      headerTintColor: '#ffffff',
      headerStyle: {
        backgroundColor: '#2F95D6',
        borderBottomColor: '#ffffff',
        borderBottomWidth: 0,
      },
      headerRight: (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',paddingRight:10 }}>
             <Image style={{width: 35, height:35}} source={require('./assets/ex.png')}/>
      </View>
    ),
      headerTitleStyle: {
        fontSize: 18,
      },
    }
  }
);

export default createAppContainer(navigator);
