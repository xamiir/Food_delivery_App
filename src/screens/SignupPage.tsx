import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity , Alert } from 'react-native';
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigators/AppNavigator";
import auth from '@react-native-firebase/auth';

type Props = NativeStackScreenProps<RootStackParamList, 'Signup'>;

export function SignupPage({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    // write signup code
    if (email === '' || password === '' || confirmPassword === '') {
      Alert.alert('Email, Password and Confirm Password are required');
      return;
    }
    else if (password !== confirmPassword) {
      Alert.alert('Password and Confirm Password must match');
      return;
    }
    else {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.log('User account created & signed in!');
          navigation.navigate('Login');
        })
        .catch((error:any) => {
          if (error.code === 'auth/email-already-in-use') {
            Alert.alert('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            Alert.alert('That email address is invalid!');
          }

          console.error(error);
        });
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Create Account
      </Text>
      <Text style={styles.textsubtitles}>
        Please fill in the information below to create your account
        </Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      
      <View style={styles.textContainer}>
        <Text style={styles.textStyles}>Already have an account? </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
        
        >
          <Text style={styles.textlogin}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  textsubtitles: {
    fontSize: 16,
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 15,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
    backgroundColor: '#065f46',
    borderRadius: 8,
    paddingVertical: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  textStyles: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textlogin: {
    color: 'blue',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});
