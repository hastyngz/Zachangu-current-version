import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const RideSummaryScreen = () => {
  const navigation = useNavigation();
    const route = useRoute();

      const {
          fromCity,
              toCity,
                  taxiType,
                      pickupLocation,
                          dropoffLocation,
                              driver,
                                  intercity, // Added intercity flag
                                    } = route.params;

                                      const handleConfirm = () => {
                                          navigation.navigate('Payment', {
                                                fromCity,
                                                      toCity,
                                                            taxiType,
                                                                  pickupLocation,
                                                                        dropoffLocation,
                                                                              driver,
                                                                                    intercity, // Pass it along to the Payment screen
                                                                                        });
                                                                                          };

                                                                                            return (
                                                                                                <View style={styles.container}>
                                                                                                      <Text style={styles.title}>Ride Summary</Text>

                                                                                                            <Text style={styles.label}>Taxi Type: {taxiType}</Text>
                                                                                                                  <Text style={styles.label}>From: {fromCity}</Text>
                                                                                                                        {toCity && <Text style={styles.label}>To: {toCity}</Text>}
                                                                                                                              {!toCity && (
                                                                                                                                      <>
                                                                                                                                                <Text style={styles.label}>Pickup: {pickupLocation}</Text>
                                                                                                                                                          <Text style={styles.label}>Drop-off: {dropoffLocation}</Text>
                                                                                                                                                                  </>
                                                                                                                                                                        )}

                                                                                                                                                                              <View style={styles.driverSection}>
                                                                                                                                                                                      <Text style={styles.subtitle}>Driver Details</Text>
                                                                                                                                                                                              <Image source={{ uri: driver.image }} style={styles.image} />
                                                                                                                                                                                                      <Text style={styles.label}>Name: {driver.name}</Text>
                                                                                                                                                                                                              <Text style={styles.label}>Vehicle: {driver.vehicle}</Text>
                                                                                                                                                                                                                      <Text style={styles.label}>Rating: {driver.rating}</Text>
                                                                                                                                                                                                                            </View>

                                                                                                                                                                                                                                  <Button title="Confirm and Proceed to Payment" onPress={handleConfirm} />
                                                                                                                                                                                                                                      </View>
                                                                                                                                                                                                                                        );
                                                                                                                                                                                                                                        };

                                                                                                                                                                                                                                        const styles = StyleSheet.create({
                                                                                                                                                                                                                                          container: { flex: 1, padding: 20, justifyContent: 'center' },
                                                                                                                                                                                                                                            title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
                                                                                                                                                                                                                                              label: { fontSize: 16, marginBottom: 8 },
                                                                                                                                                                                                                                                subtitle: { fontSize: 18, fontWeight: 'bold', marginTop: 20, marginBottom: 10 },
                                                                                                                                                                                                                                                  driverSection: { alignItems: 'center', marginTop: 20 },
                                                                                                                                                                                                                                                    image: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
                                                                                                                                                                                                                                                    });

                                                                                                                                                                                                                                                    export default RideSummaryScreen;