import React, { useState } from 'react';
import { StyleSheet,ScrollView,Image, View, TextInput, Button, Dimensions,Text, Alert} from 'react-native';
import styles from '../style';
import axios from 'axios';
import { Base64 } from 'js-base64';
import { createStackNavigator } from '@react-navigation/stack';
import { AsyncStorage } from 'react-native';


const Stack = createStackNavigator();

  function Signup({ navigation }) {


  const [name,setName]=useState()
  const [syndicate_id,setSyndicate_id]=useState()
  const [password,setPassword]=useState('')
  const [phone,setPhone]=useState('')
  const [flag,setFlag]=useState(1)

  insertDB = async() =>{
    /*  if(name == "" || parseInt(name) !== NaN || phone=="" || syndicate_id=='' || password=='' || parseInt(phone)==NaN){
      console.log("fill",parseInt(phone));
     } */
    let encrypt=Base64.encode(password);
   let body={
       name,
      phone,
      syndicate_id,
      acceptance:false,
      password:encrypt
    };
     axios.post('http://192.168.1.36:8000/api/expert',
      body
      ,{
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((responseJson) => {
      setFlag(1);setName('');setPassword('');setSyndicate_id(''),setPhone('')
      Alert.alert(
        'الخبير',
        "يرجى الانتظار ريثما يتم تسجيلك. وشكرا",
        [
          { text: 'اوافق', onPress: () =>navigation.navigate('Map')}
        ]
      );
     }) .catch((error) => {
         console.error(error);
     });
    } 
    signinDB= () =>{
      let encrypt=Base64.encode(password);
      let body={
      syndicate_id,
      password:encrypt
    };
     axios.post('http://192.168.1.36:8000/api/expert/sign',
      body
      ,{
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(async (responseJson) => {
      setPassword('');
      if(responseJson.status==200){
        setSyndicate_id('');
        if(responseJson.data.data.acceptance==1){
             await AsyncStorage.setItem('syndicate_id', responseJson.data.data.syndicate_id);
            navigation.navigate('ExpertMap');
        }
        else{
          Alert.alert(
            'الخبير ',
            "لم يتحقق من تسجيلك بعد وشكرا"
            [
              { text: 'اوافق'}
            ]
          );
        }
        
      }
      else{
       
      }
     })  .catch((error) => {
         console.error(error);
     }); 
    }


     SignUpForm=()=>{
      return(
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
              />
          <Text style={styles.InputTitle}>
              رقم السري
            </Text>
            <TextInput
              style={styles.signup_text}
              onChangeText={e => setPassword(e)}
              value={password}
              secureTextEntry={true}
              borderWidth={2}
              borderColor={'#f2b305'}
              borderRightWidth={0}
              borderLeftWidth={0}
              borderTopWidth={0}
              />
       <Text
              style={styles.TextSignins}
              onPress={()=>this.insertDB()}
              color='#525050'>انشاء حساب</Text> 
        <Text 
            style={styles.TextSign}
            onPress={()=>setFlag(1)}
            color={'#f2b305'}>تسجيل دخول</Text>
  </View>
  </ScrollView>

  </>
      )
    }
     SignInForm=()=>{
      return(
        <>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1, height: 1, backgroundColor: '#525050',marginLeft:20}} />
          <View>
            <Image source={require('../image/logo.png')} style={{width: 100,height:100}}/>
          </View>
          <View style={{flex: 1, height: 1, backgroundColor: '#525050',marginRight:20}} />
        </View>
        <View style={styles.signup_inner_view}>
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
              />
          <Text style={styles.InputTitle}>
              رقم السري
            </Text>
            <TextInput
              style={styles.signup_text}
              onChangeText={e => setPassword(e)}
              value={password}
              secureTextEntry={true}
              borderWidth={2}
              borderColor={'#f2b305'}
              borderRightWidth={0}
              borderLeftWidth={0}
              borderTopWidth={0}
              />
           <Text
              style={styles.TextSignin}
              onPress={()=>this.signinDB()}
              color='#4d4d4d'>تسجيل دخول</Text> 
            <Text 
            style={styles.TextSign}
            onPress={()=>setFlag(0)}
            color={'#f2b305'}>  إنشاء حساب</Text>
          </View>
          </>

      )
    }
    return (
      <View style ={styles.signup_view}>
          {/* <Image source={require('../image/images.jpg')} style={styles.SignUpImage}/> */}
       {flag ==0 ? this.SignUpForm() : this.SignInForm()}
      </View>
    );
  }
  export default Signup;