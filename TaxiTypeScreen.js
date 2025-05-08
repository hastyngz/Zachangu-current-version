import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const TaxiTypeScreen = () => {
  const navigation = useNavigation();
    const route = useRoute();

      const { fromCity, toCity, selectedCity, intercity } = route.params;

        const handleTaxiTypeSelect = (type) => {
            if (intercity) {
                  navigation.navigate('DestinationInput', {
                          fromCity,
                                  toCity,
                                          taxiType: type,
                                                  intercity: true,
                                                        });
                                                            } else {
                                                                  navigation.navigate('DestinationInput', {
                                                                          selectedCity,
                                                                                  taxiType: type,
                                                                                          intercity: false,
                                                                                                });
                                                                                                    }
                                                                                                      };

                                                                                                        return (
                                                                                                            <View style={styles.container}>
                                                                                                                  <Text style={styles.title}>Choose Taxi Type</Text>

                                                                                                                        <TouchableOpacity
                                                                                                                                style={styles.option}
                                                                                                                                        onPress={() => handleTaxiTypeSelect('Car')}
                                                                                                                                              >
                                                                                                                                                      <Text style={styles.optionText}>Car</Text>
                                                                                                                                                            </TouchableOpacity>

                                                                                                                                                                  <TouchableOpacity
                                                                                                                                                                          style={styles.option}
                                                                                                                                                                                  onPress={() => handleTaxiTypeSelect('Motorbike')}
                                                                                                                                                                                        >
                                                                                                                                                                                                <Text style={styles.optionText}>Motorbike</Text>
                                                                                                                                                                                                      </TouchableOpacity>
                                                                                                                                                                                                          </View>
                                                                                                                                                                                                            );
                                                                                                                                                                                                            };

                                                                                                                                                                                                            const styles = StyleSheet.create({
                                                                                                                                                                                                              container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
                                                                                                                                                                                                                title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
                                                                                                                                                                                                                  option: {
                                                                                                                                                                                                                      backgroundColor: '#1e90ff',
                                                                                                                                                                                                                          padding: 15,
                                                                                                                                                                                                                              marginVertical: 10,
                                                                                                                                                                                                                                  width: '80%',
                                                                                                                                                                                                                                      borderRadius: 10,
                                                                                                                                                                                                                                          alignItems: 'center',
                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                              optionText: { color: 'white', fontSize: 18 },
                                                                                                                                                                                                                                              });

                                                                                                                                                                                                                                              export default TaxiTypeScreen;