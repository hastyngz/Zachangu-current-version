// RideHistoryScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const rideHistoryData = [
  { id: '1', date: '2025-05-01', from: 'Area 18', to: 'Game Complex', fare: 'MK 3,500' },
    { id: '2', date: '2025-04-30', from: 'Lilongwe', to: 'Blantyre', fare: 'MK 25,000' },
      // Add more dummy data as needed
      ];

      const RideHistoryScreen = () => {
        const renderItem = ({ item }) => (
            <View style={styles.item}>
                  <Text style={styles.date}>{item.date}</Text>
                        <Text>From: {item.from}</Text>
                              <Text>To: {item.to}</Text>
                                    <Text>Fare: {item.fare}</Text>
                                        </View>
                                          );

                                            return (
                                                <View style={styles.container}>
                                                      <Text style={styles.title}>Ride History</Text>
                                                            <FlatList
                                                                    data={rideHistoryData}
                                                                            keyExtractor={(item) => item.id}
                                                                                    renderItem={renderItem}
                                                                                          />
                                                                                              </View>
                                                                                                );
                                                                                                };

                                                                                                const styles = StyleSheet.create({
                                                                                                  container: { flex: 1, padding: 20 },
                                                                                                    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
                                                                                                      item: {
                                                                                                          backgroundColor: '#f2f2f2',
                                                                                                              padding: 15,
                                                                                                                  borderRadius: 8,
                                                                                                                      marginBottom: 10,
                                                                                                                        },
                                                                                                                          date: { fontWeight: 'bold', marginBottom: 5 },
                                                                                                                          });

                                                                                                                          export default RideHistoryScreen;