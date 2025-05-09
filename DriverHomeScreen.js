import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const DriverHomeScreen = () => {
  const navigation = useNavigation();

    const handleLogout = () => {
        Alert.alert('Logout', 'Are you sure you want to log out?', [
              { text: 'Cancel', style: 'cancel' },
                    {
                            text: 'Logout',
                                    style: 'destructive',
                                            onPress: async () => {
                                                      await AsyncStorage.removeItem('role');
                                                                navigation.replace('Login');
                                                                        },
                                                                              },
                                                                                  ]);
                                                                                    };

                                                                                      return (
                                                                                          <View style={styles.container}>
                                                                                                <Text style={styles.title}>Welcome, Driver!</Text>

                                                                                                      <Button
                                                                                                              title="Set Availability"
                                                                                                                      onPress={() => navigation.navigate('SetAvailability')}
                                                                                                                            />
                                                                                                                                  <View style={styles.spacer} />

                                                                                                                                        <Button
                                                                                                                                                title="View Assigned Rides"
                                                                                                                                                        onPress={() => navigation.navigate('AssignedRides')}
                                                                                                                                                              />
                                                                                                                                                                    <View style={styles.spacer} />

                                                                                                                                                                          <Button
                                                                                                                                                                                  title="Update Vehicle Info"
                                                                                                                                                                                          onPress={() => navigation.navigate('DriverProfile')}
                                                                                                                                                                                                />
                                                                                                                                                                                                      <View style={styles.spacer} />

                                                                                                                                                                                                            <Button
                                                                                                                                                                                                                    title="Ride History"
                                                                                                                                                                                                                            onPress={() => navigation.navigate('RideHistory')}
                                                                                                                                                                                                                                  />
                                                                                                                                                                                                                                        <View style={styles.spacer} />

                                                                                                                                                                                                                                              <Button title="Logout" color="red" onPress={handleLogout} />
                                                                                                                                                                                                                                                  </View>
                                                                                                                                                                                                                                                    );
                                                                                                                                                                                                                                                    };

                                                                                                                                                                                                                                                    const styles = StyleSheet.create({
                                                                                                                                                                                                                                                      container: {
                                                                                                                                                                                                                                                          flex: 1,
                                                                                                                                                                                                                                                              justifyContent: 'center',
                                                                                                                                                                                                                                                                  padding: 20,
                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                      title: {
                                                                                                                                                                                                                                                                          fontSize: 24,
                                                                                                                                                                                                                                                                              marginBottom: 30,
                                                                                                                                                                                                                                                                                  fontWeight: 'bold',
                                                                                                                                                                                                                                                                                      textAlign: 'center',
                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                          spacer: {
                                                                                                                                                                                                                                                                                              height: 15,
                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                });

                                                                                                                                                                                                                                                                                                export default DriverHomeScreen;