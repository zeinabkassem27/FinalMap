import React, { useState ,Component} from "react";
import { View,Button,Text} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from "react-native-maps";
navigator.geolocation = require('@react-native-community/geolocation');
import styles from '../style';


var mapStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        //"color": "#242f3e"
        "color": "#4c4d4f"
      }
    ]
  },
  { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#fcfcfc" }] },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#fcfcfc" }]
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#fcfcfc" }]
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#263c3f" }]
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#6b9a76" }]
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#38414e" }]
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#212a37" }]
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9ca5b3" }]
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#d48f22" }]
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#1f2835" }]
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [{ color: "#fcfcfc" }]
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#2f3948" }]
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [{ color: "#f5f1ed" }]
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#17263c" }]
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#515c6d" }]
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#17263c" }]
  }
];
export default class MAPComponent extends Component {
  constructor(props) { 
		super(props); 
		this.state = { 
        latitude:null,
        longitude: null,
        coordinates: [],
        show:false
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
  render() {
    return (
      <View style ={styles.container}>
       <MapView
        style={styles.map}
        customMapStyle={mapStyle}
        initialRegion={{
        //  latitude: this.state.latitude,
          //longitude: this.state.longitude,
          // latitude:33.8947,
          //longitude:35.51150,
          latitude:33.888630,
          longitude:35.495480,
          latitudeDelta: 0.0505,
          longitudeDelta: 0.0121,
        }}
        provider={PROVIDER_GOOGLE}>
      <Marker
        key={1}
        coordinate={{ latitude: 33.888630, longitude: 35.495480 }}
        title={"zeinab"}
        description={"description"}
        onPress={()=>this.props.showform()}
        pinColor='blue'
      />
      <Marker
        key={2}
        coordinate={{ latitude:33.8947, longitude: 35.51150 }}
        title={"Adel"}
        description={"descriptionAdel "}
        onPress={()=>this.props.showform()}
        />
      </MapView>
     
      </View> 
    );
  }
}