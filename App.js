import * as React from 'react';
//librerias de navigacion  
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import login from './screens/login'
import registro from '..screens/registro'
import publicar from '../screens/publicar'
import noticias from '../screens/noticias'

const stack = createNativeStackNavigator();

 function App () {
  return(
    <NavigationContainer>
    <Stack.Navigation name="login" component={login}>
    <Stack.Navigator name="registro" component={registro}/>
    <Stack.Navigator name="publicar" component={publicar}/>
    <Stack.Navigator name="noticias" component={noticias}/>
    </Stack.Navigation>
  </NavigationContainer>
  );
}
export default App;
