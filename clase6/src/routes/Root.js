import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import MovieDetail from './../screens/MovieDetail';
import Icon from 'react-native-vector-icons/AntDesign';
import { SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#34495e',
        paddingVertical: 15,
        paddingLeft: 10,
    },
});


const RootStack = createStackNavigator();

const RootNavigation = () => (
    <NavigationContainer>
        <RootStack.Navigator initialRouteName="Home" headerMode="screen">
            <RootStack.Screen 
                name="Home" 
                component={Home} 
                options={{ 
                    header: () => null
                }}
            />
            <RootStack.Screen 
                name="MovieDetail" 
                component={MovieDetail} 
                options={{ 
                    header: ({ navigation }) => (
                        <SafeAreaView style={styles.container}>
                            <TouchableOpacity
                                onPress={() => navigation.pop()}
                            >
                                <Icon color="white" name="arrowleft" size={30} />
                            </TouchableOpacity>
                        </SafeAreaView>
                    ),
                    gestureDirection: 'vertical',
                }}
            />
        </RootStack.Navigator>
    </NavigationContainer>
);

export default RootNavigation;