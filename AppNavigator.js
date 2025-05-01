
// AppNavigator.js
import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from './AuthContext';
import HomeScreen from './HomeScreen';
import CitySelector from './CitySelector';
import LoginScreen from './LoginScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const { user } = useContext(AuthContext); // Check the current user from context

    return (
        <Stack.Navigator>
              {!user ? (
                      // If no user is logged in, show the LoginScreen
                              <Stack.Screen name="Login" component={LoginScreen} />
                                    ) : (
                                            // If user is logged in, show the HomeScreen and CitySelector
                                                    <>
                                                              <Stack.Screen name="Home" component={HomeScreen} />
                                                                        <Stack.Screen name="Select City" component={CitySelector} />
                                                                                </>
                                                                                      )}
                                                                                          </Stack.Navigator>
                                                                                            );
                                                                                            };

                                                                                            export default AppNavigator;