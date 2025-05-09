// MoreOptionsScreen.js
import React, { useEffect, useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const MoreOptionsScreen = () => {
  const navigation = useNavigation();
    const [role, setRole] = useState('');

      useEffect(() => {
          const fetchRole = async () => {
                const storedRole = await AsyncStorage.getItem('role');
                      setRole(storedRole);
                          };
                              fetchRole();
                                }, []);

                                  const handleLogout = async () => {
                                      await AsyncStorage.removeItem('role');
                                          navigation.replace('Login');
                                            };

                                              return (
                                                  <View style={styles.container}>
                                                        {role === 'rider' ? (
                                                                <>
                                                                          <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
                                                                                    <View style={styles.spacer} />
                                                                                              <Button title="Notifications" onPress={() => navigation.navigate('Notifications')} />
                                                                                                        <View style={styles.spacer} />
                                                                                                                  <Button title="Promotions" onPress={() => navigation.navigate('Promotions')} />
                                                                                                                            <View style={styles.spacer} />
                                                                                                                                    </>
                                                                                                                                          ) : role === 'driver' ? (
                                                                                                                                                  <>
                                                                                                                                                            <Button title="Driver Profile" onPress={() => navigation.navigate('DriverProfile')} />
                                                                                                                                                                      <View style={styles.spacer} />
                                                                                                                                                                                <Button title="Earnings" onPress={() => navigation.navigate('Earnings')} />
                                                                                                                                                                                          <View style={styles.spacer} />
                                                                                                                                                                                                    <Button title="Ride History" onPress={() => navigation.navigate('DriverRideHistory')} />
                                                                                                                                                                                                              <View style={styles.spacer} />
                                                                                                                                                                                                                      </>
                                                                                                                                                                                                                            ) : null}

                                                                                                                                                                                                                                  <Button title="Support" onPress={() => navigation.navigate('Support')} />
                                                                                                                                                                                                                                        <View style={styles.spacer} />
                                                                                                                                                                                                                                              <Button title="Terms and Conditions" onPress={() => navigation.navigate('TermsAndConditions')} />
                                                                                                                                                                                                                                                    <View style={styles.spacer} />
                                                                                                                                                                                                                                                          <Button title="Logout" onPress={handleLogout} color="red" />
                                                                                                                                                                                                                                                              </View>
                                                                                                                                                                                                                                                                );
                                                                                                                                                                                                                                                                };

                                                                                                                                                                                                                                                                const styles = StyleSheet.create({
                                                                                                                                                                                                                                                                  container: {
                                                                                                                                                                                                                                                                      flex: 1,
                                                                                                                                                                                                                                                                          justifyContent: 'center',
                                                                                                                                                                                                                                                                              paddingHorizontal: 20,
                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                  spacer: {
                                                                                                                                                                                                                                                                                      height: 15,
                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                        });

                                                                                                                                                                                                                                                                                        export default MoreOptionsScreen;