import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function Registration({navigation}) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  function handleRegistration() {
    // You can handle this function as needed.
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your Name"
            onChangeText={(text) => setName(text)}
            value={name}
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your Age"
            onChangeText={(text) => setAge(text)}
            keyboardType="numeric"
            value={age}
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.addButton}
        onPress={handleRegistration}
      >
        <Text style={styles.addButtonLabel}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    alignItems: 'center',
    marginBottom: 30,
    paddingHorizontal: 50,
    paddingVertical: 10,
  },
  inputBox: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 6,
  },
  textInput: {
    color: 'black',
    paddingHorizontal: 50,
    paddingVertical: 10,
  },
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
});