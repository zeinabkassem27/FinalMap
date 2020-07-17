import React, { Component } from 'react';
import { StyleSheet, View, Button,ImageBackground,Image,Text, TouchableOpacity,Dimensions} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from '../style';


const Stack = createStackNavigator();


function Welcome({ navigation }) {
  
  return (
    <>
    <View style={styles.WelcomeButton}>
       <ImageBackground source={require('../image/back2.jpg')} 
        style={styles.image}>
       </ImageBackground>
    </View>
    <View style={styles.ViewLogo}>
      <Image source={require('../image/logo.png')}
      style={styles.logoImage}/>
      </View>

       <View style={styles.ViewButton}>
        <TouchableOpacity>
           <View>
             <Text onPress={()=>navigation.navigate('Map')} style={styles.WelcomeButtonz}>الدخول</Text>
           </View>
       </TouchableOpacity>
       </View> 
    </>
  );
}
export default Welcome;