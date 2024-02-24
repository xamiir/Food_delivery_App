import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { HomeCard } from '../../components/HomeCard';
import { fetchProducts } from '../../services/api';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Product {
    id: number;
    name: string;
    image: string;
    price: number;
    description: string;  
}

export function SearchingPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [searchText, setSearchText] = useState('');

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

    const handleAddToCart = () => {
        console.log('Item added to cart');
    };

    const handleClearSearch = () => {
        setSearchText('');
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <TextInput
                    style={styles.input}
                    placeholder="Search food..."
                    onChangeText={(text) => setSearchText(text)}
                    value={searchText}
                />
                {searchText ? (
                    <TouchableOpacity style={styles.clearIcon} onPress={handleClearSearch}>
                        <Icon name="close-circle" size={24} color="#000" />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity style={styles.searchIcon}>
                        <Icon name="magnify" size={24} color="#000" />
                    </TouchableOpacity>
                )}
            </View>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                {products
                    .filter((product) =>
                        product.name.toLowerCase().includes(searchText.toLowerCase())
                    )
                    .map((product, index) => (
                        <HomeCard
                            key={index}
                            imageSource={{ uri: product.image }}
                            name={product.name}
                            price={product.price}
                            description="Description goes here..."
                            onAddToCart={handleAddToCart}    

                        />
                    ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginTop: 15,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
    },
    input: {
        flex: 1,
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20,
        paddingHorizontal: 15,
    },
    searchIcon: {
        // add absolute position
        position: 'absolute',
        right: 15,  
    },
    clearIcon: {
        position: 'absolute',
        right: 15,
    },
    scrollViewContent: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
