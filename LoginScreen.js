import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

    const handleLogin = () => {
        navigation.navigate('Home');
          };

            return (
                <View style={styles.container}>
                      <Text style={styles.label}>Enter phone number:</Text>
                            <TextInput
                                    style={styles.input}
                                            value={phoneNumber}
                                                    onChangeText={setPhoneNumber}
                                                            keyboardType="phone-pad"
                                                                    placeholder="+2659xxxxxxx"
                                                                          />
                                                                                <Button title="Login" onPress={handleLogin} />
                                                                                    </View>
                                                                                      );
                                                                                      };

                                                                                      const styles = StyleSheet.create({
                                                                                        container: { flex: 1, justifyContent: 'center', padding: 20 },
                                                                                          input: { borderWidth: 1, padding: 10, marginVertical: 10, borderRadius: 5 },
                                                                                            label: { fontSize: 16, marginBottom: 5 },
                                                                                            });

                                                                                            export default LoginScreen;