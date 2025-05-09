// AssignedRidesScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const mockAssignedRides = [
  {
      id: '1',
          pickupLocation: 'Area 10, Lilongwe',
              destination: 'City Centre',
                  earnings: 'MWK 5,000',
                    },
                      {
                          id: '2',
                              pickupLocation: 'Mzuzu Market',
                                  destination: 'Katoto Secondary',
                                      earnings: 'MWK 3,500',
                                        },
                                        ];

                                        const AssignedRidesScreen = () => {
                                          const [rides, setRides] = useState([]);

                                            useEffect(() => {
                                                // Replace this with real API call or database fetch
                                                    setRides(mockAssignedRides);
                                                      }, []);

                                                        const renderItem = ({ item }) => (
                                                            <View style={styles.card}>
                                                                  <Text style={styles.label}>Pickup:</Text>
                                                                        <Text style={styles.value}>{item.pickupLocation}</Text>

                                                                              <Text style={styles.label}>Destination:</Text>
                                                                                    <Text style={styles.value}>{item.destination}</Text>

                                                                                          <Text style={styles.label}>Estimated Earnings:</Text>
                                                                                                <Text style={styles.earnings}>{item.earnings}</Text>
                                                                                                    </View>
                                                                                                      );

                                                                                                        return (
                                                                                                            <View style={styles.container}>
                                                                                                                  <Text style={styles.heading}>Assigned Rides</Text>
                                                                                                                        <FlatList
                                                                                                                                data={rides}
                                                                                                                                        keyExtractor={(item) => item.id}
                                                                                                                                                renderItem={renderItem}
                                                                                                                                                        contentContainerStyle={styles.list}
                                                                                                                                                              />
                                                                                                                                                                  </View>
                                                                                                                                                                    );
                                                                                                                                                                    };

                                                                                                                                                                    const styles = StyleSheet.create({
                                                                                                                                                                      container: {
                                                                                                                                                                          flex: 1,
                                                                                                                                                                              padding: 16,
                                                                                                                                                                                  backgroundColor: '#fff',
                                                                                                                                                                                    },
                                                                                                                                                                                      heading: {
                                                                                                                                                                                          fontSize: 22,
                                                                                                                                                                                              fontWeight: 'bold',
                                                                                                                                                                                                  marginBottom: 10,
                                                                                                                                                                                                      textAlign: 'center',
                                                                                                                                                                                                        },
                                                                                                                                                                                                          list: {
                                                                                                                                                                                                              paddingBottom: 20,
                                                                                                                                                                                                                },
                                                                                                                                                                                                                  card: {
                                                                                                                                                                                                                      padding: 15,
                                                                                                                                                                                                                          backgroundColor: '#f1f1f1',
                                                                                                                                                                                                                              borderRadius: 12,
                                                                                                                                                                                                                                  marginBottom: 12,
                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                      label: {
                                                                                                                                                                                                                                          fontWeight: 'bold',
                                                                                                                                                                                                                                              fontSize: 14,
                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                  value: {
                                                                                                                                                                                                                                                      marginBottom: 6,
                                                                                                                                                                                                                                                          fontSize: 15,
                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                              earnings: {
                                                                                                                                                                                                                                                                  color: 'green',
                                                                                                                                                                                                                                                                      fontWeight: 'bold',
                                                                                                                                                                                                                                                                          fontSize: 16,
                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                            });

                                                                                                                                                                                                                                                                            export default AssignedRidesScreen;