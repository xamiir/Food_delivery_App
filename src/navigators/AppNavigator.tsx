// Import necessary modules
import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Import screens
import { LoginPage, ResetPasswordPage, SignupPage, HomePage , Cart , FoodDetails } from "../screens";
import  {SettingsPage , SearchingPage} from "../screens/Tabs";

// Define stack navigator param list
export type RootStackParamList = {
    Login: undefined;
    Signup: undefined;
    ResetPassword: undefined;
    Home: undefined;
    Cart: undefined;
    FoodDetails: undefined;
   
};

export type TabParamList = {
    SettingsPage: undefined;
    Cart: undefined;
    home: undefined;
    profile: undefined;
    search: undefined;
};




// Define stack navigator
const Stack = createNativeStackNavigator<RootStackParamList>();

// Define tab navigator
const Tab = createBottomTabNavigator <TabParamList>();

// Define main tab container component
function TabContainer() {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            headerShown: false, // Hide the default header for the entire TabNavigator
            tabBarIcon: ({ focused, color, size }) => {
                let iconName: string = '';

                if (route.name === 'home') {
                    iconName = focused ? 'home' : 'home-outline';
                } else if (route.name === 'search') {
                    iconName = focused ? 'search' : 'search-outline';
                } else if (route.name === 'Cart') {
                    iconName = focused ? 'cart' : 'cart-outline';
                } else if (route.name === 'profile') {
                    iconName = focused ? 'person' : 'person-outline';
                }

                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#065f46',
            tabBarInactiveTintColor: 'gray',
        })}
    >
        <Tab.Screen
            name="home"
            component={HomePage}
            options={{ title: 'Home'}}
        />
        <Tab.Screen
            name="search"
            component={SearchingPage}
            options={{ title: 'Search' }}
        />
        <Tab.Screen
            name="Cart"
            component={Cart}
            options={{ title: 'Cart' }}
        />
        <Tab.Screen
            name="profile"
            component={SettingsPage}
            options={{ title: 'Profile' }}
        />
        
    </Tab.Navigator>
    );
}


// Define app navigator component
export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={LoginPage}
                    options={{ title: 'Food Delivery App' }}
                />
                <Stack.Screen
                    name="Signup"
                    component={SignupPage}
                    options={{ title: 'Food Delivery App' }}
                />
                <Stack.Screen
                    name="ResetPassword"
                    component={ResetPasswordPage}
                    options={{ title: 'Food Delivery App' }}
                />
                <Stack.Screen
                    name="Home"
                    component={TabContainer}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="FoodDetails"
                    component={FoodDetails}
                    options={{ title: 'Food Details' }}
                />
         
               
            </Stack.Navigator>
        </NavigationContainer>
    );
}
