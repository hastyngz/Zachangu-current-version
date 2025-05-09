import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

    const handleLogout = () => {
        Alert.alert(
              'Logout',
                    'Are you sure you want to log out?',
                          [
                                  { text: 'Cancel', style: 'cancel' },
                                          {
                                                    text: 'Logout',
                                                              style: 'destructive',
                                                                        onPress: async () => {
                                                                                    await AsyncStorage.removeItem('role');
                                                                                                navigation.replace('Login');
                                                                                                          },
                                                                                                                  },
                                                                                                                        ]
                                                                                                                            );
                                                                                                                              };

                                                                                                                                return (
                                                                                                                                    <View style={styles.container}>
                                                                                                                                          <Text style={styles.title}>Welcome to Zachangu</Text>

                                                                                                                                                <Button title="Start Booking" onPress={() => navigation.navigate('SelectCity')} />
                                                                                                                                                      <View style={styles.spacer} />

                                                                                                                                                            <Button title="Ride History" onPress={() => navigation.navigate('RideHistory')} />
                                                                                                                                                                  <View style={styles.spacer} />

                                                                                                                                                                        <Button title="More Options" onPress={() => navigation.navigate('MoreOptions')} color="#444" />
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
                                                                                                                                                                                                            title: {
                                                                                                                                                                                                                fontSize: 24,
                                                                                                                                                                                                                    fontWeight: 'bold',
                                                                                                                                                                                                                        textAlign: 'center',
                                                                                                                                                                                                                            marginBottom: 30,
                                                                                                                                                                                                                              },
                                                                                                                                                                                                                                spacer: {
                                                                                                                                                                                                                                    height: 15,
                                                                                                                                                                                                                                      },
                                                                                                                                                                                                                                      });

                                                                                                                                                                                                                                      export default HomeScreen;