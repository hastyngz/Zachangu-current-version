// SupportScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SupportScreen = () => {
  return (
      <View style={styles.container}>
            <Text style={styles.title}>Customer Support</Text>
                  <Button title="Live Chat" onPress={() => alert('Navigate to Live Chat')} />
                        <Button title="Call Support" onPress={() => alert('Call Support')} />
                              <Button title="Email Support" onPress={() => alert('Send Email')} />
                                  </View>
                                    );
                                    };

                                    const styles = StyleSheet.create({
                                      container: { flex: 1, padding: 20 },
                                        title: { fontSize: 24, marginBottom: 20 },
                                        });

                                        export default SupportScreen;