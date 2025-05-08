import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const DestinationInputScreen = () => {
  const navigation = useNavigation();
    const route = useRoute();

      const {
          fromCity,
              toCity,
                  selectedCity,
                      taxiType,
                          intercity,
                            } = route.params;

                              const [pickupLocation, setPickupLocation] = useState('');
                                const [dropoffLocation, setDropoffLocation] = useState('');

                                  const isIntercity = intercity;

                                    const handleNext = () => {
                                        if (isIntercity || (pickupLocation && dropoffLocation)) {
                                              navigation.navigate('DriverSelection', {
                                                      fromCity: isIntercity ? fromCity : selectedCity,
                                                              toCity: isIntercity ? toCity : null,
                                                                      taxiType,
                                                                              pickupLocation,
                                                                                      dropoffLocation,
                                                                                              intercity,
                                                                                                    });
                                                                                                        } else {
                                                                                                              alert('Please fill both pickup and drop-off locations.');
                                                                                                                  }
                                                                                                                    };

                                                                                                                      return (
                                                                                                                          <View style={styles.container}>
                                                                                                                                <Text style={styles.title}>
                                                                                                                                        {isIntercity ? 'Confirm Intercity Trip' : 'Enter Local Ride Details'}
                                                                                                                                              </Text>

                                                                                                                                                    <Text style={styles.info}>Taxi Type: {taxiType}</Text>
                                                                                                                                                          <Text style={styles.info}>From: {isIntercity ? fromCity : selectedCity}</Text>
                                                                                                                                                                {isIntercity && <Text style={styles.info}>To: {toCity}</Text>}

                                                                                                                                                                      {!isIntercity && (
                                                                                                                                                                              <>
                                                                                                                                                                                        <Text style={styles.label}>Pickup Location:</Text>
                                                                                                                                                                                                  <TextInput
                                                                                                                                                                                                              style={styles.input}
                                                                                                                                                                                                                          placeholder="e.g., Area 18 Filling Station"
                                                                                                                                                                                                                                      value={pickupLocation}
                                                                                                                                                                                                                                                  onChangeText={setPickupLocation}
                                                                                                                                                                                                                                                            />

                                                                                                                                                                                                                                                                      <Text style={styles.label}>Drop-off Location:</Text>
                                                                                                                                                                                                                                                                                <TextInput
                                                                                                                                                                                                                                                                                            style={styles.input}
                                                                                                                                                                                                                                                                                                        placeholder="e.g., Game Complex"
                                                                                                                                                                                                                                                                                                                    value={dropoffLocation}
                                                                                                                                                                                                                                                                                                                                onChangeText={setDropoffLocation}
                                                                                                                                                                                                                                                                                                                                          />
                                                                                                                                                                                                                                                                                                                                                  </>
                                                                                                                                                                                                                                                                                                                                                        )}

                                                                                                                                                                                                                                                                                                                                                              <View style={styles.buttonContainer}>
                                                                                                                                                                                                                                                                                                                                                                      <Button title="Next" onPress={handleNext} />
                                                                                                                                                                                                                                                                                                                                                                            </View>
                                                                                                                                                                                                                                                                                                                                                                                </View>
                                                                                                                                                                                                                                                                                                                                                                                  );
                                                                                                                                                                                                                                                                                                                                                                                  };

                                                                                                                                                                                                                                                                                                                                                                                  const styles = StyleSheet.create({
                                                                                                                                                                                                                                                                                                                                                                                    container: { flex: 1, padding: 20, justifyContent: 'center' },
                                                                                                                                                                                                                                                                                                                                                                                      title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
                                                                                                                                                                                                                                                                                                                                                                                        info: { fontSize: 16, marginBottom: 10 },
                                                                                                                                                                                                                                                                                                                                                                                          label: { fontSize: 16, marginTop: 10 },
                                                                                                                                                                                                                                                                                                                                                                                            input: {
                                                                                                                                                                                                                                                                                                                                                                                                height: 40,
                                                                                                                                                                                                                                                                                                                                                                                                    borderColor: '#aaa',
                                                                                                                                                                                                                                                                                                                                                                                                        borderWidth: 1,
                                                                                                                                                                                                                                                                                                                                                                                                            borderRadius: 5,
                                                                                                                                                                                                                                                                                                                                                                                                                marginBottom: 10,
                                                                                                                                                                                                                                                                                                                                                                                                                    paddingHorizontal: 10,
                                                                                                                                                                                                                                                                                                                                                                                                                      },
                                                                                                                                                                                                                                                                                                                                                                                                                        buttonContainer: { marginTop: 20 },
                                                                                                                                                                                                                                                                                                                                                                                                                        });

                                                                                                                                                                                                                                                                                                                                                                                                                        export default DestinationInputScreen;