import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, ImageBackground, TextInput, TouchableOpacity, Image } from 'react-native';


import logodrink from '../assets/logodrink.png'
import bg from '../assets/bg.png';



export default function Reminder({navigation}) {
  const [courseGoals, setCourseGoals] = useState([]);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function addGoalHandler() {
    // You can handle this function as needed.
  }

  return (
    <ImageBackground
      source={require('../assets/superlight.jpg')}
      style={styles.container}
    >
      <View style={styles.overlay}>
        <View style={styles.headerContainer}>
          <Image
            source={logodrink}
            style={styles.logo}
          />
          <Text style={styles.headerText}>ThirstyApp</Text>
          <Text style={styles.headerMotto}>Let's keep you hydrated throughout the day</Text>
        </View>

        


        <TouchableOpacity
              style={styles.addButton}
              onPress={() => navigation.navigate('Reminder')}
            >
              <Text style={styles.addButtonLabel}>Get Started</Text>
              
            </TouchableOpacity>
          </View>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  logo: {
    height: 170,
    width: 170,
  },

  headerText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
  },

  headerMotto: {
    fontSize: 18,
    color: 'white',
    marginTop: 20,
  },

  inputContainer: {
    alignItems: 'center',
    bottom: 40,
    marginBottom: 30,
    paddingHorizontal: 50,
    paddingVertical: 10,
    

  },
  inputBox: {
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 6,
    
    
  },
  textInput: {
    
    color: 'white',
    paddingHorizontal: 50,
    paddingVertical: 10,
  },
   //get started button
  addButton: {
    backgroundColor: '#A3D7E7', 
    
    paddingVertical: 23,
    paddingHorizontal: 5,
    borderRadius: 10,
    bottom: 10,
    alignItems:'center',
    
  },
  addButtonLabel: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
   
  },
  headerLabel: {
    fontSize: 24,
    color: 'white',
    marginBottom: 10,
  },

});