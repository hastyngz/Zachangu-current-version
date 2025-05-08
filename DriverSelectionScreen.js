import React from 'react';
import { View, Text, FlatList, Image, Button, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const drivers = [
  {
      id: '1',
          name: 'James Banda',
              rating: 4.8,
                  vehicle: 'Toyota Vitz',
                      image: 'https://via.placeholder.com/100',
                        },
                          {
                              id: '2',
                                  name: 'Tiwonge Mvula',
                                      rating: 4.5,
                                          vehicle: 'Honda Motorcycle',
                                              image: 'https://via.placeholder.com/100',
                                                },
                                                ];

                                                const DriverSelectionScreen = () => {
                                                  const navigation = useNavigation();
                                                    const route = useRoute();

                                                      const {
                                                          fromCity,
                                                              toCity,
                                                                  taxiType,
                                                                      pickupLocation,
                                                                          dropoffLocation,
                                                                              intercity,
                                                                                } = route.params;

                                                                                  const handleSelectDriver = (driver) => {
                                                                                      navigation.navigate('RideSummary', {
                                                                                            fromCity,
                                                                                                  toCity,
                                                                                                        taxiType,
                                                                                                              pickupLocation,
                                                                                                                    dropoffLocation,
                                                                                                                          driver,
                                                                                                                                intercity,
                                                                                                                                    });
                                                                                                                                      };

                                                                                                                                        return (
                                                                                                                                            <View style={styles.container}>
                                                                                                                                                  <Text style={styles.title}>Select a Driver</Text>
                                                                                                                                                        <FlatList
                                                                                                                                                                data={drivers.filter((d) =>
                                                                                                                                                                          taxiType === 'Car'
                                                                                                                                                                                      ? d.vehicle.includes('Toyota')
                                                                                                                                                                                                  : d.vehicle.includes('Motorcycle')
                                                                                                                                                                                                          )}
                                                                                                                                                                                                                  keyExtractor={(item) => item.id}
                                                                                                                                                                                                                          renderItem={({ item }) => (
                                                                                                                                                                                                                                    <View style={styles.driverCard}>
                                                                                                                                                                                                                                                <Image source={{ uri: item.image }} style={styles.image} />
                                                                                                                                                                                                                                                            <View style={styles.info}>
                                                                                                                                                                                                                                                                          <Text style={styles.name}>{item.name}</Text>
                                                                                                                                                                                                                                                                                        <Text>Vehicle: {item.vehicle}</Text>
                                                                                                                                                                                                                                                                                                      <Text>Rating: {item.rating}</Text>
                                                                                                                                                                                                                                                                                                                    <Button title="Select" onPress={() => handleSelectDriver(item)} />
                                                                                                                                                                                                                                                                                                                                </View>
                                                                                                                                                                                                                                                                                                                                          </View>
                                                                                                                                                                                                                                                                                                                                                  )}
                                                                                                                                                                                                                                                                                                                                                        />
                                                                                                                                                                                                                                                                                                                                                            </View>
                                                                                                                                                                                                                                                                                                                                                              );
                                                                                                                                                                                                                                                                                                                                                              };

                                                                                                                                                                                                                                                                                                                                                              const styles = StyleSheet.create({
                                                                                                                                                                                                                                                                                                                                                                container: { flex: 1, padding: 16 },
                                                                                                                                                                                                                                                                                                                                                                  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
                                                                                                                                                                                                                                                                                                                                                                    driverCard: {
                                                                                                                                                                                                                                                                                                                                                                        flexDirection: 'row',
                                                                                                                                                                                                                                                                                                                                                                            marginBottom: 20,
                                                                                                                                                                                                                                                                                                                                                                                borderWidth: 1,
                                                                                                                                                                                                                                                                                                                                                                                    borderColor: '#ccc',
                                                                                                                                                                                                                                                                                                                                                                                        borderRadius: 10,
                                                                                                                                                                                                                                                                                                                                                                                            overflow: 'hidden',
                                                                                                                                                                                                                                                                                                                                                                                                padding: 10,
                                                                                                                                                                                                                                                                                                                                                                                                  },
                                                                                                                                                                                                                                                                                                                                                                                                    image: { width: 100, height: 100, borderRadius: 8 },
                                                                                                                                                                                                                                                                                                                                                                                                      info: { marginLeft: 10, justifyContent: 'space-around' },
                                                                                                                                                                                                                                                                                                                                                                                                        name: { fontSize: 18, fontWeight: '600' },
                                                                                                                                                                                                                                                                                                                                                                                                        });

                                                                                                                                                                                                                                                                                                                                                                                                        export default DriverSelectionScreen;