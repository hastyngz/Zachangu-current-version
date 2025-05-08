// TermsAndConditionsScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TermsAndConditionsScreen = () => {
  return (
      <View style={styles.container}>
            <Text style={styles.title}>Terms & Conditions</Text>
                  <Text style={styles.text}>Here are the terms and conditions of using the app...</Text>
                      </View>
                        );
                        };

                        const styles = StyleSheet.create({
                          container: { flex: 1, padding: 20 },
                            title: { fontSize: 24, marginBottom: 20 },
                              text: { fontSize: 18 },
                              });

                              export default TermsAndConditionsScreen;