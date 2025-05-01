// LoginScreen.js
import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { AuthContext } from './AuthContext';

const LoginScreen = ({ navigation }) => {
  const { login } = useContext(AuthContext); // Access the login function from context
    const [phone, setPhone] = useState('');
      const [password, setPassword] = useState('');

        const handleLogin = () => {
            login(phone, password); // Set the user state with phone
                navigation.replace('Home'); // Navigate to HomeScreen after login
                  };

                    return (
                        <View style={styles.container}>
                              <Text>Login</Text>
                                    <TextInput
                                            style={styles.input}
                                                    placeholder="Phone Number"
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
                                                                                                                                        </View>
                                                                                                                                          );
                                                                                                                                          };

                                                                                                                                          const styles = StyleSheet.create({
                                                                                                                                            container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
                                                                                                                                              input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, width: 200, paddingLeft: 8 }
                                                                                                                                              });

                                                                                                                                              export default LoginScreen;
                                                                                                                                              