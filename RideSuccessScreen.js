import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const RideSuccessScreen = () => {
  const navigation = useNavigation();
    const route = useRoute();

      const {
          fromCity,
              toCity,
                  taxiType,
                      pickupLocation,
                          dropoffLocation,
                              driver,
                                  paymentMethod,
                                    } = route.params;

                                      const handleNewRide = () => {
                                          navigation.navigate('SelectCity');
                                            };

                                              return (
                                                  <View style={styles.container}>
                                                        <Text style={styles.title}>Ride Booked Successfully!</Text>

                                                              <Text style={styles.info}>From: {fromCity}</Text>

                                                                    {/* Conditionally display 'To' based on the ride type */}
                                                                          {toCity ? (
                                                                                  <Text style={styles.info}>To: {toCity}</Text>
                                                                                        ) : (
                                                                                                <Text style={styles.info}>This is a local ride.</Text>
                                                                                                      )}

                                                                                                            <Text style={styles.info}>Taxi Type: {taxiType}</Text>
                                                                                                                  <Text style={styles.info}>Pickup: {pickupLocation}</Text>
                                                                                                                        <Text style={styles.info}>Drop-off: {dropoffLocation}</Text>
                                                                                                                              <Text style={styles.info}>Driver: {driver.name}</Text>
                                                                                                                                    <Text style={styles.info}>Payment: {paymentMethod}</Text>

                                                                                                                                          <View style={styles.buttonContainer}>
                                                                                                                                                  <Button title="Book Another Ride" onPress={handleNewRide} />
                                                                                                                                                        </View>
                                                                                                                                                            </View>
                                                                                                                                                              );
                                                                                                                                                              };

                                                                                                                                                              const styles = StyleSheet.create({
                                                                                                                                                                container: { flex: 1, padding: 20, justifyContent: 'center' },
                                                                                                                                                                  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
                                                                                                                                                                    info: { fontSize: 18, marginBottom: 10 },
                                                                                                                                                                      buttonContainer: { marginTop: 20 },
                                                                                                                                                                      });

                                                                                                                                                                      export default RideSuccessScreen;