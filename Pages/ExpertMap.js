import React, { Component } from 'react';
import { StyleSheet, View,Image,Text, TouchableOpacity,AsyncStorage} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from '../style';
import MapComp from '../Component/MAPComponent'


export default class ExpertMap extends Component {
  constructor(props) { 
		super(props); 
		this.state = { 
     }
  }
  
   componentDidMount=async()=>{
    let a= await AsyncStorage.getItem('syndicate_id');
  }
  logout=async()=>{
    const { navigate } = this.props.navigation;
    await AsyncStorage.removeItem('syndicate_id')
    let a= await AsyncStorage.getItem('syndicate_id');
    navigate('Map')
  }
  render(){
    const { navigate } = this.props.navigation;
  return (
    <View>
      <MapComp/>
        <View style={styles.ExpertBar} > 
        <View>
          <Text  onPress={()=>this.logout()} style={styles.ExpertButton}>تسجيل خروج</Text>
          </View>
          <View >
            <Text style={styles.ExpertButtons} onPress={()=>navigate('ExpertEdit')}>تعديل</Text>
          </View>
        </View>
        </View>
  );
}
}