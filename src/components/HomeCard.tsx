import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

interface HomeCardProps {
   
    name: string;
    price: number;
    imageSource: any;
    description: string;
    onAddToCart: () => void;
   
   

}
export function HomeCard({ imageSource,name, price,description     }:HomeCardProps){
    

  // write function details here



    return (
        <TouchableOpacity  style={styles.card}  >
            <Image source={imageSource} style={styles.image} />
            <View style={styles.detailsContainer}>
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.price}>${price}</Text>
                    <Text style={styles.price}>{description}</Text>
                </View>
                <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addToCart}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        margin: 10,
        width: 390,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
    },
    detailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    price: {
        fontSize: 16,
        color: '#888',
    },
    addButton: {
        backgroundColor: '#065f46',
        padding: 5,
        borderRadius: 5,
    },
    addToCart: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        
    },
});

