// DriverProfileScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DriverProfileScreen = () => {
  return (
      <View style={styles.container}>
            <Text style={styles.title}>Driver Profile</Text>
                  <Text style={styles.label}>Name: John Doe</Text>
                        <Text style={styles.label}>Vehicle: Toyota Corolla</Text>
                              <Button title="Update Vehicle Details" onPress={() => alert('Update vehicle details')} />
                                    <Button title="View Earnings" onPress={() => alert('View earnings')} />
                                        </View>
                                          );
                                          };

                                          const styles = StyleSheet.create({
                                            container: { flex: 1, padding: 20 },
                                              title: { fontSize: 24, marginBottom: 20 },
                                                label: { fontSize: 18 },
                                                });

                                                export default DriverProfileScreen;