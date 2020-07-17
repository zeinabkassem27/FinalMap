import * as React from 'react';
import { View, Text } from 'react-native';
import {NavigationContainer,DefaultTheme as NavigationDefaultTheme,} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcomes from './Pages/Welcome';
import MapPage from './Pages/MapPage';
import SignUp from './Pages/SignUp';
import ExpertMap from './Pages/ExpertMap';
import ExpertEdit from './Pages/ExpertEdit'
import TestScreen from './Pages/TestScreen';


const Stack = createStackNavigator();

function App({ navigation }) {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Welcomes} options={{
                headerShown: false
            }}/>
         <Stack.Screen name="Map" component={MapPage}  options={{
                headerShown: false
            }}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{
                headerShown: false
            }}/>
         <Stack.Screen name="ExpertMap" component={ExpertMap} options={{
                headerShown: false
            }}/>
         <Stack.Screen name="ExpertEdit" component={ExpertEdit} options={{ headerShown:false
            }}/>
         <Stack.Screen name="TestScreen" component={TestScreen} options={{ headerShown:false
            }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

export default App;
