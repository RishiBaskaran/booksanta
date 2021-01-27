// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './Screens/WelcomeScreen'
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {AppDrawerNavigator} from './Components/AppDrawerNavigator'
import {AppTabNavigator} from './Components/AppTabNavigator'
// export default class App extends React.Component {

//   render()
// {

//  return (
//     <View style={styles.container}>
//     <AppContainer/>
//     </View>
//   );
//  }
// }

export default function App()
{
  return(
    <AppContainer/>
  );
}


const SwitchNavigator = createSwitchNavigator({
  WelcomeScreen : {screen : WelcomeScreen},
  Drawer : {screen : AppDrawerNavigator},
                 
})

const AppContainer = createAppContainer(SwitchNavigator)
