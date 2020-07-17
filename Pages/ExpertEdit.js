import React, { Component, useEffect, useState  } from 'react';
import { View,TextInput,Image,Text, Alert,AsyncStorage,ScrollView} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from '../style';
import axios from 'axios';

const Stack = createStackNavigator();
function ExpertEdit({ navigation }) {

  const [name,setName]=useState('')
  const [syndicate_id,setSyndicate_id]=useState('')
  const [password,setPassword]=useState('')
  const [phone,setPhone]=useState('')
  
getData=async()=>{
  try{
    let id= await AsyncStorage.getItem('syndicate_id');
    axios.get(`http://192.168.1.36:8000/api/expert/${id}`)
  .then((responseJson) => {
    setName(responseJson.data.data.name);
    setSyndicate_id(responseJson.data.data.syndicate_id);
    setPhone(responseJson.data.data.phone);
   }) .catch((error) => {
       console.error(error);
   });
  }catch(err){
    console.log("try_catch",err)
}
}
  updateDB=async()=>{
    let body={name,phone};
    let id= await AsyncStorage.getItem('syndicate_id');
    axios.put(`http://192.168.1.36:8000/api/expert/${id}`,
     body
     ,{
   headers: {
     Accept: 'application/json',
     'Content-Type': 'application/json',
   },
 })
   .then((responseJson) => {
     Alert.alert(
       'الخبير',
       "تم التعديل بنجاح, وشكرا",
       [
         { text: 'اوافق', onPress: () =>(navigation.push('ExpertMap'))}
       ]
     );
    }) .catch((error) => {
        console.error(error);
    });
  }
  useEffect(async() => {
   this.getData();
  }, []);
  return (
    <>
<View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1, height: 1, backgroundColor: '#525050',marginLeft:20}} />
          <View>
            <Image source={require('../image/logo.png')} style={{width: 100,height:100}}/>
          </View>
          <View style={{flex: 1, height: 1, backgroundColor: '#525050',marginRight:20}} />
        </View>
        <ScrollView>
      <View style={styles.signup_inner_view}>
        <Text style={styles.InputTitle}>
        الاسم الكامل
            </Text>
      <TextInput
        style={styles.signup_text}
        value={name}
        keyboardType={'default'}
        onChangeText={e => setName(e)}
        borderWidth={2}
        borderColor={'#f2b305'}
        borderRightWidth={0}
        borderLeftWidth={0}
        borderTopWidth={0}
          />
          <Text style={styles.InputTitle}>
          رقم الهاتف
          </Text>
      <TextInput
        style={styles.signup_text}
        onChangeText={e => setPhone(e)}
        keyboardType={"numeric"}
        value={phone}
        borderWidth={2}
        borderColor={'#f2b305'}
        borderRightWidth={0}
        borderLeftWidth={0}
        borderTopWidth={0}
        maxLength={8}
        />
   <Text style={styles.InputTitle}>
              رقم الانتساب
            </Text>
              <TextInput
              style={styles.signup_text}
              onChangeText={e => setSyndicate_id(e)}
              value={syndicate_id}
              borderWidth={2}
              borderColor={'#f2b305'}
              borderRightWidth={0}
              borderLeftWidth={0}
              borderTopWidth={0}
              underlineColorAndroid={'white'}
              editable={false}
              />
    <View style={styles.ExpertEditView}>
    <View style={styles.ExperEditB1}>
      <Text
    style={styles.ExpertEditV2Text}
      onPress={()=> 
        navigation.push('ExpertMap')}
      >  إلغاء</Text>
      </View>
      <View style={styles.ExpertEditV1}>
     <Text
     style={styles.ExpertEditV1Text}
      onPress={()=>this.updateDB()}
      >تعديل</Text>
      </View>
    
      </View>
      </View>
  </ScrollView>
  </>
      )
}
export default ExpertEdit;