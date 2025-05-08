import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const PaymentScreen = () => {
  const navigation = useNavigation();
    const route = useRoute();

      const {
          fromCity,
              toCity,
                  taxiType,
                      pickupLocation,
                          dropoffLocation,
                              driver,
                                  intercity, // Add the intercity flag
                                    } = route.params;

                                      const [selectedMethod, setSelectedMethod] = useState(null);

                                        const handleConfirmPayment = () => {
                                            if (!selectedMethod) {
                                                  Alert.alert('Select Payment Method', 'Please choose a payment method.');
                                                        return;
                                                            }

                                                                Alert.alert('Payment Confirmed', `You selected ${selectedMethod}.`);
                                                                    navigation.navigate('RideSuccess', {
                                                                          fromCity,
                                                                                toCity,
                                                                                      taxiType,
                                                                                            pickupLocation,
                                                                                                  dropoffLocation,
                                                                                                        driver,
                                                                                                              paymentMethod: selectedMethod,
                                                                                                                    intercity, // Pass it along to the next screen
                                                                                                                        });
                                                                                                                          };

                                                                                                                            return (
                                                                                                                                <View style={styles.container}>
                                                                                                                                      <Text style={styles.title}>Choose Payment Method</Text>

                                                                                                                                            {/* Optionally display different options based on intercity flag */}
                                                                                                                                                  <Text style={styles.info}>
                                                                                                                                                          {intercity ? 'You are booking an intercity ride.' : 'This is a local ride.'}
                                                                                                                                                                </Text>

                                                                                                                                                                      <Button title="Airtel Money" onPress={() => setSelectedMethod('Airtel Money')} />
                                                                                                                                                                            <Button title="Mpamba" onPress={() => setSelectedMethod('Mpamba')} />
                                                                                                                                                                                  <Button title="Bank Card" onPress={() => setSelectedMethod('Bank Card')} />
                                                                                                                                                                                        <Button title="Cash (Pay Driver)" onPress={() => setSelectedMethod('Cash')} />

                                                                                                                                                                                              <View style={styles.confirmButton}>
                                                                                                                                                                                                      <Button title="Confirm Payment" onPress={handleConfirmPayment} />
                                                                                                                                                                                                            </View>
                                                                                                                                                                                                                </View>
                                                                                                                                                                                                                  );
                                                                                                                                                                                                                  };

                                                                                                                                                                                                                  const styles = StyleSheet.create({
                                                                                                                                                                                                                    container: { flex: 1, padding: 20, justifyContent: 'center' },
                                                                                                                                                                                                                      title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
                                                                                                                                                                                                                        info: { fontSize: 16, marginBottom: 10, textAlign: 'center' },
                                                                                                                                                                                                                          confirmButton: { marginTop: 30 },
                                                                                                                                                                                                                          });

                                                                                                                                                                                                                          export default PaymentScreen;