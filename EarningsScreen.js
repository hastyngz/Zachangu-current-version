import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EarningsScreen = () => {
  return (
      <View style={styles.container}>
            <Text style={styles.title}>Earnings Summary</Text>
                  <Text style={styles.amount}>Total Earned: MWK 150,000</Text>
                      </View>
                        );
                        };

                        const styles = StyleSheet.create({
                          container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
                            title: { fontSize: 24, fontWeight: 'bold' },
                              amount: { marginTop: 20, fontSize: 18 }
                              });

                              export default EarningsScreen;