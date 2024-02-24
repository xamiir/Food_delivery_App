import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { HomeCard } from '../components/HomeCard'; // Make sure to adjust the path
import { fetchProducts } from '../services/api'; // Import the fetchProducts function from the API fileimport { useNavigation } from '@react-navigation/native';

// Define a type for the product object
interface Product {
    id: number;
    name: string;
    image: string;
    price: number;
    description: string; 
    
}

export function HomePage() {
    const [products, setProducts] = useState<Product[]>([]); // Specify the type as Product[]
    
    


    useEffect(() => {
        const loadProducts = async () => {
            try {
                // Fetch products from the API
                const data = await fetchProducts();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        loadProducts();
    }, []);

    const handleAddToCart = () => {
        // Implement the function to add items to the cart
        console.log('Item added to cart');
    };

   


    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.container}>
                {products.map((product, index) => (
                    <HomeCard
                        key={index}
                        imageSource={{ uri: product.image }}
                        name={product.name}
                        price={product.price}
                        description='Description goes here...'
                        onAddToCart={handleAddToCart}
                    />
                ))}
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
});
