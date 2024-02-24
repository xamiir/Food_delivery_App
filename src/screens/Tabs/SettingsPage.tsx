import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export function SettingsPage({ navigation }: any) {
  
    const logout = () => {
        // Implement logout logic
        navigation.navigate('Login');
    };

    const changePassword = () => {
        // Navigate to the change password go the reset password page
        navigation.navigate('ResetPassword');
        
    };

    // Sample user data (initially empty)
    const [user, setUser] = useState<any>({
        name: '', // Initially empty
       
    });

    useEffect(() => {
        setTimeout(() => {
            setUser({ ...user, name: 'engabdullahi642@gmail.com' }); 
        }, 1000); 
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.userInfo}>
                <Image source={require('../../../assets/default-profile-image.jpg')} style={styles.profileImage} />
                <Text style={styles.userName}>{user.name}</Text>
            </View>
            <Text style={styles.title}>Profile Settings</Text>
           
            <TouchableOpacity style={styles.optionContainer} onPress={changePassword}>
                <Text style={styles.optionText}>Change Password</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionContainer} onPress={logout}>
                <Text style={styles.optionText}>Logout</Text>
            </TouchableOpacity>    
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 40, // Add padding for better display
        backgroundColor: '#fff', // Adjust background color as per your theme
    },
    userInfo: {
        alignItems: 'center', // Center items horizontally
        marginBottom: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 70,
        marginBottom: 10, // Add margin between image and username
    },
    userName: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    optionContainer: {
        width: '100%',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    optionText: {
        fontSize: 18,
        color: '#065f46',
    },
});
