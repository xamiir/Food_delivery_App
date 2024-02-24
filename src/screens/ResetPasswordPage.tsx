import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigators/AppNavigator";
import auth from '@react-native-firebase/auth';
type Props = NativeStackScreenProps<RootStackParamList, 'ResetPassword'>;


export function ResetPasswordPage({navigation}: Props){
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    // Handle the "Reset Password" action
    if (email === '') {
      Alert.alert('Email is required');
      return;
    }
    else {
      auth()
        .sendPasswordResetEmail(email)
        .then(() => {
          Alert.alert('Password reset email sent!');
          navigation.navigate('Login');

        })
        .catch((error:any) => {
          if (error.code === 'auth/invalid-email') {
            Alert.alert('That email address is invalid!');
          }
          else if (error.code === 'auth/user-not-found') {
            Alert.alert('User not found!');
          }
          console.error(error);
        });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset Password</Text>
      <Text style={styles.textsubtitles}>
        Please enter your email address to reset your password
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
      <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 170,
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
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#065f46',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
