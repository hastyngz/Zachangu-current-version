// LoginScreen.js
import React, { useState } from 'react';
import {
  View,
    Text,
      TextInput,
        Button,
          Alert,
            StyleSheet,
            } from 'react-native';
            import AsyncStorage from '@react-native-async-storage/async-storage';
            import { getUser } from './storage'; // your local storage util

            const LoginScreen = ({ navigation }) => {
              const [phone, setPhone] = useState('');
                const [password, setPassword] = useState('');

                  const handleLogin = async () => {
                      if (!phone || !password) {
                            return Alert.alert('Error', 'Please fill in all fields');
                                }

                                    const user = await getUser();

                                        if (user && user.phone === phone && user.password === password) {
                                              await AsyncStorage.setItem('role', user.role); // Save role
                                                    Alert.alert('Success', `Welcome back, ${user.name}`);

                                                          // Navigate to the appropriate home screen
                                                                if (user.role === 'driver') {
                                                                        navigation.replace('DriverHome');
                                                                              } else {
                                                                                      navigation.replace('RiderHome');
                                                                                            }
                                                                                                } else {
                                                                                                      Alert.alert('Error', 'Invalid credentials');
                                                                                                          }
                                                                                                            };

                                                                                                              return (
                                                                                                                  <View style={styles.container}>
                                                                                                                        <Text style={styles.title}>Login</Text>

                                                                                                                              <TextInput
                                                                                                                                      style={styles.input}
                                                                                                                                              placeholder="Phone Number"
                                                                                                                                                      keyboardType="phone-pad"
                                                                                                                                                              value={phone}
                                                                                                                                                                      onChangeText={setPhone}
                                                                                                                                                                            />
                                                                                                                                                                                  <TextInput
                                                                                                                                                                                          style={styles.input}
                                                                                                                                                                                                  placeholder="Password"
                                                                                                                                                                                                          secureTextEntry
                                                                                                                                                                                                                  value={password}
                                                                                                                                                                                                                          onChangeText={setPassword}
                                                                                                                                                                                                                                />

                                                                                                                                                                                                                                      <Button title="Login" onPress={handleLogin} />

                                                                                                                                                                                                                                            <View style={styles.registerContainer}>
                                                                                                                                                                                                                                                    <Text>Don't have an account?</Text>
                                                                                                                                                                                                                                                            <Button
                                                                                                                                                                                                                                                                      title="Register"
                                                                                                                                                                                                                                                                                onPress={() => navigation.navigate('Register')}
                                                                                                                                                                                                                                                                                        />
                                                                                                                                                                                                                                                                                              </View>
                                                                                                                                                                                                                                                                                                  </View>
                                                                                                                                                                                                                                                                                                    );
                                                                                                                                                                                                                                                                                                    };

                                                                                                                                                                                                                                                                                                    const styles = StyleSheet.create({
                                                                                                                                                                                                                                                                                                      container: { flex: 1, justifyContent: 'center', padding: 20 },
                                                                                                                                                                                                                                                                                                        title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
                                                                                                                                                                                                                                                                                                          input: {
                                                                                                                                                                                                                                                                                                              borderWidth: 1,
                                                                                                                                                                                                                                                                                                                  padding: 10,
                                                                                                                                                                                                                                                                                                                      marginVertical: 10,
                                                                                                                                                                                                                                                                                                                          borderRadius: 5,
                                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                                              registerContainer: { marginTop: 10, alignItems: 'center' },
                                                                                                                                                                                                                                                                                                                              });

                                                                                                                                                                                                                                                                                                                              export default LoginScreen;