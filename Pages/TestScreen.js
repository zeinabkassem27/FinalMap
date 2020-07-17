import React, { useState, Component } from "react";
import { View, Button, Text, Image, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
const TestScreen = ({ route, navigation }) => {

    const { image } = route.params;
    // console.log(image)
    return (
        <>
        <View style={styles.titleBars}>

        </View>

        <View style={styles.container}>

            <ImageBackground source={{uri:`${image}`}} style={styles.image}>
                <Text style={styles.header}>Contact Us</Text>
            </ImageBackground>

        </View>
            <View style={styles.inputContainer}>
                <TextInput
                    label="Your Message"
                    style={styles.textInput}
                    placeholder="Your Message"
                />
            </View>
        <View style={styles.inputContainer}>
            <TouchableOpacity style={styles.saveButton}>
                <Text style={styles.saveButtonText}>Submit</Text>
            </TouchableOpacity>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 4,
      paddingTop: 45,
    },
    image: {
      resizeMode: "cover",
      height:250
    },
    header: {
      fontSize: 25,
      textAlign: 'center',
      margin: 10,
      fontWeight: 'bold',
    },
    inputContainer: {
      paddingTop: 15,
      flex:2
    },
    textInput: {
      borderColor: '#CCCCCC',
      borderTopWidth: 1,
      borderBottomWidth: 1,
      height: 150,
      fontSize: 25,
      paddingLeft: 20,
      paddingRight: 20,
    },
    saveButton: {
      borderWidth: 1,
      borderColor: '#007BFF',
      backgroundColor: '#007BFF',
      padding: 15,
      margin: 5,
    },
    saveButtonText: {
      color: '#FFFFFF',
      fontSize: 20,
      textAlign: 'center',
    },
    titleBars: {
      marginTop: 24,
      marginHorizontal: 16,
    },
  });

export default TestScreen;