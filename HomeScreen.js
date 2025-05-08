import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

    return (
        <View style={styles.container}>
              <Text style={styles.title}>Welcome to Zachangu</Text>

                    <Button
                            title="Start Booking"
                                    onPress={() => navigation.navigate('SelectCity')}
                                          />

                                                <View style={styles.spacer} />

                                                      <Button
                                                              title="Ride History"
                                                                      onPress={() => navigation.navigate('RideHistory')}
                                                                            />

                                                                                  <View style={styles.spacer} />

                                                                                        <Button
                                                                                                title="More Options"
                                                                                                        onPress={() => navigation.navigate('MoreOptions')}
                                                                                                                color="#444"
                                                                                                                      />
                                                                                                                          </View>
                                                                                                                            );
                                                                                                                            };

                                                                                                                            const styles = StyleSheet.create({
                                                                                                                              container: {
                                                                                                                                  flex: 1,
                                                                                                                                      justifyContent: 'center',
                                                                                                                                          paddingHorizontal: 20,
                                                                                                                                            },
                                                                                                                                              title: {
                                                                                                                                                  fontSize: 24,
                                                                                                                                                      fontWeight: 'bold',
                                                                                                                                                          textAlign: 'center',
                                                                                                                                                              marginBottom: 30,
                                                                                                                                                                },
                                                                                                                                                                  spacer: {
                                                                                                                                                                      height: 15,
                                                                                                                                                                        },
                                                                                                                                                                        });

                                                                                                                                                                        export default HomeScreen;