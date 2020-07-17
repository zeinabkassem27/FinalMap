import React, { useState ,Component} from "react";
import { View,Button,Text} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from "react-native-maps";
navigator.geolocation = require('@react-native-community/geolocation');
import {Linking} from 'react-native';
import MAPz from '../Component/MAPComponent';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style';
import { IconButton } from "react-native-paper";


export default class Map extends Component {
  constructor() { 
		super(); 
		this.state = { 
        latitude:null,
        longitude: null,
        coordinates: [],
        show:false,
        image:''
     }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
         this.setState({
          latitude:position.coords.latitude,
          longitude:position.coords.longitude
        }) 
      },
    )
   } 
   showform=()=>{
     this.setState({show:!this.state.show})
  }
  takePhoto=()=>{
    const options={
      noData:true,
    }
    ImagePicker.launchCamera(options,(response)=>{cd
      if(response.didCancel){
        console.log("image cancel");
      }
      else if(response.error){
        console.log("image error",response.error);
      }
      else{
        // const body=new FormData();
        console.log(response.uri)
        this.setState({image:response.uri})
        this.props.navigate.navigation('TestScreen')
      }
    })
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style ={styles.container}>
         <MAPz showform={this.showform}/>
      {!this.state.show?
      <View style={styles.ButtonViews}>
        <View>
        <Text style={styles.Text1}>من نحن</Text> 
          </View>
          <View>
          <Text onPress={()=> navigate('SignUp')} style={styles.Text2}>إذا كنت خبير</Text>
          </View>
        </View>
        :null}
        <View style={styles.ClientViewForm}>
          {this.state.show?
          <View  style={styles.MapViwClientt}>
            <Text style={styles.MapViwText}>زينب قاسم</Text>
            <Text style={styles.MapViwText}>العربية</Text>
            <Text style={styles.MapViwText1}>71120512</Text>
            <View style={styles.IconView}>
             <Icon
                color={'#525050'}
                size={30}
                name="camera"
                onPress={()=>this.takePhoto()}/>
              <Icon
                size={35}
                color={'#525050'}
                name="phone"
                onPress={()=>Linking.openURL(`tel:71120512`)}
                />
              <Icon
              size={30}
              color={'#525050'}
              name='close'  
              onPress={()=>this.setState({show:false})}
              />
              </View>
          </View>
          :null}
        </View>
      </View> 
    );
  }
}