// LoginPage.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigators/AppNavigator";
import auth from '@react-native-firebase/auth';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export function LoginPage({ navigation }: Props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        if (email === '' || password === '') {
            Alert.alert('Email and Password are required');
            return;
        }
        try {
            const userCredential = await auth().signInWithEmailAndPassword(email, password);
            const user = userCredential.user;
            if (user) {
                const userData = { uid: user.uid, email: user.email };
                await AsyncStorage.setItem('userData', JSON.stringify(userData));
                navigation.navigate('Home');
                setEmail('');
                setPassword('');
            }
        } catch (error:any) {
            console.error(error);
            Alert.alert('Invalid email or password', error.message);
        }
    }

    const handleForgotPassword = () => {
        navigation.navigate('ResetPassword');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <Text style={styles.textsubtitles}>Welcome back! Please login to your account</Text>
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
            <TouchableOpacity style={styles.forgotPasswordContainer} onPress={handleForgotPassword}>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <View style={styles.textContainer}>
                <Text style={styles.textStyles}>Don't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                    <Text style={styles.textLink}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

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
    inputContainer: {
        width: '100%',
        marginBottom: 15,
    },
    textsubtitles: {
        fontSize: 16,
        marginBottom: 20,
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
    textContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    textStyles: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
    textLink: {
        color: 'blue',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 5,
    },
    forgotPasswordContainer: {
        marginTop: 10,
    },
    forgotPasswordText: {
        color: 'blue',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'right',
    },
});
