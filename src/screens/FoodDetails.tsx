import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';
import { HomeCard } from '../components/HomeCard';
import { fetchProducts } from '../services/api';

interface Product {
    id: number;
    name: string;
    image: string;
    price: number;
    description: string;
}

export function FoodDetails({ navigation }: any) {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const data = await fetchProducts();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        loadProducts();
    }, []);

    const handleCardPress = (product: Product) => {
        if (selectedProduct && selectedProduct.id === product.id) {
            // If the selected product is clicked again, deselect it
            setSelectedProduct(null);
        } else {
            // Otherwise, select the clicked product
            setSelectedProduct(product);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.container}>
                {products.map((product) => (
                    <TouchableOpacity 
                        key={product.id} 
                        onPress={() => handleCardPress(product)}
                        style={styles.cardContainer}
                    >
                        <HomeCard
                            imageSource={{ uri: product.image }}
                            name={product.name}
                            price={product.price}
                            description={product.description}
                            
                        />
                    </TouchableOpacity>
                ))}
                {selectedProduct && (
                    <View style={styles.productDetailsContainer}>
                        <Text style={styles.productName}>{selectedProduct.name}</Text>
                        <Text style={styles.productDescription}>{selectedProduct.description}</Text>
                        <Text style={styles.productPrice}>Price: ${selectedProduct.price}</Text>
                    </View>
                )}
                {products.length === 0 && <Text>No products available</Text>}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
    },
    scrollViewContent: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardContainer: {
        marginBottom: 10, // Add spacing between cards if needed
    },
    productDetailsContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    productName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    productDescription: {
        fontSize: 18,
        marginBottom: 10,
    },
    productPrice: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
