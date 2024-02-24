import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image , Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function Cart(){
    const [cartItems, setCartItems] = useState([
       // images as url from online
        {
            id: '1',
            name: 'Pizza',
            price: 12.99,
            quantity: 2,
           // images as url from online
             image: require('../../assets/food1.jpg'),
        },
        {
            id: '2',
            name: 'Burger',
            price: 5.99,
            quantity: 1,
            image: require('../../assets/food1.jpg'),
        },
        {
            id: '3',
            name: 'Fries',
            price: 3.99,
            quantity: 3,
            image: require('../../assets/food1.jpg'),
        },

    ]);

    // Function to calculate total price
    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };
    const navigation = useNavigation();

    // Function to handle checkout

    const handleCheckout = () => {
        Alert.alert('Success', 'Your order has been placed successfully', [
            {
                text: 'OK',
                onPress: () => {
                    // Navigate to the home page
                   
                },
            },
        ]);
    };

    // Function to render each item in the cart
    const renderItem = ({ item }:any) => (
        <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>Price: ${item.price}</Text>
                <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={cartItems}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContainer}
            />
            <View style={styles.totalContainer}>
                <Text style={styles.totalText}>Total: ${getTotalPrice()}</Text>
                <TouchableOpacity style={styles.checkoutButton}
                    onPress={handleCheckout}
                >
                    <Text style={styles.checkoutButtonText}>Checkout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
       
    },
    listContainer: {
        flexGrow: 1,
        
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        
    },
    itemImage: {
        width: 190,
        height: 80,
        borderRadius: 10,
        marginRight: 15,
    },
    itemDetails: {
        flex: 1,
    },
    itemName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    itemPrice: {
        fontSize: 16,
        color: '#888',
    },
    itemQuantity: {
        fontSize: 16,
    },
    totalContainer: {
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        paddingTop: 20,
        alignItems: 'center',
    },
    totalText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    checkoutButton: {
        backgroundColor: '#065f46',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    checkoutButtonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
});
