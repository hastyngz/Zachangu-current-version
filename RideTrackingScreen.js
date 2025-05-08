// RideTrackingScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const RideTrackingScreen = () => {
  return (
      <View style={styles.container}>
            <Text style={styles.title}>Tracking Your Ride</Text>
                  <Text style={styles.info}>Driver is 5 minutes away</Text>
                        <Button title="Call Driver" onPress={() => alert('Call Driver')} />
                            </View>
                              );
                              };

                              const styles = StyleSheet.create({
                                container: { flex: 1, padding: 20 },
                                  title: { fontSize: 24, marginBottom: 20 },
                                    info: { fontSize: 18, marginBottom: 10 },
                                    });

                                    export default RideTrackingScreen;