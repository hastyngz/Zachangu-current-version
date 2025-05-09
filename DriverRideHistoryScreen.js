import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const pastRides = [
  { id: '1', destination: 'Hospital', date: '2025-05-01' },
    { id: '2', destination: 'Supermarket', date: '2025-05-06' }
    ];

    const DriverRideHistoryScreen = () => {
      return (
          <View style={styles.container}>
                <Text style={styles.title}>Ride History</Text>
                      <FlatList
                              data={pastRides}
                                      keyExtractor={item => item.id}
                                              renderItem={({ item }) => (
                                                        <View style={styles.ride}>
                                                                    <Text>To: {item.destination}</Text>
                                                                                <Text>Date: {item.date}</Text>
                                                                                          </View>
                                                                                                  )}
                                                                                                        />
                                                                                                            </View>
                                                                                                              );
                                                                                                              };

                                                                                                              const styles = StyleSheet.create({
                                                                                                                container: { flex: 1, padding: 20 },
                                                                                                                  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
                                                                                                                    ride: { backgroundColor: '#eee', padding: 10, marginBottom: 10, borderRadius: 5 }
                                                                                                                    });

                                                                                                                    export default DriverRideHistoryScreen;