import React from 'react';
import { View, Text, Button, StyleSheet, Linking } from 'react-native';

const TrackDriverScreen = ({ route }) => {
  const {
      driverName = 'Chimwemwe Banda',
          vehicle = 'Toyota Corolla - BR1234',
              phoneNumber = '+265991234567',
                  pickup = 'Area 18, Lilongwe',
                      destination = 'City Mall, Lilongwe',
                          eta = '10 mins'
                            } = route.params || {};

                              const handleCallDriver = () => {
                                  Linking.openURL(`tel:${phoneNumber}`);
                                    };

                                      return (
                                          <View style={styles.container}>
                                                <Text style={styles.heading}>Driver En Route</Text>

                                                      <View style={styles.infoBox}>
                                                              <Text style={styles.label}>Driver:</Text>
                                                                      <Text>{driverName}</Text>

                                                                              <Text style={styles.label}>Vehicle:</Text>
                                                                                      <Text>{vehicle}</Text>

                                                                                              <Text style={styles.label}>Pickup:</Text>
                                                                                                      <Text>{pickup}</Text>

                                                                                                              <Text style={styles.label}>Destination:</Text>
                                                                                                                      <Text>{destination}</Text>

                                                                                                                              <Text style={styles.label}>ETA:</Text>
                                                                                                                                      <Text>{eta}</Text>
                                                                                                                                            </View>

                                                                                                                                                  <Button title="Call Driver" onPress={handleCallDriver} color="#007AFF" />

                                                                                                                                                        <View style={styles.trackingBox}>
                                                                                                                                                                <Text style={{ textAlign: 'center', marginTop: 20 }}>
                                                                                                                                                                          Live driver tracking will appear here.
                                                                                                                                                                                  </Text>
                                                                                                                                                                                          {/* Replace this with a map integration later */}
                                                                                                                                                                                                </View>
                                                                                                                                                                                                    </View>
                                                                                                                                                                                                      );
                                                                                                                                                                                                      };

                                                                                                                                                                                                      const styles = StyleSheet.create({
                                                                                                                                                                                                        container: {
                                                                                                                                                                                                            padding: 20,
                                                                                                                                                                                                                flex: 1,
                                                                                                                                                                                                                    backgroundColor: '#fff',
                                                                                                                                                                                                                      },
                                                                                                                                                                                                                        heading: {
                                                                                                                                                                                                                            fontSize: 22,
                                                                                                                                                                                                                                fontWeight: 'bold',
                                                                                                                                                                                                                                    marginBottom: 16,
                                                                                                                                                                                                                                        textAlign: 'center',
                                                                                                                                                                                                                                          },
                                                                                                                                                                                                                                            infoBox: {
                                                                                                                                                                                                                                                marginBottom: 20,
                                                                                                                                                                                                                                                  },
                                                                                                                                                                                                                                                    label: {
                                                                                                                                                                                                                                                        fontWeight: 'bold',
                                                                                                                                                                                                                                                            marginTop: 10,
                                                                                                                                                                                                                                                              },
                                                                                                                                                                                                                                                                trackingBox: {
                                                                                                                                                                                                                                                                    marginTop: 30,
                                                                                                                                                                                                                                                                        borderWidth: 1,
                                                                                                                                                                                                                                                                            borderColor: '#ccc',
                                                                                                                                                                                                                                                                                borderRadius: 12,
                                                                                                                                                                                                                                                                                    height: 200,
                                                                                                                                                                                                                                                                                        justifyContent: 'center',
                                                                                                                                                                                                                                                                                          },
                                                                                                                                                                                                                                                                                          });

                                                                                                                                                                                                                                                                                          export default TrackDriverScreen;